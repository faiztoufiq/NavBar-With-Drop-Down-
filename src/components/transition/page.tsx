import { useState, useTransition } from "react";
import { comonText } from "@/common/constant";

export default function Input() {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage = e.target.value;

    startTransition(() => {
      setMessage(newMessage);
    });
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center p-6 w-80 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">
          {comonText.messageInput}
        </h1>
        <input
          type="text"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-64 focus:outline-none focus:border-blue-500 transition duration-200"
          placeholder="Type your message here..."
        />
        {isPending && (
          <span className="mt-2 text-blue-600">{comonText.updating}</span>
        )}
        <div className="mt-4 w-40 overflow-scroll">
          <p className="text-lg font-medium w-40 ">
            {comonText.currentMessage}
          </p>
          <p className="text-gray-700 w-40 ">{message}</p>
        </div>
      </div>
    </div>
  );
}
