"use client";

import { useEffect } from "react";

export function TitleWatcher() {
  useEffect(() => {
    const originalTitle = document.title;
    const messages = [
      "⚡ ¡Asegura tu compra!",
      "👉 Somos tu mejor opción"
    ];

    let interval: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let i = 0;
        interval = setInterval(() => {
          document.title = messages[i % messages.length];
          i++;
        }, 2000);
      } else {
        clearInterval(interval);
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(interval);
    };
  }, []);

  return null;
};
