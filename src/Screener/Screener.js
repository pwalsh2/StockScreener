import MOCK_DATA_SCREENER from "../Screenercomponents/MOCK_DATA_SCREENER.json";
import { FilteringTable } from "../Screenercomponents/FilteringTable";
import { useState,useEffect } from "react";
import { FetchAll } from '../Rest/fetch_Screen'
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, ButtonGroup, Button, Overlay, Table } from "react-bootstrap";
export const Screener = () => {


	const [data, setData] = useState([[]]);
	const [two, setTwo] = useState(false)
	const addScreener = () => {
		
		setTwo(!two)
	}


	

	
	return (
		<>   
		{
			two ? <Button onClick = {(e) => addScreener()}>Remove Screen</Button> 
			: 
			<Button onClick = {(e) => addScreener()}>Add Screener</Button>	
		}
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
