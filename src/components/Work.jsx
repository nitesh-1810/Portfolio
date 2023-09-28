import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import BuyNow from "../assets/BuyNow.png";
import Monsoonmate from "../assets/Monsoonmate.png";
import TaskTracker from "../assets/TaskTracker.png";
import Portfolio_HTML from "../assets/Portfolio HTML CSS JS.png";
import Portfolio_React from "../assets/Portfolio React.png";

const Work = () => {
  const img = [
    BuyNow,
    Monsoonmate,
    TaskTracker,
    Portfolio_HTML,
    Portfolio_React,
  ];

  return (
    <div id="work">
      <h2>Project</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={true}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i, index) => (
              <div key={i.title} className="workItem">
                <img src={img[index]} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
