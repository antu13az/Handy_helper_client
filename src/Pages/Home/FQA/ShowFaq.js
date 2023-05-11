import React, { useState } from "react";

const ShowFaq = ({ question, ans }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="questionInfo">
        <details className="text-white font-bold cursor-pointer">
          <summary>{question}</summary>
          <p>{ans}</p>
        </details>
      </div>
    </>
  );
};

export default ShowFaq;
