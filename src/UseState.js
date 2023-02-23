import React, {useState}from 'react';

export default function UseState() {
    const [myName, setMyName] = useState('myapp');

const changeName = () => {
//val = "This is myapp" ;
//console.log(val) ;
setMyName('Hello');
}
return (
  <div>
    <h1 className='h1'>{myName}</h1>
    <button className='button' onClick={changeName}>click me please!</button>
  </div>
  )
};
