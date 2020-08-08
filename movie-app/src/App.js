import React,{useState} from 'react';
import './App.css';
import AddModal from './components/AddModal';
import {v4 as uuidv4} from 'uuid';
import ListMovies from './components/ListMovies';


function App() {
  const [movies,setMovies]=useState([{ id:uuidv4(),name:"Insane",image:"https://media.paperblog.fr/i/911/9115837/insane-2015-R-JUiRtv.jpeg",rating:3,description:"Une jeune femme est kidnappée en plein jour et se retrouve dans un hôpital psychiatrique où elle est droguée et torturée. Un journaliste déchu saisit l'affaire et essaie de découvrir la vérité pour relancer sa carrière"}
        ,{id:uuidv4(),name: "Rogue one",image:"https://media.paperblog.fr/i/826/8269735/rogue-one-star-wars-story-R-M3SB7I.jpeg",rating:5,description:"Rogue One : A Star Wars Story. 2 heures 14. États-Unis. Science Fiction - Aventures. Sortie en France le 14 décembre 2016 (le 16 décembre 2016 aux États-Unis). Réalisé par Gareth Edwards avec Felicity Jones, Diego Luna, Donnie Yen, Ben Mendelsohn, Forrest Whitaker, Jiang Wen, Mads Mikkelsen, Alan Tudyk, Riz Ahmed, Spencer Wilding, James Earl Jones, Genevieve O'Reilly, Valene Kane, Alistair Petrie, Paul Kasey...  Notre rébellion, c'est tout ce qu'il reste pour faire reculer l'Empire.  Avis écrit le 25 décembre 2016."},
        {id:uuidv4(),name:"Spectral",image:"https://media.paperblog.fr/i/826/8269969/spectral-2016-R-4ILdNo.jpeg",rating:3,description:"Synopsis : En Europe de l'est, dans un pays en pleine guerre civile, une unité de la SEAL Team 6 découvre durant sa mission dans la capitale, des entités surnaturelles extrêmement dangereuses. Une unité spéciale dirigée par la CIA qui s'occupe d'aider à maintenir l'ordre, est envoyée enquêter sur ces entités accompagnée d'un scientifique de la DARPA pour aider à comprendre le phénomène."}
  ])
  const AddMovie=(event)=> {
    setMovies(prevData=>{ return [...prevData,event]})
  }
 
  return (
    <div className="App">
      <h1>Movie App</h1>
  <ListMovies movies={movies} />
    <AddModal AddMovie={AddMovie} className="modal" />
     </div>
  );
}

export default App;
