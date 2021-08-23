import './App.css';
import axios from 'axios';

function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
  //   fetch('https://https://randomuser.me/api/')
  // .then(response => response.json())
  // .then((data) => setItemList(data));
  axios.get('https://randomuser.me/api/').then((res) => setItemList(res.data));

  },[])
  return (
    <div className="App">
      <div className="container">
        <div className="container-left">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        </div>
        <div className="container-right">
          <h2></h2>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>

        
      </div>
     
    </div>
  );
}

export default App;

// https://randomuser.me/api/