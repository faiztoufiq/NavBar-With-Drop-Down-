import React, { useEffect, useState } from "react";
import { comonText } from "@/common/constant";

const apiResult = process.env.REACT_APP_API_DATA as string;

interface Post {
  id: number;
  title: string;
  body: string;
}

const LazyLoadComponent: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiResult);
      const newData: Post[] = await response.json();

      setTimeout(() => {
        setData((prevData) => [...prevData, ...newData]);
      }, 5000);
    } catch (error) {
      console.error(comonText.errorFetchingData, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 text-center bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {comonText.lazyLoadedData}
      </h1>
      <ul className="space-y-4">
        {data.map(({ id, title }) => (
          <li
            key={id}
            className="bg-white p-4 rounded-md shadow hover:bg-gray-100 transition-colors"
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LazyLoadComponent;
