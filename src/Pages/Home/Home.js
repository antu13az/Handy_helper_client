import React from "react";
import Header from "../Shared/Header";
// import FreeQuentlyAsk from "./FQA/FreeQuentlyAsk";

// import Partner from "./Partner";
// const LazyPartner = React.lazy(()=>(""))
const FreeQuentlyAsk = React.lazy(() => import("./FQA/FreeQuentlyAsk"));
const LazyReview = React.lazy(() => import("./Review"));
const LazySummary = React.lazy(() => import("./Summary"));
const LazyTeam = React.lazy(() => import("./Team"));
const LazyTooles = React.lazy(() => import("./Tooles"));
const LazyPartner = React.lazy(() => import("./Partner"));
const LazyContact = React.lazy(() => import("./Contacts"));

const Home = () => {
  return (
    <div className="containers ">
      <div className="home-background ">
        <Header />
        <div className="system-grid container mx-auto px-8">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="left-side"
          >
            <h2>
              The Better Solution For <br />
              Your Business
            </h2>
            <p>
              The best tools serves provider in the city.We trust that we
              provide you the best service.Also we provide one year service
              warranty with any prodct.Thanks for being with us.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex home-btn"
            >
              <button>Let's Go</button>
              <button>Explore More</button>
            </div>
          </div>
        </div>
      </div>
      <React.Suspense fallback="Loading...">
        <LazyTooles />
      </React.Suspense>

      <React.Suspense fallback="Loading..">
        <LazySummary />
      </React.Suspense>

      <React.Suspense fallback="Loading...">
        <LazyPartner />
      </React.Suspense>

      <React.Suspense fallback="Loading...">
        <LazyReview />
      </React.Suspense>

      <React.Suspense fallback="Loading...">
        <LazyTeam />
      </React.Suspense>

      <React.Suspense fallback="Loading...">
        <FreeQuentlyAsk />
      </React.Suspense>
      <React.Suspense fallback="Loading...">
        <LazyContact />
      </React.Suspense>
    </div>
  );
};

export default Home;
