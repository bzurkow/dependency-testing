import React, {useState, useEffect, useMemo} from 'react';

const objectWithCount = {count: 0}

function ChildComponent({
  clickCount,
  propNumber,
  propString,
  propArrayOfNumbers,
  propStateArrayOfNumbers,
  propMemoizedArrayOfNumbers,
  propObjectWithCount,
  propSimpleObject,
}) {
  const [numberRenderCount, setNumberRenderCount] = useState(0);
  const [stringRenderCount, setStringRenderCount] = useState(0);
  const [arrayOfNumbersRenderCount, setArrayOfNumbersRenderCount] = useState(0);
  const [memoizedArrayOfNumbersRenderCount, setMemoizedArrayOfNumbersRenderCount] = useState(0);
  const [stateArrayOfNumbersRenderCount, setStateArrayOfNumbersRenderCount] = useState(0);
  const [emptyObjectRenderCount, setEmptyObjectRenderCount] = useState(0);
  const [simpleObjectRenderCount, setSimpleObjectRenderCount] = useState(0);
  const [simpleObjectValueRenderCount, setSimpleObjectValueRenderCount] = useState(0);
  const [stateNestedArrayRenderCount, setStateNestedArrayRenderCount] = useState(0);
  const [objectWithCountRenderCount, setObjectWithCountRenderCount] = useState(0);
  const [objectWithCountValueRenderCount, setObjectWithCountValueRenderCount] = useState(0);
  const [propNumberRenderCount, setPropNumberRenderCount] = useState(0);
  const [propStringRenderCount, setPropStringRenderCount] = useState(0);
  const [propArrayOfNumbersRenderCount, setPropArrayOfNumbersRenderCount] = useState(0);
  const [propMemoizedArrayOfNumbersRenderCount, setPropMemoizedArrayOfNumbersRenderCount] = useState(0);
  const [propStateArrayOfNumbersRenderCount, setPropStateArrayOfNumbersRenderCount] = useState(0);
  const [propObjectRenderCount, setPropObjectRenderCount] = useState(0);
  const [propObjectWithCountValueRenderCount, setPropObjectWithCountValueRenderCount] = useState(0);
  const [propMemoizedObjectWithCountRenderCount, setPropMemoizedObjectWithCountRenderCount] = useState(0);
  const [propSimpleObjectRenderCount, setPropSimpleObjectRenderCount] = useState(0);
  const [propSimpleObjectValueRenderCount, setPropSimpleObjectValueRenderCount] = useState(0);

  const [stateArrayOfNumbers] = useState([1, 2, 3]);
  const [stateObjectWithNestedArray] = useState({nestedArray: [1, 2, 3]});

  const number = 1;
  const string = 'abc';
  const arrayOfNumbers = [1, 2, 3];
  const memoizedArrayOfNumbers = useMemo(() => [1, 2, 3], []);
  const emptyObject = {}
  const simpleObject = {a: 1}

  useEffect(() => {
    objectWithCount.count = clickCount;
  }, [clickCount]);

  useEffect(() => {
    setNumberRenderCount(numberRenderCount + 1);
  }, [number]);

  useEffect(() => {
    setStringRenderCount(stringRenderCount + 1);
  }, [string]);

  useEffect(() => {
    if(arrayOfNumbersRenderCount < 1000) {
      setArrayOfNumbersRenderCount(arrayOfNumbersRenderCount + 1);
    }
  }, [JSON.stringify(arrayOfNumbers)]);

  useEffect(() => {
    if(memoizedArrayOfNumbersRenderCount < 1000) {
      setMemoizedArrayOfNumbersRenderCount(memoizedArrayOfNumbersRenderCount + 1);
    }
  }, [memoizedArrayOfNumbers]);

  useEffect(() => {
    if(stateArrayOfNumbersRenderCount < 1000) {
      setStateArrayOfNumbersRenderCount(stateArrayOfNumbersRenderCount + 1);
    }
  }, [stateArrayOfNumbers]);

  useEffect(() => {
    emptyObjectRenderCount < 1000 && setEmptyObjectRenderCount(emptyObjectRenderCount + 1);
  }, [{}]);

  useEffect(() => {
    simpleObjectRenderCount < 1000 && setSimpleObjectRenderCount(simpleObjectRenderCount + 1);
  }, [simpleObject]);

  useEffect(() => {
    simpleObjectValueRenderCount < 1000 && setSimpleObjectValueRenderCount(simpleObjectValueRenderCount + 1);
  }, [simpleObject.a]);

  useEffect(() => {
    stateNestedArrayRenderCount < 1000 && setStateNestedArrayRenderCount(stateNestedArrayRenderCount + 1);
  }, [stateObjectWithNestedArray.nestedArray]);

  useEffect(() => {
    objectWithCountRenderCount < 1000 && setObjectWithCountRenderCount(objectWithCountRenderCount + 1);
  }, [objectWithCount]);

  useEffect(() => {
    objectWithCountValueRenderCount < 1000 && setObjectWithCountValueRenderCount(objectWithCountValueRenderCount + 1);
  }, [objectWithCount.count]);

  useEffect(() => {
    propNumberRenderCount < 1000 && setPropNumberRenderCount(propNumberRenderCount + 1);
  }
  , [propNumber]);

  useEffect(() => {
    propStringRenderCount < 1000 && setPropStringRenderCount(propStringRenderCount + 1);
  }
  , [propString]);

  useEffect(() => {
    propArrayOfNumbersRenderCount < 1000 && setPropArrayOfNumbersRenderCount(propArrayOfNumbersRenderCount + 1);
  }
  , [propArrayOfNumbers]);

  useEffect(() => {
    propMemoizedArrayOfNumbersRenderCount < 1000 && setPropMemoizedArrayOfNumbersRenderCount(propMemoizedArrayOfNumbersRenderCount + 1);
  }
  , [propMemoizedArrayOfNumbers]);

  useEffect(() => {
    propStateArrayOfNumbersRenderCount < 1000 && setPropStateArrayOfNumbersRenderCount(propStateArrayOfNumbersRenderCount + 1);
  }
  , [propStateArrayOfNumbers]);
  
  useEffect(() => {
    propObjectRenderCount < 1000 && setPropObjectRenderCount(propObjectRenderCount + 1);
  }
  , [propObjectWithCount]);

  useEffect(() => {
    propObjectWithCountValueRenderCount < 1000 && setPropObjectWithCountValueRenderCount(propObjectWithCountValueRenderCount + 1);
  }
  , [propObjectWithCount.count]);

  useEffect(() => {
    propSimpleObjectRenderCount < 1000 && setPropSimpleObjectRenderCount(propSimpleObjectRenderCount + 1);
  }
  , [propSimpleObject]);

  useEffect(() => {
    propSimpleObjectValueRenderCount < 1000 && setPropSimpleObjectValueRenderCount(propSimpleObjectValueRenderCount + 1);
  }
  , [propSimpleObject.a]);

  return (
    <div>
      <p><b>Button Click Count: {clickCount}</b></p>
      <h4>Defined in local component</h4>
      <p>Number ({JSON.stringify(number)}): {numberRenderCount === 1000 ? 'Infinite' : numberRenderCount}</p>
      <p>String ({JSON.stringify(string)}): {stringRenderCount === 1000 ? 'Infinite' : stringRenderCount}</p>
      <p>Array of numbers ({JSON.stringify(arrayOfNumbers)}): {arrayOfNumbersRenderCount === 1000 ? 'Infinite' : arrayOfNumbersRenderCount}</p>
      <p>Memoized array of numbers ({JSON.stringify(memoizedArrayOfNumbers)}): {memoizedArrayOfNumbersRenderCount === 1000 ? 'Infinite' : memoizedArrayOfNumbersRenderCount}</p>
      <p>State array of numbers ({JSON.stringify(stateArrayOfNumbers)}): {stateArrayOfNumbersRenderCount === 1000 ? 'Infinite' : stateArrayOfNumbersRenderCount}</p>
      <p>Empty object ({JSON.stringify({})}): {emptyObjectRenderCount === 1000 ? 'Infinite' : emptyObjectRenderCount}</p>
      <p>Simple object reference ({JSON.stringify(simpleObject)}): {simpleObjectRenderCount === 1000 ? 'Infinite' : simpleObjectRenderCount}</p>
      <p>Simple object (value as dependency) ({JSON.stringify(simpleObject.a)}): {simpleObjectValueRenderCount === 1000 ? 'Infinite' : simpleObjectValueRenderCount}</p>
      <p>State object with nested array ({JSON.stringify(number)}): {stateNestedArrayRenderCount === 1000 ? 'Infinite' : stateNestedArrayRenderCount}</p>
      <h4>With object defined outside component (uses button click count)</h4>
      <p>Object with count ({JSON.stringify(objectWithCount)}) ({JSON.stringify(number)}): {objectWithCountRenderCount === 1000 ? 'Infinite' : objectWithCountRenderCount}</p>
      <p>Object with count ({objectWithCount.count}) ({JSON.stringify(objectWithCount.count)}): {objectWithCountValueRenderCount === 1000 ? 'Infinite' : objectWithCountValueRenderCount}</p>
      <h4>From Props</h4>
      <p>number ({JSON.stringify(propNumber)}): {propNumberRenderCount === 1000 ? 'Infinite' : propNumberRenderCount}</p>
      <p>string ({JSON.stringify(propString)}): {propStringRenderCount === 1000 ? 'Infinite' : propStringRenderCount}</p>
      <p>array of numbers ({JSON.stringify(propArrayOfNumbers)}): {propArrayOfNumbersRenderCount === 1000 ? 'Infinite' : propArrayOfNumbersRenderCount}</p>
      <p>memoized array of numbers ({JSON.stringify(propMemoizedArrayOfNumbers)}): {propMemoizedArrayOfNumbersRenderCount === 1000 ? 'Infinite' : propMemoizedArrayOfNumbersRenderCount}</p>
      <p>state array of numbers ({JSON.stringify(propStateArrayOfNumbers)}): {propStateArrayOfNumbersRenderCount === 1000 ? 'Infinite' : propStateArrayOfNumbersRenderCount}</p>
      <p>object ({JSON.stringify(propObjectWithCount)}): {propObjectRenderCount === 1000 ? 'Infinite' : propObjectRenderCount}</p>
      <p>simple object ({JSON.stringify(propSimpleObject)}): {propSimpleObjectRenderCount === 1000 ? 'Infinite' : propSimpleObjectRenderCount}</p>
    </div>
  );
}

export default ChildComponent;