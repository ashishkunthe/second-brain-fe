import {
  FaTwitter,
  FaVideo,
  FaFileAlt,
  FaLink,
  FaHashtag,
} from "react-icons/fa";

export function SideBar() {
  return (
    <div className="fixed inset-y-0 left-0 bg-white shadow-lg w-64 p-4">
      <h1 className="text-xl font-bold text-[#10B981] mb-6">Second Brain</h1>
      <nav className="space-y-4 text-gray-700">
        <a
          href="/tweets"
          className="flex items-center gap-3 hover:text-[#10B981]"
        >
          <FaTwitter size={20} /> Tweets
        </a>
        <a
          href="/videos"
          className="flex items-center gap-3 hover:text-[#10B981]"
        >
          <FaVideo size={20} /> Videos
        </a>
        <a
          href="/documents"
          className="flex items-center gap-3 hover:text-[#10B981]"
        >
          <FaFileAlt size={20} /> Documents
        </a>
        <a
          href="/links"
          className="flex items-center gap-3 hover:text-[#10B981]"
        >
          <FaLink size={20} /> Links
        </a>
        <a
          href="/tags"
          className="flex items-center gap-3 hover:text-[#10B981]"
        >
          <FaHashtag size={20} /> Tags
        </a>
      </nav>
    </div>
  );
}
