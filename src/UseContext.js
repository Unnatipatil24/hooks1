import React, { createContext } from "react";
import ComB from "./ComB";

    const FirstName = createContext();
    const LastName = createContext();

const UseContext = () => {
  return (
    
        <FirstName.Provider value={"Unnati"}>
        <LastName.Provider value={"Patil"}>
            <ComB/>
        </LastName.Provider>       
        </FirstName.Provider>
    
  )
};

export default UseContext
export { FirstName, LastName };
