import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "ANIL KUMAR NAROJU",
    email: "anilnaroju46@gmail.com",
    gender: "male",
    moblile: "6303741504",
    country: "INDIA",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className=" flex flex-col gap-1">
          <h1 className="text-white text-sm">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 className="ml-5">
              <span className="text-teritery">{key}:</span>
              <span className="text-teritery">{user[key]}</span>
            </h1>
          ))}

          <h1 className="text-white">{"}"}</h1>
        </div>
        <div className="h-[400px] ">
          <dotlottie-player
            src="https://lottie.host/538159aa-e2a7-4857-83fa-90e9bd3d97a1/j6OXla96cb.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
