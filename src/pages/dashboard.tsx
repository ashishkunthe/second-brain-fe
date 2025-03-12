import { useState } from "react";
import { Button } from "../Components/Button";
import { Card } from "../Components/Card";
import { BiPlus } from "react-icons/bi";
import { CreateContentModal } from "../Components/CreateContentModal";
import { SideBar } from "../Components/SideBar";
import { useContent } from "../hooks/useContent";
import { CiShare2 } from "react-icons/ci";

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { contents, loading, error } = useContent();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="p-4 flex-1 ml-64">
        {/* Navbar - Buttons aligned to the right */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4 ml-auto">
            <Button
              text="Add Content"
              variant="primary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              startIcon={<BiPlus />}
            />
            <Button
              text="Share Brain"
              variant="secondary"
              size="lg"
              onClick={() => {}}
              startIcon={<CiShare2 />}
            />
          </div>
        </div>

        {/* Create Content Modal */}
        <CreateContentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        {/* Loading/Error State */}
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {contents.length > 0 ? (
            contents.map(({ type, title, link }, index) => (
              <Card key={index} title={title} type={type} link={link} />
            ))
          ) : (
            <p className="text-center text-gray-500">No content available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
