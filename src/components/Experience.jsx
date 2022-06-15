import ExperienceItem from "./ExperienceItem";

const Experience = () => {
    return (
        <div className="experience-info">
            <div className="container">
                <h3 className="footer-title main-title">Experience</h3>
                <div className="experience-container">
                    {/* <ExperienceItem /> */}
                    <div className="experience">
                        <p>Norma</p>
                        <p>Digital Product Designer</p>
                        <p>Mar 21 — Now</p>
                    </div>
                    <div className="experience">
                        <p>Enrich Mobile</p>
                        <p>UI Designer</p>
                        <p>Apr 2020 — Mar 21</p>
                    </div>
                    <div className="experience">
                        <p>ASDC</p>
                        <p>UI Designer</p>
                        <p>Jun 2020 — Mar 20</p>
                    </div>
                    <div className="experience">
                        <p>Talent Mondo</p>
                        <p>Contract UI Designer</p>
                        <p>Mar 20 — Jun 20</p>
                    </div>
                    <div className="experience">
                        <p>MobileUpp</p>
                        <p>iOS Developer & UI Designer</p>
                        <p>Jan 19 — Mar 20</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;