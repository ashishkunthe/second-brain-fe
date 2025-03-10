import {
  IoLogoTwitter,
  IoVideocam,
  IoDocument,
  IoLink,
  IoPricetag,
} from "react-icons/io5";

export function SideBar() {
  return (
    <div className="h-screen w-64 bg-white shadow-md p-4">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <img src="/logo.png" alt="Second Brain Logo" className="h-6 w-6" />
        <h2 className="text-lg font-semibold text-gray-800">Second Brain</h2>
      </div>

      {/* Navigation */}
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center space-x-2 cursor-pointer hover:text-black">
          <IoLogoTwitter size={20} />
          <span>Tweets</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-black">
          <IoVideocam size={20} />
          <span>Videos</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-black">
          <IoDocument size={20} />
          <span>Documents</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-black">
          <IoLink size={20} />
          <span>Links</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-black">
          <IoPricetag size={20} />
          <span>Tags</span>
        </li>
      </ul>
    </div>
  );
}
