import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog/Blog';
import Concepts from './components/Concepts/Concepts';
import Experience from './components/Experience/Experience';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import UserInfo from './components/UserInfo/UserInfo';

function App() {
  return (
    <div className="App">
      <UserInfo />
      <Blog />
      <Concepts />
      <Experience />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
