import "lazysizes";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import memberOne from "../../images/customers/1.webp";
import membertwo from "../../images/customers/2.webp";
import memberthree from "../../images/customers/3.webp";
import memberfour from "../../images/customers/4.webp";
// import a plugin

import "lazysizes/plugins/parent-fit/ls.parent-fit";
const Team = () => {
  const teamMembers = [
    { id: 1, name: "Jhon", img: memberOne, designation: "Front-End Developer" },
    {
      id: 2,
      name: "Harry",
      img: membertwo,
      designation: "JvavaScript Developer",
    },
    {
      id: 3,
      name: "Merry",
      img: memberthree,
      designation: "MERN-Stack Developer",
    },
    {
      id: 4,
      name: "Michel",
      img: memberfour,
      designation: "Full-Stack Developer",
    },
  ];

  return (
    <section className="team_member_sec">

    <div className="container mx-auto px-5 ">
      <div className="text-center pt-8 pb-14">
        <h4 className="title ">Team Members</h4>
        <p>meet our gorgious team members</p>
        <p className="underspan">
          <span className="bg-cyan-800"></span>
          <span className="bg-purple-600"></span>
          <span className="bg-cyan-800"></span>
        </p>
      </div>

      <div className="teamContainer">
        {teamMembers.map((member, index) => (
          <div key={index} className="teamInfo">
            <div className="avatar">
              <div className="w-36 rounded-full">
                <img
                  width="100"
                  height="100"
                  data-default-width="100"
                  data-default-height="100"
                  data-src={member.img}
                  alt=""
                  class="lazyload"
                />
              </div>
            </div>
            <h4>{member.name}</h4>
            <p>{member.designation}</p>
            <div className="socialInfo">
              <FaFacebook className="cursor-pointer text-blue-500" />
              <FaLinkedin className="cursor-pointer text-blue-400" />
              <FaTwitter className="cursor-pointer text-green-400" />
              <FaGithub className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Team;
