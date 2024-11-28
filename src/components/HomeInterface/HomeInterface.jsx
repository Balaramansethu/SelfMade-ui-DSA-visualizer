import React, { useEffect } from "react";
import "../HomeInterface/HomeInterface.css";
import heroBackgroundImage from "../../assets/HeroBackground.svg";
import gradientImage from "../../assets/gradientbg.svg";
import LinkedList from "../../assets/LinkedList.jpg";
import sorting from "../../assets/sorting.png";
import tree from "../../assets/tree.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeInterface = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: window.innerHeight * 0.4, //  (30% of the screen height)
      once: true,
    }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="Hero-container bg-black" >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Onest:wght@100..900&family=Roboto&display=swap');
      </style>
      <div className="section-header">
        <div className="padding-global text-center">
          <div className="container-large">
            <div className="header-component">
              <h1 className="text-quote text-center">
                Turning the invisible into the intutive
              </h1>
              <div className="header-content">
             
              </div>
              <div className="card-collection">
                <div className="item-card">
                  <img
                    src={sorting}
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 479px) 83vw, (max-width: 767px) 85vw, (max-width: 991px) 87vw, 100vw"
                    srcSet={sorting}
                    className="blog-image"
                  />
                  <div className="card-content">
                    <div className="card-top-content">
                      <div className="card-keyword-one-container">
                        <div className="card-keyword">Sorting</div>
                      </div>
                      <div className="card-keyword-two-container">
                        <div className="card-keyword">Arrays</div>
                      </div>
                    </div>
                    <h5 className="about-card">
                      Sorting algorithm: The art of arranging chaos beautifully.
                    </h5>
                  </div>
                </div>
                <div className="item-card">
                  <img
                    src={LinkedList}
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 479px) 83vw, (max-width: 767px) 85vw, (max-width: 991px) 87vw, 100vw"
                    srcSet={LinkedList}
                    className="blog-image"
                  />
                  <div className="card-content">
                    <div className="card-top-content">
                      <div className="card-keyword-one-container">
                        <div className="card-keyword">Linked-list</div>
                      </div>
                      <div className="card-keyword-two-container">
                        <div className="card-keyword">Stack</div>
                      </div>
                    </div>
                    <h5 className="about-card">
                      Linked-list: Node by node, a single path unfolds.
                    </h5>
                  </div>
                </div>
                <div className="item-card">
                  <img
                    src={tree}
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 479px) 83vw, (max-width: 767px) 85vw, (max-width: 991px) 87vw, 100vw"
                    srcSet={tree}
                    className="blog-image"
                  />
                  <div className="card-content">
                    <div className="card-top-content">
                      <div className="card-keyword-one-container">
                        <div className="card-keyword">Binary</div>
                      </div>
                      <div className="card-keyword-two-container">
                        <div className="card-keyword">Recursive</div>
                      </div>
                    </div>
                    <h5 className="about-card">
                      Tree algorithms: Branching out to make data manageable.
                    </h5>
                  </div>
                </div>
              </div>//
            </div>
          </div>
          <div className="container-large" data-aos="fade-up">
            <div className="stats-section">
              <div className="benifit-component">
                <div className="benifit-conent text-center">
                  <h2 className="stats-quote">See Algorithms Come Alive</h2>
                </div>
                <div className="benifit-grid">
                  <div className="benifit-grid-contents" data-aos="fade-up">
                    <div className="benifit-card-top-content">
                      <div className="benifit-heading-wrapper">
                        <h2 className="text">Zero</h2>
                      </div>
                      <div className="tiny-content">Limits on Practice</div>
                    </div>
                    <h6 className="text-h6">
                      Practice as much as you want with unlimited algorithm
                      trials
                    </h6>
                  </div>
                  <div className="benifit-grid-contents" data-aos="fade-up">
                    <div className="benifit-card-top-content">
                      <div className="benifit-heading-wrapper">
                        <h2 className="text">2X</h2>
                        <div className="tiny-content">
                          Faster Debugging of Logic
                        </div>
                      </div>
                    </div>
                    <h6 className="text-h6">
                      Visualize and fix algorithm logic 2X faster with real-time
                      animations.
                    </h6>
                  </div>
                  <div className="benifit-grid-contents" data-aos="fade-up">
                    <div className="benifit-card-top-content">
                      <div className="benifit-heading-wrapper">
                        <h2 className="text">70%</h2>
                      </div>
                      <div className="tiny-content">Faster Learning Curve</div>
                    </div>
                    <h6 className="text-h6">
                      Grasp concepts 70% faster than traditional methods
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-large-cta" data-aos="fade-up">
            <div className="padding-section">
              <div className="cta-component">
                <div className="cta-content">
                  <div className="section-headline">
                    <img
                      src="https://cdn.prod.website-files.com/663f84c0c7ca880739b5795a/6640ce46604f4dcab2d6f0e8_star.svg"
                      loading="lazy"
                      alt="logo-star"
                    />
                    <div>20+ positive user reviews</div>
                  </div>
                  <div className="pb-7"></div>
                  <h2 className="text">Turn Curiosity Into Clarity</h2>
                  <div className="pb-7"></div>
                  <div className="text-size-regular">
                    See code come alive with animated steps
                  </div>
                  <div className="pb-7"></div>
                  <div className="button-cta">
                    <div>Dive In</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <h1 className="text text-center pb-20 pt-10" data-aos="fade-in">
              Mission : Algorithm Possible
            </h1>
          </div>
          </div>
          </div>
         
          
          <div className="timeline" data-aos="fade-in" data-aos-delay="100">
            <div className="container left" data-aos="fade-in">
              <div className="content" data-aos="fade-right">
                <h2 className="font-extrabold">Ignite Your Curiosity!</h2>
                <p className="pt-3">
                  Learn the basics and set the foundation for problem-solving
                  like a pro.
                </p>
              </div>
            </div>
            <div className="container right" data-aos="fade-in">
              <div className="content" data-aos="fade-left">
                <h2 className="font-extrabold">See Code Come Alive!</h2>
                <p className="pt-3">
                  Experience step-by-step algorithm animations that simplify
                  complex logic.
                </p>
              </div>
            </div>
            <div className="container left" data-aos="fade-in">
              <div className="content" data-aos="fade-right">
                <h2 className="font-extrabold">Hands-on Mastery!</h2>
                <p className="pt-3">
                  {" "}
                  Experiment with algorithms and refine your logic .
                </p>
              </div>
            </div>
            <div className="container right" data-aos="fade-in">
              <div className="content" data-aos="fade-left">
                <h2 className="font-extrabold">Dive Deeper!!</h2>
                <p className="pt-3">
                  {" "}
                  Explore advanced concepts like trees, graphs, and recursion
                  with ease.
                </p>
              </div>
            </div>
            <div className="container left" data-aos="fade-in">
              <div className="content" data-aos="fade-right">
                <h2 className="font-extrabold">Practice to Perfection!</h2>
                <p className="pt-3">
                  Test your understanding with challenges tailored to build your
                  confidence.
                </p>
              </div>
            </div>
            <div className="container right" data-aos="fade-in">
              <div className="content" data-aos="fade-left">
                <h2 className="font-extrabold">From Learner to Creator!</h2>
                <p className="pt-3">
                  {" "}
                  Apply your knowledge to solve real-world problems, innovate
                  with algorithms and ace ypur interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInterface;
