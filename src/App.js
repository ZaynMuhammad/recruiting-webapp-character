import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import { Attributes } from './components';


function App() {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
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
        </div>
      </section>
    </div>
  );
}

export default App;
