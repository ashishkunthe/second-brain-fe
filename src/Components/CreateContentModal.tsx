import { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon
import { Button } from "./Button";
import { Input } from "./Input";

export function CreateContentModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  // State for inputs
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Title:", title);
    console.log("Link:", link);
    onClose(); // Close modal after submission
  };

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

        <h2 className="text-lg font-bold mb-4">Create Content</h2>

        {/* Form to handle submission */}
        <form onSubmit={handleSubmit}>
          {/* Input Fields */}
          <Input placeholder="Title" />
          <Input placeholder="Link" />

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <Button
              size="md"
              text="Submit"
              variant="primary"
              onClick={() => handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

// Input Component with Better State Handling
