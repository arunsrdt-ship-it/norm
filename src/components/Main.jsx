import React from "react";
import { Link } from "react-router-dom";
import SEARCHPNG from "../../public/images/search.png"

const Main = () => {
  return (
    <main className="main-container  p-5 mt-40">
      <div className="main-items flex flex-wrap justify-around">
        <div className="left-image   mx-w-[700px] rounded-full">
          <img
            className=""
            src="https://qualtspire.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdia5fgnnb%2Fimage%2Fupload%2Fv1730455101%2Flayout%2Fwreuzwzojpg92q5pbeua.png&w=640&q=75"
          />
        </div>

        <div className="main-text ">
          <div className="font-bold text-7xl">
            <div>Improve Your</div> <div>Reading Experience</div> with NOrm
          </div>
          <div className="font-semibold mt-10 text-xl">
            We have 10+ newspapers and 500+ enrolled customers. <div>Find your desired course</div>
          </div>

          <div className="mt-10 border-1 border-gray-400 flex items-center">
            <input type="text" placeholder="Enter the News Headline...." className="p-5 w-full" /><button ><img className="w-[30px] cursor-pointer" src={SEARCHPNG}/></button>
          </div>

          <div className="mt-10 font-semibold">
            <div>
              500K+ People already trusted us.{" "}
              <Link to="/news" className="text-blue-500">
                View News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
