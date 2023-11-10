import './index.css'
import Header from "./components/Header.jsx";
import UserInputCard from "./components/UserInputCard.jsx";
import {useState} from 'react';
import DisplayTable from "./components/DisplayTable.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInv: 100,
        annualInv: 10,
        duration: 5,
        expReturn: 7
    });
    

    return (<>
            <Header/>
            <UserInputCard UserInput={userInput} setUserInput={setUserInput}/>
            <DisplayTable UserInput={userInput}/>
        </>

    )
}

export default App
