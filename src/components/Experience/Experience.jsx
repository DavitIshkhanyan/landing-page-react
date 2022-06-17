import ExperienceItem from "./ExperienceItem/ExperienceItem";
import style from './Experience.module.css';

const Experience = () => {
    return (
        <div className={style.experience_info}>
            <div className="container">
                <h3 className={`${style.footer_title} main-title`}>Experience</h3>
                <div className={style.experience_container}>
                    <ExperienceItem p1='Norma' p2='Digital Product Designer' p3='Mar 21 — Now' />
                    <ExperienceItem p1='Enrich Mobile' p2='UI Designer' p3='Apr 2020 — Mar 21' />
                    <ExperienceItem p1='ASDC' p2='UI Designer' p3='Jun 2020 — Mar 20' />
                    <ExperienceItem p1='Talent Mondo' p2='Contract UI Designer' p3='Mar 20 — Jun 20' />
                    <ExperienceItem p1='MobileUpp' p2='iOS Developer & UI Designer' p3='Jan 19 — Mar 20' />
                </div>
            </div>
        </div>
    );
}

export default Experience;