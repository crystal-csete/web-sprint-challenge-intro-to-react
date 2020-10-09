import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import { Jumbotron } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

const [char, setChar] = useState([]);
const [collapse, setCollapse] = useState(false);
const [status, setStatus] = useState('Closed');
const onEntering = () => setStatus('Opening...');

const onEntered = () => setStatus('Opened');

const onExiting = () => setStatus('Closing...');

const onExited = () => setStatus('Closed');

const toggle = () => setCollapse(!collapse);



useEffect(() => {
  fetch('https://rickandmortyapi.com/api/character/2')
  .then(res => {
     setChar(res.data)
     console.log('response from api')
  })
  .catch(err => {
    console.log('error')
  })

}, []);


  return (
        <div 
        className="App"
        >
        <h1 
        className="Header"
        >
        Characters
        </h1>
        <Character 
        char = {char} 
        />
        <div>
        <Jumbotron>
          <h1 
          className="display-1"
          >
          Hello, Morty!
          </h1>
          <p 
          className="lead"
          >
          This is an awesome show, I really love it!
          </p>

        <p 
        className="lead"
        >
        <Button 
          size="sm" 
          color="primary"
          >
          Different Characters
          </Button>
        </p>
        </Jumbotron>
        </div>
        <div>
        <Button 
        color="primary" 
        onClick={toggle} 
        style={{ marginBottom: '1rem' }}
        >
        Morty??
        </Button>
        <h5 color="pink" size="lg">
        Is Morty Alive?: Is This Button Open? {status}
        </h5>
        <Collapse
          isOpen={collapse}
          onEntering={onEntering}
          onEntered={onEntered}
          onExiting={onExiting}
          onExited={onExited}
        >
        <Card>
          <CardBody className="cardBody">
          Hopefully I get Morty's info in here soon!! Until then... Watch Rick and Morty!
          </CardBody>
        </Card>
        </Collapse>
      </div>
    </div>
  )
}


export default App;

// import axios from 'axios';
// import baseURL from './index.js'



// function App({ title, fetchUrl }) {
//   const [char, setChar] = useState([])

// useEffect(() => {

// async function fetchData() {
//   const request = await axios.get(fetchData);
//   console.log(request)
//   return request;
//   }
//   fetchData();
// }, []);



//   return (
//         <div className="App">
//           <h1 className="Header">Characters</h1>

//         </div>
//       );
//     };


//     export default App;


// const useFetch = (url) => {
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(true);

//   useEffect(async () => {
//   const response = await fetch(url);
//   const data = await response.json()
//   const [item] = data.results;
//   setData(item);
//   setLoading(false);
// }, []);

//   return {data, loading};

// };


// export default function App()  {

// const [count, setCount] = useState(0);
// const {data, loading} = useFetch('https://rickandmortyapi.com/api/')
// // const [person, setPerson] = useState(null)





//   return (
//     <div className="App">
//       <h1 className="Header">Characters</h1>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       {loading ? <div>...loading</div> : <div>{data.name}</div>}
//     </div>
//   );
// };

//   const [characters, setCharacters] = useState([])
//   const [currentCharacter, setCurrentCharacter] = useState(null)

//   const openDetails = (props) => {
//     setCurrentCharacter(props.characters)
//   }

//   // const closeDetails = () => {
//   //   setCurrentCharacter(null)
//   // }

// useEffect(() => {
//   const fetchCharacter = () => {
//     fetch
//     .then(res => {
//       setCharacters(res.data) 
//     })
//     .catch(err => {
//       debugger
//     })
//   }

// }, [])

// 

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


// const one = (props) => {
//   <div>
//     {props.characters}
//  <button onClick={() => openDetails(props.characters)}>Click here</button>
//   </div>
// }
// one()



