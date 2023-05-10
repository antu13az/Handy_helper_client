import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";

const ShowFaq = ({ question, ans }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="questionInfo">
        <div onClick={() => setShow(!show)} className="togle cursor-pointer">
          <h3>{question}</h3>
          <p className="cursor-pointer" onClick={() => setShow(!show)}>
            {show ? <FaMinusCircle /> : <BsFillPlusCircleFill />}
          </p>
        </div>

        {show && <p>{ans}</p>}
      </div>
    </>
  );
};

export default ShowFaq;
