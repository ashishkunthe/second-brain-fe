import { useEffect } from "react";
import { CiShare2, CiTwitter } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa"; // YouTube Icon

export function Card({
  title,
  link,
  type,
}: {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}) {
  useEffect(() => {
    if (type === "twitter") {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [type]);

  return (
    <div className="max-w-xs w-72 mx-auto border rounded-lg p-4 shadow-md bg-white min-h-48">
      <div className="flex justify-between items-center mb-2">
        {/* Title with Dynamic Icon */}
        <div className="flex items-center gap-2">
          {type === "twitter" ? (
            <CiTwitter className="text-xl text-blue-500" />
          ) : (
            <FaYoutube className="text-xl text-red-500" />
          )}
          <span className="font-semibold">{title}</span>
        </div>

        {/* Share & Delete Buttons */}
        <div className="flex items-center gap-2">
          <button className="text-gray-600 hover:text-black">
            <CiShare2 className="text-lg" />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <RiDeleteBin5Line className="text-lg" />
          </button>
        </div>
      </div>

      {/* Content Rendering */}
      <div className="rounded-lg overflow-hidden">
        {type === "twitter" ? (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        ) : (
          <iframe
            className="w-full h-40 rounded-lg"
            src={`https://www.youtube.com/embed/${getYouTubeID(link)}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

// Function to extract YouTube Video ID from URL
const getYouTubeID = (url: string) => {
  const match = url.match(/[?&]v=([^&#]+)/) || url.match(/youtu\.be\/([^&#]+)/);
  return match ? match[1] : "";
};
