import React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
//Remember, we can write these functional components in their own files 
    //to be exported and imported to the App component.
    //We've combined them here to simplify our example.

const Home = (props) => { 
  return (
    <h1 style={{color: "red"}}>Welcome</h1>
  );
}
    
const Phrase = (props) => {
  console.log(useParams());

  const {phrase} = useParams();
  console.log(typeof(`+${phrase}`));
  if (isNaN(+phrase)) {return (
  <h1 style={{color: "blue"}}>The word is: {phrase}</h1>)} else { return (
  <h1 style={{color: "blue"}}>The num is: {phrase}</h1>)}
}
// const Word = (props) => {
//   const {word} = useParams();
//   return <h1>The word is: {word}</h1>
// }
const Colors = (props) => {
  console.log(useParams());
  const {color1, color2, word1} = useParams();
  return <h1 style={{color: color1, backgroundColor:color2}}>The word is: {word1}</h1>;
}
const Color = (props) => {
  console.log(useParams());
  const {word1, color1} = useParams();
  return <h1 style={{color: color1}}>The word is: {word1}</h1>
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:phrase" element={<Phrase />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/:word1/:color1/:color2" element={<Colors />} />
        <Route path="/:word1/:color1" element={<Color />} />

      </Routes>
    </BrowserRouter>
  );
}   
export default App;
