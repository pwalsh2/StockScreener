import MOCK_DATA_SCREENER from "../components/MOCK_DATA_SCREENER.json";
import { FilteringTable } from "../components/FilteringTable";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, ButtonGroup, Button, Overlay, Table } from "react-bootstrap";
export const Screener = () => {
	const [data, setData] = useState([MOCK_DATA_SCREENER]);
	const [two, setTwo] = useState(false)
	const addScreener = () => {
		
		setTwo(true)
	}



	
	return (
		<>
			<Button onClick = {(e) => addScreener()}>Add Screener</Button>	
			<div>

				

				{two
        ? <div><FilteringTable data = {data[0]} />
		<FilteringTable data = {data[0]}/> </div>
      
       				 : <div className = "overlay-hidden"><FilteringTable data = {data[0]} /></div>
			
	}
		</div></>
	);
};

export default Screener;
