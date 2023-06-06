import Axios from "axios";
import { useEffect, useState} from "react";

function Age() {
const [name, setName] =useState("");
const [predictedAge, setPredictedAge] = useState(null);

const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then ((res) =>{
        setPredictedAge(res.data.age);
    });  
};

  return (
    <div>
    <input 
    placeholder="name" 
    onChange={(event) => {
        setName(event.target.value);

    }}/>

    <button onClick={fetchData}>Predict Age</button>

    <h2>Name:{predictedAge?.name}</h2>
    <h2>Predicted Age:{predictedAge?.age}</h2>
    <h2>Count:{predictedAge?.count}</h2>
    </div>
  );
}

export default Age;
