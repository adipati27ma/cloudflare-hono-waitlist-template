import React, { useEffect, useState } from "react";

type Props = {};

const ServerStatus = (props: Props) => {
  const [status, setStatus] = useState<string>("Checking server status...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data));
  }, []);

  return (
    <div>
      <h1>Server Status</h1>
      <p
        className={
          status.toLowerCase().includes("healthy") ? "text-green-500" : ""
        }
      >
        {status ?? "Unable to fetch server status."}
      </p>
    </div>
  );
};

export default ServerStatus;
