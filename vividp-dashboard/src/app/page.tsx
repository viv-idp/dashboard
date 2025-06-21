'use client';

import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [anomalies, setAnomalies] = useState([]);

  useEffect(() => {
    fetch("https://legendary-space-tribble-q7x67vx4vw7gf59r-8000.app.github.dev/anomalies")
      .then(res => res.json())
      .then(data => setAnomalies(data))
      .catch(err => console.error("API Fetch Error:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">VividP Log Anomalies</h1>
      <ul className="space-y-2">
        {anomalies.map((item, idx) => (
          <li key={idx} className="bg-gray-100 p-2 rounded">
            🔥 {item.log} — <span className="text-red-500 font-semibold">Confidence: {item.confidence}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
