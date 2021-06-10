import React from "react";
import Nav from "../components/nav";
import "../styles/global.css";

const Service = () => {
  return (
    <div>
      <Nav />
      <div>
        <h1 className="pt-20 font-extrabold text-3xl text-center">
          Our Services:
        </h1>
        <div className="fixed">
          <p className="pt-10 text-center font-sans md:font-serif">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="pt-10 text-center font-semibold text-xl">
            <h3>Web Application</h3>
            <h3>Game Development</h3>
            <h3>Android Application</h3>
            <h3>UI/UX Design</h3>
            <h3>IOS Application</h3>
            <h3>Automation Testing</h3>
          </div>
          <div className="max-w-screen-xl m-auto">
            <div className="flex w-full justify-evenly my-10">
              <div className="block md:flex flex-wrap items-center md:justify-between">
                <div className="w-auto md:w-96 border-2 px-6 py-6 shadow-xl mb-6 mx-4">
                  <div className="flex justify-between items-center justify-items-start py-2">
                    <h1 className="text-2xl font-semibold text-gray-600">
                      Web Application
                    </h1>
                  </div>
                  <div className="flex justify-between items-center justify-items-start py-2 pb-4 border-b-2">
                    <h1 className="text-xl text-gray-400">.NET & JAVA</h1>
                  </div>
                  <div className="py-4">
                    <p className="text-gray-400">
                      A web application is application software that runs on a
                      web server, unlike computer-based software programs that
                      are run locally on the operating system of the device. Web
                      applications are accessed by the user.
                    </p>
                  </div>
                </div>

                <div className="w-auto md:w-96 border-2 px-6 py-6 shadow-xl mb-6 mx-4">
                  <div className="flex justify-between items-center justify-items-start py-2">
                    <h1 className="text-2xl font-semibold text-gray-600">
                      Game Development
                    </h1>
                  </div>
                  <div className="flex justify-between items-center justify-items-start py-2 pb-4 border-b-2">
                    <h1 className="text-xl text-gray-400">PYTHON & JAVA</h1>
                  </div>
                  <div className="py-4">
                    <p className="text-gray-400">
                      Video game development is the process of developing a
                      video game. The effort is undertaken by a developer,
                      ranging from a single person to an international team
                      dispersed across the globe.
                    </p>
                  </div>
                </div>

                <div className="w-auto md:w-96 border-2 px-6 py-6 shadow-xl mb-6 mx-4">
                  <div className="flex justify-between items-center justify-items-start py-2">
                    <h1 className="text-2xl font-semibold text-gray-600">
                      Automation Testing
                    </h1>
                  </div>
                  <div className="flex justify-between items-center justify-items-start py-2 pb-4 border-b-2">
                    <h1 className="text-xl text-gray-400">SELENIUM</h1>
                  </div>
                  <div className="py-4">
                    <p className="text-gray-400">
                      In software testing, test automation is the use of
                      software separate from the software being tested to
                      control the execution of tests and the comparison of
                      actual outcomes with predicted outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
