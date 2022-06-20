import style from './Concepts.module.css';

const Concepts = () => {
    let imgs = [];
    for (let i = 1; i < 7; i++) {
        imgs.push(<img src={`images/work-${i}.jpg`} alt={`Concept ${i}`} className={style.concept_image} />);
    }
    return (
        <div className={style.concepts}>
            <div className="container">
                <h2 className={`${style.concepts_title} main-title`}>Some concept works</h2>
                <div className={style.concepts_container}>
                    {imgs}
                </div>
            </div>
        </div>
    );
}

export default Concepts;