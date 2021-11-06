import {useState} from "react"
import "./App.css";
import { Screener } from "./Screener/Screener";

function App() {
 	
 	const [tool , setTool] = useState(1)


	return (
		<>
		<div className="">
		
		
  		<div className="Screener">	<Screener></Screener></div>

	
		
		</div>
		</>
	);
}

export default App;
