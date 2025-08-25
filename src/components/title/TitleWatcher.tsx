"use client";

import { request } from "http";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  messages?: string[];
  intervalMs?: number;
};

export function TitleWatcher({
  messages = ["⚡ ¡Asegura tu compra!", "👉 Somos tu mejor opción"],
  intervalMs = 2000
}: Props) {
  const baseTitleRef = useRef<string>("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      baseTitleRef.current = document.title;
    });

    return () => cancelAnimationFrame(id);
  }, [pathname])

  useEffect(() => {
    let i = 0;

    const startRotation = () => {
      stopRotation();
      intervalRef.current = setInterval(() => {
        document.title = messages[i % messages.length];
        i++;
      }, 2000)
    };

    const stopRotation = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      };
    };

    const onVisibility = () => {
      if (document.hidden) {
        startRotation();
      } else {
        stopRotation();
        document.title = baseTitleRef.current || document.title;
      };
    };

    baseTitleRef.current = document.title;

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("focus", onVisibility);
    window.addEventListener("blur", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("focus", onVisibility);
      window.removeEventListener("blur", onVisibility);
      stopRotation();
    };

    // const originalTitle = document.title;

    // let interval: NodeJS.Timeout;

    // const handleVisibilityChange = () => {
    //   if (document.hidden) {
    //     let i = 0;
    //     interval = setInterval(() => {
    //       document.title = messages[i % messages.length];
    //       i++;
    //     }, 2000);
    //   } else {
    //     clearInterval(interval);
    //     document.title = originalTitle;
    //   }
    // };

    // document.addEventListener("visibilitychange", handleVisibilityChange);
    // return () => {
    //   document.removeEventListener("visibilitychange", handleVisibilityChange);
    //   clearInterval(interval);
    // };
  }, [messages, intervalMs]);

  return null;
};
