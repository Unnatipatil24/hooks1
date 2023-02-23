import React, {useRef, useState} from 'react'

const UseRef = () => {

      const luckyName = useRef(null);
      const [show, setShow] = useState(false);

      const submitForm= (e) =>{
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert("please fill details") : setShow(true);
      }

  return (
    <div>
        {/*<h1>Hii</h1>*/}
        <form action="" onSubmit={submitForm}>
            <div>
              <label htmlFor="luckyName">Enter your Name</label>
              <input type="text" id="luckyName" ref={ luckyName }/>
            </div>
            <br/>
            <button className='button'>Submit</button>
        </form>
        <p> {show ? `your name is ${luckyName.current.value}` : "" } </p>
    </div>
  )
}

export default UseRef
