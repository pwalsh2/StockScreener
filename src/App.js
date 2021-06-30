import logo from "./logo.svg";
import "./App.css";
import MOCK_DATA_SCREENER from "./components/MOCK_DATA_SCREENER.json";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
import { useState } from "react";
import { FilterCurrentPrice } from "./components/FilterCurrentPrice";
function App() {
	const [data, setData] = useState(MOCK_DATA_SCREENER);
	const [tempData, setTempData] = useState(MOCK_DATA_SCREENER);
	const updateData = (newData) => {
		setData(newData);
	};

	return (
		<div className='App'>
			<FilterCurrentPrice
				data={tempData}
				update={updateData}></FilterCurrentPrice>
			<FilteringTable data={data} />
		</div>
	);
}

export default App;
