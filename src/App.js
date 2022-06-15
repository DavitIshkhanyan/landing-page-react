import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog';
import Concepts from './components/Concepts';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <div className="user-info">
        <div className="container">
          <img src="images/avatar.jpg" alt="Avatar" className="user-avatar" />
          <p className="link mb-16">
            <a href="#">Contact Me</a>
          </p>
          <h1 className="main-title">Welcome to my Portfolio</h1>
          <p className="main-text">
            I’m Mete. I’m 24-year-old. I’m a Digital Product Designer who prioritizes simplicity and usability. Currently,
            I'm Digital Product Designer on Norma. Formerly Enrich Mobile, ASDC, TalentMondo, and MobileUpp. I love working
            on side projects, trying to improve myself on SwiftUI and Webflow.
          </p>
        </div>
      </div>
      <Blog />
      <Concepts />
      <Experience />
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
      <footer>
        <div className="links-info">
          <div className="container">
            <div className="footer-links">
              <div>
                <a href="#" className="footer-link">Made with Webflow</a>
              </div>
              <div className="footer-links2">
                <a href="#" className="footer-link footer-link2">dribble</a>
                <a href="#" className="footer-link footer-link2">linkedin</a>
                <a href="#" className="footer-link footer-link2">twitter</a>
                <a href="#" className="footer-link footer-link2">instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
