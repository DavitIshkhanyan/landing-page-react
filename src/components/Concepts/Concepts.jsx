import style from './Concepts.module.css';

const Concepts = () => {
    return (
        <div className={style.concepts}>
            <div className="container">
                <h2 className={`${style.concepts_title} main-title`}>Some concept works</h2>
                <div className={style.concepts_container}>
                    <img src="images/work-1.jpg" alt="Concept 1" className={style.concept_image} />
                    <img src="images/work-2.jpg" alt="Concept 2" className={style.concept_image} />
                    <img src="images/work-3.jpg" alt="Concept 3" className={style.concept_image} />
                    <img src="images/work-4.jpg" alt="Concept 4" className={style.concept_image} />
                    <img src="images/work-5.jpg" alt="Concept 5" className={style.concept_image} />
                    <img src="images/work-6.jpg" alt="Concept 6" className={style.concept_image} />
                </div>
            </div>
        </div>
    );
}

export default Concepts;