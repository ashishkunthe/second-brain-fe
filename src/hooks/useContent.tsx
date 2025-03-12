import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END_URL } from "../utils/config";

export function useContent() {
  const [contents, setContents] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchContents() {
    setLoading(true);
    try {
      const response = await axios.get(`${BACK_END_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setContents(response.data.content);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch contents:", err);
      setError("Failed to load contents.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchContents();
  }, []);

  return { contents, setContents, loading, error, fetchContents }; // Added fetchContents
}
