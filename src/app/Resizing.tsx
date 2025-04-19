"use client";
import React from "react";
import { useSyncExternalStore } from "react";

function getSnapshot() {
  return window.innerWidth;
}

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("resize", callback);
  };
}

const ScreenWidthTracker = () => {
  const screenWidth = useSyncExternalStore(subscribe, getSnapshot);

  const backgroundColor = screenWidth > 768 ? "blue" : "orange";

  return (
    <div
      style={{
        backgroundColor,
        padding: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Screen Width: {screenWidth}px</h1>
    </div>
  );
};

export default ScreenWidthTracker;
