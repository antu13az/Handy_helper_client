import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import p1 from "../../images/pattner/1.png";
import p10 from "../../images/pattner/10.png";
import p11 from "../../images/pattner/11.png";
import p12 from "../../images/pattner/12.png";
import p13 from "../../images/pattner/13.png";
import p14 from "../../images/pattner/14.png";
import p15 from "../../images/pattner/15.png";
import p16 from "../../images/pattner/16.png";
import p17 from "../../images/pattner/17.png";
import p18 from "../../images/pattner/18.png";
import p2 from "../../images/pattner/2.png";
import p3 from "../../images/pattner/3.png";
import p4 from "../../images/pattner/4.png";
import p5 from "../../images/pattner/5.png";
import p6 from "../../images/pattner/6.png";
import p7 from "../../images/pattner/7.png";
import p8 from "../../images/pattner/8.png";
import p9 from "../../images/pattner/9.png";
const Partner = () => {
  const partners = [
    {
      id: 1,
      img: p1,
    },
    {
      id: 2,
      img: p2,
    },
    {
      id: 3,
      img: p3,
    },
    {
      id: 4,
      img: p4,
    },
    {
      id: 5,
      img: p5,
    },
    {
      id: 6,
      img: p6,
    },
    {
      id: 7,
      img: p7,
    },
    {
      id: 8,
      img: p8,
    },
    {
      id: 9,
      img: p9,
    },
    {
      id: 10,
      img: p10,
    },
    {
      id: 11,
      img: p11,
    },
    {
      id: 12,
      img: p12,
    },
    {
      id: 13,
      img: p13,
    },
    {
      id: 14,
      img: p14,
    },
    {
      id: 15,
      img: p15,
    },
    {
      id: 16,
      img: p16,
    },
    {
      id: 17,
      img: p17,
    },
    {
      id: 18,
      img: p18,
    },
  ];

  return (
    <section className="gorgeous_partner">
      <div className="text-center py-8 partner-container">
        <h2 className="title "> Our Gorgeous Partner</h2>
        <p>our gorgeour partner they work with us</p>
        <p className="underspan">
          <span className="bg-cyan-800"></span>
          <span className="bg-purple-600"></span>
          <span className="bg-cyan-800"></span>
        </p>
      </div>

      <div className="partner-info grid grid-cols-6 gap-12 px-24 py-10">
        {partners.map((partner, index) => (
          <div key={index}>
            <img
              data-default-width="100"
              height="100"
              data-default-height="100"
              width="180"
              data-src={partner.img}
              alt=""
              class="lazyload"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
