import logo from './logo.svg';
import './App.css';
import Api from './components/Api';

function App() {
  const [user,setUser]=useState([]);
  const HnadleJcbprops = (newjcb) => {
    setJcb(newjcb);
  }
  return (
    <div className="App">
     <Api />
    </div>
  );
}

export default App;
