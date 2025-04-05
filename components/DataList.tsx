// components/DataList.tsx
'use client';

import { useEffect, useState } from 'react';

export default function DataList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://alkye-test-422384984803.us-central1.run.app/myapp/list/')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
