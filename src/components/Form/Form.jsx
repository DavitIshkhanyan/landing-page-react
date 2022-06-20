import style from './Form.module.css';

const Form = () => {
    return (
        <div className={style.form_container}>
            <div className="container">
                <form action="#" className={style.details}>
                    <h3 className={`${style.form_title} main-title`}>Looking for help with design</h3>
                    <p className={style.form_subtitle}>Send me details</p>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className={style.form_text} placeholder="Enter your name" />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" className={style.form_text} placeholder="Enter your email" />
                    <label htmlFor="message">Detail</label>
                    <textarea name="message" id="message" className={style.message_area} cols="30" rows="10" placeholder="Enter your message"></textarea>
                    <div className={style.button}>
                        <button type="submit" className={style.submit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;