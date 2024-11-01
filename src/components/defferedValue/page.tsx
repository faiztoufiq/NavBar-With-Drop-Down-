import { Suspense, useDeferredValue, useState } from "react";
import SlowList from "./data";
import { comonText } from "@/common/constant";

const Demo = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <div className="h-screen flex justify-center bg-slate-500 ">
      <div className="w-80">
        <input
          type="text"
          value={query}
          onChange={({ target: { value } }) => setQuery(value)}
          placeholder="Search..."
          className="border border-gray-700 mt-5 mb-5"
        />
        <div className="h-[500px] overflow-scroll">
          <Suspense fallback={<h2>{comonText.loading}</h2>}>
            <SlowList text={deferredQuery} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Demo;
