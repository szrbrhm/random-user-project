import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Card from './component/Card';


function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
  //   fetch('https://https://randomuser.me/api/results')
  // .then(response => response.json())
  // .then((data) => setItemList(data));
  axios.get('https://randomuser.me/api/').then((res) => setItemList(res.data));

  },[])
  return (
    <div className="App">
    {itemList.map((item) => (
      <Card key={item.id} item={item} />
    ))}
      
     
    </div>
  );
}

export default App;

// https://randomuser.me/api/