import style from './ExperienceItem.module.css';

const ExperienceItem = ({p1, p2, p3}) => {
    return (
        <div className={style.experience} >
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
        </div >
    );
}

export default ExperienceItem;