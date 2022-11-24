//  I was trying to do a memory game but ran out of time, so a changed it to a array of images from a API source. There will be alot of code in here that does not make sense.... sorry about that. But I have already added props, components, state and a API (fetch and display).


//  To use a component I must export in the file I want to connect to this one and import here
//  useEffect and useState are hooks that must be imported from react. Hooks allow function components to have access to state and other React features
import { useEffect, useState } from "react";
import Cards from "./components/cards"
import { motion } from "framer-motion"

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async ()=>{
      //  Here I use fetch to get data from another site, so that I can display it on this one   
      const r = await fetch("https://thronesapi.com/api/v2/Characters")
      const data = await r.json()
      console.log(data);
      setProjects(data.splice(data.length - 40));
    }
      getData();
  }, []);
  console.log(projects); 
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  /*{  
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }  
  const handleClick = () => {
  }}*/

//  Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...projects]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
      setProjects(shuffledCards)
    
    setCards(shuffledCards)
    setTurns(0)
  }
  //  Here I have a button that I connected to cards.js using props (and use links to link it to the cards section)
  const button = <button onClick={shuffleCards}>Rearrange Characters</button>

  return (
    <div>
      <Cards links={button}></Cards>
        
      <div className="card-grid"> 
        {projects.map((project, i) => {
        return (
          <div className="main-card" key={i}>
            <div className="image-div" style={{backgroundImage:`url(${project.imageUrl})`}} > {/*<img className="image" src={project.imageUrl}></img>*/} </div>
          </div>
        )
        })}
      </div>
    </div>
  );     
}

//  To use this component I must export here and import in the file I want it to be connected to (index.js)
export default App
