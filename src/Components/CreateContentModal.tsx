import { IoClose } from "react-icons/io5"; // Import close icon
import { Button } from "./Button";
import { Input } from "./Input";
import { useRef, useState } from "react";
import axios from "axios";
import { BACK_END_URL } from "../utils/config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "tweet",
}

export function CreateContentModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    if (!title || !link) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      await axios.post(
        `${BACK_END_URL}/api/v1/content`,
        { link, type, title },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      // Clear inputs after submission
      if (titleRef.current) titleRef.current.value = "";
      if (linkRef.current) linkRef.current.value = "";

      // Close the modal
      onClose();
    } catch (error) {
      console.error("Error submitting content:", error);
      alert("Failed to submit content. Please try again.");
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close button in top-right */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-lg font-bold mb-4 text-center">Create Content</h2>

        {/* Input Fields */}
        <div className="mb-4">
          <Input ref={titleRef} placeholder="Title" />
        </div>

        <div className="mb-4">
          <Input ref={linkRef} placeholder="Link" />
        </div>

        {/* Type Selection Buttons */}
        <div className="flex justify-center gap-3 mb-4">
          <Button
            text="Youtube"
            variant={type === ContentType.Youtube ? "primary" : "secondary"}
            onClick={() => setType(ContentType.Youtube)}
            size="md"
          />
          <Button
            text="Twitter"
            variant={type === ContentType.Twitter ? "primary" : "secondary"}
            onClick={() => setType(ContentType.Twitter)}
            size="md"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <Button
            size="md"
            text="Submit"
            variant="primary"
            onClick={addContent}
          />
        </div>
      </div>
    </div>
  );
}
