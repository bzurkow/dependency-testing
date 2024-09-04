import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const [buttonClickCount, setButtonClickCount] = useState(0);
  
  const number = 2
  const string = 'def'
  const arrayOfNumbers = [4, 5, 6]
  const memoizedArrayOfNumbers = useMemo(() => [4, 5, 6], [])
  const [stateArrayOfNumbers] = useState([4, 5, 6])
  const objectWithCount = {count: buttonClickCount}
  return (
    <div className="App">
      <h1>Dependency Testing</h1>
      <button onClick={() => setButtonClickCount(buttonClickCount + 1)}>Click me</button>
      <ChildComponent
        clickCount={buttonClickCount}
        propNumber={number}
        propString={string}
        propArrayOfNumbers={arrayOfNumbers}
        propStateArrayOfNumbers={stateArrayOfNumbers}
        propMemoizedArrayOfNumbers={memoizedArrayOfNumbers}
        propObjectWithCount={objectWithCount}
        propSimpleObject={{a: 1}}
        />
    </div>
  );
}

export default App;
