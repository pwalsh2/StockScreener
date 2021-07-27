import logo from "./logo.svg";
import "./App.css";
import {NavBar} from './components/NavBar'
import MOCK_DATA_SCREENER from "./components/MOCK_DATA_SCREENER.json";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
import { useState } from "react";
import { FilterCurrentPrice } from "./components/filters/FilterCurrentPrice";
import { FilterR_on_E } from "./components/filters/Filter_R_on_E";
import { FilterR_on_A } from "./components/filters/Filter_R_on_A";
function App() {
	const [data, setData] = useState(MOCK_DATA_SCREENER);
	const [tempData, setTempData] = useState(MOCK_DATA_SCREENER);
	const updateData = (newData) => {
		setData(newData);
	};
	const resetdata = () =>{
		setData(tempData);
	};

	return (
		<>
		<NavBar></NavBar>
		<div className='App'>
			{/*<FilterR_on_A
				data={data}
				update={updateData}></FilterR_on_A>
			
			<FilterR_on_E
				data={data}
				update={updateData}></FilterR_on_E>
			<button onClick={resetdata}/> */}
			
			<FilteringTable data={data} />
		</div>
		</>
	);
}

export default App;
