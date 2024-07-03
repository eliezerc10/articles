import { useState, useEffect } from "react";

export const useCheckImage = (url: string) => {
  const [exists, setExists] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setExists(true);
    img.onerror = () => setExists(false);
    img.src = url;
  }, [url]);

  return exists;
};