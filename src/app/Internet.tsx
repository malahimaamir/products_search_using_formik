"use client";
import React from "react";
import { useSyncExternalStore } from "react";

function getSnapshot() {
  return navigator.onLine;
}

function  subscribe(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

const NetworkStatus = () => {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  

  const backgroundColor = isOnline ? "green" : "red";

  return (
    <div
      style={{
        backgroundColor,
        padding: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>{isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default NetworkStatus;
