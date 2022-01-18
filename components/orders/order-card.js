import { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Status from "./status";

export default function OrderCard({ createdAt, order, status }) {
  const [newDate, setNewDate] = useState(new Date());

  useEffect(() => {
    changeDate();
  }, []);

  const changeDate = () => {
    let tempDate = new Date(createdAt);
    setNewDate(tempDate);
  };

  return (
    <div className='rounded-lg flex flex-row flex-wrap justify-start items-start space-x-1 divide-x-8 divide-transparent p-5 text-sm transition duration-300 transform hover:bg-white hover:bg-opacity-30'>
      <ChevronRightIcon className='w-5 h-5' />
      <span className=''>Mercado semanal</span>
      <span>$39.900</span>
      <span className='italic'>{newDate.toLocaleString()}</span>
      <Status name={status} />
    </div>
  );
}
