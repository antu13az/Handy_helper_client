import "lazysizes";
import React from "react";
import csImg from "../../images/svg/6230545.webp";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";
const Contacts = () => {
  return (
    <section id="contactsId" className="contact_us">
      <div className="text-center pt-8 pb-14">
        <h4 className="title ">Contact Us</h4>
        <p>if you have any question plz contact us</p>
        <p className="underspan">
          <span className="bg-cyan-800"></span>
          <span className="bg-purple-600"></span>
          <span className="bg-cyan-800"></span>
        </p>
      </div>
      <div className="container mx-auto c-container">
        <div className="c-img">
          <img
            data-default-width="550"
            className="mx-auto"
            width="550"
            height="100"
            data-default-height="100"
            data-src={csImg}
            alt=""
            class="lazyload"
          />
        </div>
        <div className="cs-from mx-auto">
          <input type="text" className="c-info" placeholder="Name" />
          <br />
          <input type="text" className="c-info" placeholder="Email" />
          <br />
          <textarea
            className="c-info h-36"
            placeholder="Your Message"
          ></textarea>
          <button aria-label="submit" className="">
            submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
