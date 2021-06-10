import React from "react";
import Nav from "../components/nav";
import "../styles/global.css";
import Footer from "../components/footer";
import about1 from "./about1.jpg";

const About = () => {
  return (
    <div>
      <Nav />
      <div>
        <div className="pt-20  w-full md:flex-wrap-reverse">
          <h1 className="font-extrabold text-3xl  mx-auto">About Us:</h1>
          <div className="flex">
            <div className=" w-1/2 ">
              <p className="pt-8 text-center font-sans md:font-serif">
                Nike might seem like a company that's too big to inspire smaller
                businesses. You might even wonder if Nike even still has an
                "About Us" page. As a matter of fact, it does, and it hasn't
                forgotten the company's roots. Nike began on the campus of the
                University of Oregon by the hand of the college's track coach,
                Bill Bowerman. And even though he no longer works at the
                company, one of his beloved quotes still brands the bottom of
                Nike's "About Us" page below: "If you have a body, you are an
                athlete." This bold sentence, referenced by the asterisked
                "Athlete" in the words right above it, sheds important light on
                Nike's audience. The brand may be big today, but Nike is all
                about the rising stars -- who Nike depends on to, according to
                the rest of its "About Us" page, "expand human potential." The
                takeaway for marketers? Know your audience, and make it obvious
                to that audience the instant they read about you on your
                website.
              </p>
              <div className="text-center pt-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pt-2 mx-auto">
                  Learn More
                </button>
              </div>
            </div>
            <div className="mx-auto">
              <img src={about1} />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};
export default About;
