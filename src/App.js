import './App.css';
import {createContext, useContext, useState} from "react";

const TestContext = createContext(null);

const CurrentTime = () => {
  return (<div>{(new Date()).toTimeString()}</div>)
}


const CompWithCountContextUse= () => {
    const {count, increment} = useContext(TestContext)

    return (<div>
        <button onClick={increment}> Increment</button>
        <span>{count}</span>
        <CurrentTime />
    </div>)
}

const CompWithOtherContextUse= () => {
    const {b} = useContext(TestContext)

    return (<div>
        <span>{b}</span>
        <CurrentTime />
    </div>)
}

function App() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(counter => counter + 1);
    return (
    <TestContext.Provider value={{a: 1, count, increment}} className="App">
      <header className="App-header">
        <CompWithOtherContextUse />
        <CompWithCountContextUse />
      </header>
    </TestContext.Provider>
  );
}

export default App;
