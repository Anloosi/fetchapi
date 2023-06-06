import Axios from "axios";
import { useEffect, useState} from "react";

function Excuse() {
const [generatedExcuse, setGeneratedExcuse] =useState("");


const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then ((res) =>{
        setGeneratedExcuse(res.data[0].excuse);
      }
    );  
};

  return (
    <div>
    <h1>Generate An Excuse</h1>
    <button onClick={() => fetchExcuse("party")}>Party</button>
    <button onClick={() => fetchExcuse("family")}>Party</button>
    <button onClick={() => fetchExcuse("office")}>Party</button>

    <p>{generatedExcuse}</p>
    </div>
  );
}

export default Excuse;
