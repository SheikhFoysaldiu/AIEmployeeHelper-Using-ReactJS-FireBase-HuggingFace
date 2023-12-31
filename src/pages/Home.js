import React, { useContext } from "react";
import { AiContext } from "../contexts/AiContext";
import moduleList from "../assets/json/moduleList.json";
import Card from "../components/Shared/Card";
import Typewriter from 'typewriter-effect';
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  // changing the webpage title dynamically
  const {user} = useContext(AuthContext);
  document.title = `${process.env.REACT_APP_ApplicationName} | Home`;

  const { resetOutput } = useContext(AiContext);

  return (
    <div className="flex items-center justify-center">
      <section className="flex flex-col items-center gap-4 max-w-6xl w-full">
        <div className="flex flex-col items-center justify-center backdrop-blur-sm pt-4 md:pt-0">
        
          <Typewriter
          className="text-textHeaderColor text-3xl text-center px-3"
              options={{
                strings: [`Hello , ${user?.email ? user?.email : "Sir" }`, 'Please Choose a Module'],
                autoStart: true,
                loop: true,
              }}
            />
        
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-btnGradientStart to-btnGradientEnd text-5xl font-bold pb-4 px-3 text-center">
            What are we gonna create today?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-end w-full gap-6 p-4 pb-8 md:pb-4">
          {moduleList?.map((module, i) => {
            return (
              <Card key={i} module={module} resetOutput={resetOutput}></Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
