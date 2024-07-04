import "../assets/css/dist/styles.css";
import Waving from "../media/waving.1bae5fcfb51082b5c2b4.png";
import { ReactComponent as Github} from "../assets/icons/brand-github.svg";
import { ReactComponent as Telegram} from "../assets/icons/telegram_black.svg";

const skillsIcons = [
    {
      img: "https://skillicons.dev/icons?i=html,css",
      id: 1,
    },
    {
      img: "https://skillicons.dev/icons?i=js,ts",
      id: 2,
    },
    {
      img: "https://skillicons.dev/icons?i=react,next",
      id: 3,
    },
    {
      img: "https://skillicons.dev/icons?i=tailwind,scss",
      id: 4,
    },
    {
      img: "https://skillicons.dev/icons?i=py,nodejs",
      id: 5,
    },
    {
      img: "https://skillicons.dev/icons?i=mongodb,postgres",
      id: 6,
    }
];

function Hero() {
    return (
      <>
        <section id="home" className="hero">
          <div className="container">
            <div className="content">
              <div className="hero-main">
                <div className="hero-text">
                  <h1>I am a versatile developer</h1>
                  <img src={Waving} alt="waving_hand" />
                  <p>
                    Hi, I'm Maxim Raisky. A passionate Full-stack
                    Developer based in Chernivtsi, Ukraine. 📍
                  </p>
                  <span>
                    <a
                      aria-label="telegram"
                      rel="noreferrer"
                      target="_blank"
                      href="https://t.me/maxim_paradise"
                    >
                      <Telegram width={32} height={32} />
                    </a>
                    <a
                      aria-label="github"
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/Creator-Art-Life"
                    >
                      <Github width={32} height={32} />
                    </a>
                  </span>
                </div>
  
                <div className="hero-img"></div>
              </div>
  
              {/*  */}
              <div className="skills">
                <p>Tech Stack</p>
                <div className="logos">
                  <ul>
                    {skillsIcons.map((icon) => (
                      <li key={icon.id}>
                        <img src={icon.img} alt="skill-icon" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero;