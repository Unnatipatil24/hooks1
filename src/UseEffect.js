import React, {useEffect, useState} from 'react';

export default function UseEffect(){

  const [countn, setCountn] = useState(0);

    useEffect(() => {
      console.log("Hello UseEffect");
    } );

      console.log("Hello outside");

  return (
    <div>
      
      <h1>{countn}</h1>
      <button className='button' onClick={
        () => setCountn(countn+1)
      }>Click</button>
    </div>
  )
}
