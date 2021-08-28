import React, {useState} from 'react';
import Home from './components/Home';
import Onboard from './components/Onboard';

const App = () => {
  const [visitedFirstTime, setVisitedFirstTime] = useState(true);

  const setDone = () => {
    setVisitedFirstTime(false);
  };

  return <>{visitedFirstTime ? <Onboard markAsDone={setDone} /> : <Home />}</>;
};

export default App;
