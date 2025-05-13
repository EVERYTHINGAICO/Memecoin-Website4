"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function HomePage() {
  const [data, setData] = useState<null | {
    ca: string;
    twitter_link: string;
    telegram_link: string;
    meta_info: string[];
  }>(null);


  useEffect(() => {
    fetch("https://re9tawzde2.execute-api.us-west-1.amazonaws.com/stage1/API/FetchData")
      .then((res) => res.json())
      .then((resJson) => {
        try {
          const parsedBody = JSON.parse(resJson.body);
          if (Array.isArray(parsedBody) && parsedBody.length > 0) {
            setData(parsedBody[0]);
          } else {
            toast.error("No data found in body");
          }
        } catch (e) {
          toast.error("Failed to parse body JSON");
        }
      })
      .catch(() => toast.error("Failed to fetch data"));
  }, []);

  function playDuckSound() {
    const audio = new Audio("/sounds/duck.mp3");
    audio.play();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <main className="flex flex-col max-w-[100vw] w-screen overflow-y-auto mt-[96px] lg:mt-0 overflow-x-hidden justify-center items-center h-full">
        <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col lg:flex-row items-center justify-start lg:justify-between lg:px-[111px] px-5 xl:px-[190px] min-h-[calc(100vh-108px)]">
          <div className="lg:hidden flex mt-[52px] flex-col items-center justify-center">
            <img
              onClick={() => playDuckSound()}
              draggable="false"
              className="rounded-3xl active:opacity-[98%] active:scale-[0.95] transition-all ease-linear duration-100 cursor-pointer size-[220px]"
              src="https://media.tenor.com/NQusEbiDSigAAAAj/duck-random.gif"
            />
          </div>
          <div className="flex flex-col mt-[52px] md:ml-9 lg:mt-0 text-start items-start justify-center">
            <h1 className="font-bold leading-10 md:leading-normal text-[36px] lg:text-[42px] xl:text-[46px]">
              Welcome to the Duck App
            </h1>
            <h2 className="font-medium leading-7 mt-1 md:max-w-[400px] text-xl">
              Get contract info, social links and useful metadata below!
            </h2>
            <div className="mt-3.5 flex flex-row items-center justify-center space-x-2">
              {data?.twitter_link && (
                <a
                  href={data.twitter_link}
                  target="_blank"
                  className="font-semibold px-4 border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-white active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 text-[17px] py-2.5 rounded-xl"
                >
                  Twitter
                </a>
              )}
              {data?.telegram_link && (
                <a
                  href={data.telegram_link}
                  target="_blank"
                  className="font-semibold px-4 border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-white active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 text-[17px] py-2.5 rounded-xl"
                >
                  Telegram
                </a>
              )}
            </div>
          </div>
          <div className="lg:flex hidden flex-col md:mr-9 items-center justify-center">
            <img
              onClick={() => playDuckSound()}
              draggable="false"
              className="rounded-3xl active:opacity-[98%] size-[290px] active:scale-[0.95] transition-all ease-linear duration-100 cursor-pointer"
              src="https://media.tenor.com/ItN5AuTpXX4AAAAM/chicken.gif"
            />
          </div>
        </section>

        {data && (
          <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 border-t border-zinc-200 flex-col lg:flex-row items-center justify-between lg:px-[111px] px-5 xl:px-[190px]">
            <div className="flex my-36 xl:mx-9 w-full flex-col items-center justify-center">
              <div className="font-semibold flex flex-col items-center justify-center text-center space-y-4 relative px-6 border border-[#9e782c] shadow-[1px_1px_0_#9e782c] transition-all ease-linear duration-100 bg-yellow-50 text-black text-[17px] py-6 rounded-xl">
                <div className="flex flex-row items-center space-x-4">
                  <span>Contract Address:</span>
                  <button
                    onClick={() => {
                      navigator.clipboard
                        .writeText(data.ca)
                        .then(() => toast.success("Copied to clipboard"))
                        .catch(() => toast.error("Could not copy"));
                    }}
                    className="font-semibold cursor-pointer px-4 uppercase border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-white active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 text-[17px] py-2 rounded-xl"
                  >
                    COPY
                  </button>
                </div>
                <code className="text-sm break-all">{data.ca}</code>
                <div className="text-start mt-4">
                  <ul className="list-disc list-inside text-left">
                    {data.meta_info.map((info, idx) => (
                      <li key={idx}>{info}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </motion.div>
  );
}
