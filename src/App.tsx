import { useState } from "react";
import { Button } from "./Components/Button";
import { Card } from "./Components/Card";
import { BiPlus } from "react-icons/bi";
import { CreateContentModal } from "./Components/CreateContentModal";
import { SideBar } from "./Components/SideBar"; // Import Sidebar

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <SideBar />

      {/* Main Content */}
      <div className="p-4 flex-1">
        {/* Button Section */}
        <div className="flex justify-end gap-4">
          <Button
            text="Add Content"
            variant="secondary"
            size="lg"
            onClick={() => setIsModalOpen(true)}
            startIcon={<BiPlus />}
          />
          <Button
            text="Click Here"
            variant="primary"
            size="lg"
            onClick={() => {}}
          />
        </div>

        {/* Create Content Modal */}
        <CreateContentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Card
            title="Twitter Post"
            type="twitter"
            link="https://x.com/ashish88390/status/1894837242989883700"
          />
          <Card
            title="Jaun Elia Poetry"
            type="youtube"
            link="https://youtu.be/vmA1DIKB9ZQ?si=T5F0cD3h6F7KlK5z"
          />
          <Card
            title="Twitter Post"
            type="twitter"
            link="https://x.com/ashish88390/status/1894837242989883700"
          />
          <Card
            title="Jaun Elia Poetry"
            type="youtube"
            link="https://youtu.be/vmA1DIKB9ZQ?si=T5F0cD3h6F7KlK5z"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
