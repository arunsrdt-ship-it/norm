import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsListFetch = () => {
  const [news, setNews] = useState([]);
  const baseUrl = "https://newsdata.io/api/1/latest?apikey=pub_948afecd0f1c4997b9153e3e5745743c";

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setNews(res.data.results);
    });
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-center uppercase font-bold text-5xl">News</h1>
      <div className="flex flex-wrap gap-10 justify-center overflow-hidden">
        {news.map((item) => (
          <div className=" w-[300px]">
            <div className="news-cont grid shadow-xl  p-4 grid-cols-2  gap-20  wrapper" key={item.id}>
              <div className="box d grid col-span-2 row-start-1 row-end-1">
                <img className="overflow-hidden" src={item.image_url} />
              </div>
              <div className="box b text-left font-bold text-md grid col-start-1 col-end-3 row-start-2 row-end-2">{item.title}</div>
              <div className="box b text-left font-light text-md grid col-start-1 col-end-3 row-start-3 row-end-3">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsListFetch;
