import Axios from "axios";
import {useEffect, useState} from "react";

function Fetch() {
const [catFact, setCatFact] =useState("");

const fetchCatfact = () => {
    Axios.get("https://catfact.ninja/fact").then ((res) =>{
        setCatFact(res.data.fact);
    });  
}
    useEffect(() => {
     fetchCatfact();
}, []);

  return (
    <div className="App">
    <button onClick={fetchCatfact}> Generate Cat Fact</button>
       <p>{catFact}</p>
    </div>
  );
}

export default Fetch;
