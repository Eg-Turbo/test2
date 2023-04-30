"use client";
import Image from "next/image";
import CustomBtn from "../custom/MainBtn";
import landingImage from "../../public/upcoming.webp";
import Model from "../custom/Model";
import { useState } from "react";
function Landing() {
  let [modelState, setmodelState] = useState("hidden");
  const modelHandler = () => {
    modelState === "" ? setmodelState("hidden") : setmodelState("");
  };
  return (
    <>
      <Model visiblty={modelState} res={setmodelState} />
      <div className="landing relative mb-64">
        <Image
          src={landingImage}
          alt="lacasa de papel seriece"
          className="w-full h-80 md:h-auto"
        ></Image>
        <div className="container">
          <div className="description w-full sm:w-3/5 md:w-3/5 lg:w-2/6 absolute top-1/2 left-1/2 md:left-12 px-8 translate-y-50 translate-x-50 md:translate-x-0 flex flex-col items-center md:bg-red-600/50 rounded-xl py-12">
            <h2 className="text-6xl text-white font-bold mb-8">Avatar2</h2>
            <p className="text-white mb-12 text-orange-600 md:text-white">
              Neytiri, and their children — as their land becomes torn apart .
              Per an official synopsis, the Sully family endures danger, battles
              to the death, and tragedy throughout the film
            </p>
            <div className="buttons flex h-12 justify-center items-center gap-8">
              <CustomBtn title="Watch Now" />
              <button
                className="custom-btn inline-block"
                onClick={() => {
                  modelHandler();
                }}
              >
                Watch Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
