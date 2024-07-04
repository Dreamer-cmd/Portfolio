import WorkingEmoji from  "../media/working-emoji.c5325f52b5be329995a5.png";
import AboutImg from "../media/about-img.62b47e7f183d4b4e9feb.webp";
import RoundedText from "../media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";


function AboutMe() {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="about-content">
                        <div className="img-side">
                            <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
                            <img src={AboutImg} alt="mee" className="img-side__main-img" />
                            <span>
                                <img src={RoundedText} alt="text"/>
                            </span>
                        </div>
                        <div className="text-side">
                            <h3>About me</h3>
                            <h4>
                                Full-stack Developer <br /> based in Chernivtsi, Ukraine. 
                            </h4>
                            <p>
                                Hey, my name is Maxim, and I'm a Full-stack Developer. My passion
                                is to create and develop understandable programs for my users.
                                <br />
                                <br />
                                My main stack currently includes React/Next.js, Tailwind CSS and TypeScript for the frontend, and Node.js and Express for the backend.
                                <br />
                                <br />
                                I'm also into writing various pet projects in python.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;