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
import {Screener} from "./Screener/Screener"
import "./components/assets/css/Navigation-with-Button.css"
import "./components/assets/bootstrap/css/bootstrap.min.css"
import "./components/assets/css/Article-List.css"
import "./components/assets/css/Brands.css"
import "./components/assets/css/Data-Table-1.css"
import "./components/assets/css/Data-Table.css"
import "./components/assets/css/Features-Clean.css"
import "./components/assets/css/Footer-Basic.css"
import "./components/assets/css/Navigation-with-Button.css"
import Mainlogo from "./components/assets/img/OutSeekLogo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
function App() {
	

	return (
		<>
		<body>
			<section></section>
			<section style = {{padding: '1rem'}} className= "article-list">
				<nav>
				<div>
					<div>
						<ul>
							<li>
							<div style = {{float: "right"}}>
								
								<ButtonGroup className="me-2" aria-label="First group">
									<Button style = {{background:"white", color: "black"}}>Login</Button> <Button>Sign up</Button>
								</ButtonGroup>
							</div>
								<div style = {{float: "left"}}>
								<img src = {Mainlogo} alt ="" style={{height: '30px',float: 'left'}}></img>
								</div>
								<Dropdown  >
									<Dropdown.Toggle style = {{background: 'white', color:"black"}}  id="dropdown-basic">
										menu
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="\#">Screener</Dropdown.Item>
										<Dropdown.Item href="\#">About Us</Dropdown.Item>
										
									</Dropdown.Menu>
									</Dropdown>
								
								
								
							</li>
						</ul>
					</div>
				</div>
				</nav>
				
			</section>
		</body>
		<Screener/>

		</>
	);
}

export default App;
