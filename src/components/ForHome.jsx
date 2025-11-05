import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ForHome = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const size = 4;
  const baseUrl = `https://newsdata.io/api/1/latest?apikey=pub_948afecd0f1c4997b9153e3e5745743c&size=${size}`;

  useEffect(() => {
    setLoading(true);
    axios.get(baseUrl).then((res) => {
      setTimeout(() => {
        setNews(res.data.results);
        setLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <div className="mt-20 ">
      <h1 className="text-center uppercase font-bold text-5xl">News</h1>
      <div className="flex flex-wrap gap-10 justify-center overflow-hidden">
        {loading ? (
          <div className="font-bold text-5xl justify-center p-5">Loading...</div>
        ) : (
          news.map((item) => (
            <div className="mt-10 w-[300px]">
              <div className="news-cont grid shadow-xl  p-2 grid-cols-2  gap-10  wrapper" key={item.id}>
                <div className="box d grid col-span-2 row-start-1 row-end-1">
                  <img className="overflow-hidden w-[300px] object-cover h-[200px]" src={item.image_url} />
                </div>
                <div className="box b text-left font-bold text-md grid col-start-1 col-end-3 row-start-2 row-end-2">
                  <p className="line-clamp-1">{item.title}</p>
                </div>
                <div className="box b text-left font-light text-md grid col-start-1 col-end-3 row-start-3 row-end-3 overflow-hidden ">
                  <p className="line-clamp-2">{item.description}</p>
                </div>
                <div className=" bg-gray-200 w-full cursor-pointer grid col-start-1 col-end-3 text-center text-xl p-2 rounded-xl hover:bg-gray-500 font-semibold ">
                  <Link target="_blank" to={item.link}>
                    Click Here for the News
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ForHome;
