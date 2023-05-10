import { useState } from "react";
import { questionAnss } from "./FqaAPI";
import ShowFaq from "./ShowFaq";
const FreeQuentlyAsk = () => {
  const [data, setData] = useState(questionAnss);

  return (
    <section>
      <div className="text-center pt-8 pb-14">
        <h4 className="title ">Feel Free To Ask</h4>
        <p>fell free to ask any question to us</p>
        <p className="underspan">
          <span className="bg-cyan-800"></span>
          <span className="bg-purple-600"></span>
          <span className="bg-cyan-800"></span>
        </p>
      </div>

      <div className="questionAnsContainer">
        {data.map((question,index) => (
          <ShowFaq key={index} {...question} />
        ))}
      </div>
    </section>
  );
};

export default FreeQuentlyAsk;
