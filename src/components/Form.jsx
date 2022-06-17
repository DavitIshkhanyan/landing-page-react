const Form = () => {
    return (
        <div className="form-container">
            <div className="container">
                <form action="#" className="details">
                    <h3 className="form-title main-title">Looking for help with design</h3>
                    <p className="form-subtitle">Send me details</p>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-text" placeholder="Enter your name" />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="form-text" placeholder="Enter your email" />
                    <label htmlFor="message">Detail</label>
                    <textarea name="message" id="message" className="message-area" cols="30" rows="10" placeholder="Enter your message"></textarea>
                    <div className="button">
                        <button type="submit" className="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;