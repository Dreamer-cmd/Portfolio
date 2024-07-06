import ProBox from "./ProBox";
import CarRental from "../media/img_projects/car-rental-full.webp";
import Gym from "../media/img_projects/full-gym.jpg";
function Projects() {
    return (
        <>
            <section id="projects" className="project">
                <div className="container">
                    {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
                    <div className="project-content">
                        <p>portfolio</p>
                        <h3>Each project is a unique piece of development 🧩</h3>
                        <div className="projects-grid">
                        <ProBox
                            title="Car Rental"
                            img={CarRental}
                            date="(March 2024)"
                            description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                            techno1="React"
                            techno2="SCSS"
                            // code="https://github.com/"
                            // demo=""
                            scrollY="-83%"
                            icon="🚗"
                        />
                        <ProBox
                            title="Gym"
                            date="(January 2023)"
                            img={Gym}
                            description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                            techno1="React"
                            techno2="Tailwind CSS"
                            // code="https://github.com/"
                            // demo=""
                            scrollY="-89%"
                            icon="🏋️"
                        />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;