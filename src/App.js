import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST, API_URL } from './consts.js';
import { Attributes, Classes, Skills } from './components';


function App() {
  const [strength, setStrength] = useState(7);
  const [dexterity, setDexterity] = useState(7);
  const [constitution, setConstitution] = useState(7);
  const [intelligence, setIntelligence] = useState(7);
  const [wisdom, setWisdom] = useState(7);
  const [charisma, setCharisma] = useState(7);

  async function handlePost(e) {
    e.preventDefault();
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma
      })
    })
  }

  async function handleGet(e) {
    e.preventDefault();
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div className="container">
          <Attributes
            strength={strength}
            dexterity={dexterity}
            constitution={constitution}
            intelligence={intelligence}
            wisdom={wisdom}
            charisma={charisma}
            setStrength={setStrength}
            setDexterity={setDexterity}
            setConstitution={setConstitution}
            setIntelligence={setIntelligence}
            setWisdom={setWisdom}
            setCharisma={setCharisma}
          />
          <Classes
            CLASS_LIST={CLASS_LIST}
            strength={strength}
            dexterity={dexterity}
            constitution={constitution}
            intelligence={intelligence}
            wisdom={wisdom}
            charisma={charisma}
          />
          <Skills
            SKILL_LIST={SKILL_LIST}
            strength={strength}
            dexterity={dexterity}
            constitution={constitution}
            intelligence={intelligence}
            wisdom={wisdom}
            charisma={charisma}
          />
        </div>
        {/* TODO: put this in a seperate component */}
        <form onSubmit={handlePost}>
          <button type='submit'>Save Character</button>

        </form>
        <form onSubmit={handleGet}>
          <button type='submit'>Get Character</button>
        </form>
      </section>
    </div>
  );
}

export default App;
