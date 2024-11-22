import Image from "next/image";
import Card from "./components/Reacent-post-card";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hi, I am John, <br />
                Creative Technologist
              </h1>
              <p className="main-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="button">Download Resume</button>
            </div>
            <div>
              <div>
                <Image
                  src="/image.png"
                  height={299}
                  width={292}
                  alt="person"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-post">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3>recent-post</h3>
              <button className="view-all-button">View All</button>
            </div>

            <div className="card-parent">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">Featured Works</div>
            <div className="card-parent">
            <div className="card">
              <Image
                src="/1st-card.png"
                width={246}
                height={180}
                alt="image"
              ></Image>
              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                <p>2020</p>
                  </div>
                  <p>Dashboard</p>
                </div>
                <div>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>

            <div className="card">
              <Image
                src="/2nd-card.png"
                width={246}
                height={180}
                alt="image"
              ></Image>
              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                <p>2020</p>
                  </div>
                  <p>Dashboard</p>
                </div>
                <div>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>

            <div className="card">
              <Image
                src="/3rd-card.png"
                width={246}
                height={180}
                alt="image"
              ></Image>
              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                <p>2020</p>
                  </div>
                  <p>Dashboard</p>
                </div>
                <div>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
