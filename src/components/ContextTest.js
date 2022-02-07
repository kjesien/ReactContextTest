import {createContext, useContext, useState} from "react";
import {CurrentTime} from './CurrentTime'

const TestContext = createContext(null);


const CompWithCountContextUse= () => {
    const {count, increment} = useContext(TestContext)

    return (<div>
        <button onClick={increment}> Increment</button>
        <span>{count}</span>
        <CurrentTime />
    </div>)
}

const CompWithOtherContextUse= () => {
    const {other} = useContext(TestContext)

    return (<div>
        <span>{other}</span>
        <CurrentTime />
    </div>)
}

export const ContextTest = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(counter => counter + 1);
    return (
        <TestContext.Provider value={{other: 5, count, increment}} className="App">
            <span>CONTEXT</span>
            <CompWithOtherContextUse />
            <CompWithCountContextUse />
        </TestContext.Provider>
    );
}