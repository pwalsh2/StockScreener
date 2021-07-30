import React, { useMemo, useState } from "react";
import {
	useTable,
	useGlobalFilter,
	useFilters,
	useSortBy,
	usePagination,
	UseRowSelectHooks,
	useRowSelect,
} from "react-table";
import MOCK_DATA_SCREENER from "./MOCK_DATA_SCREENER.json";
import { COLUMNS } from "./columns";
import "./Table.css";
import { CheckBox } from "./CheckBox";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
export const FilteringTable = (props) => {
	const columns = COLUMNS; // use MEMO ??????
	const data = props.data; // use MEMO ??????

	// Deconstructing useTable instance
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		state,
		prepareRow,
		selectedFlatRows,
		allColumns,
		getToggleHideAllColumnsProps,
		setHiddenColumns,
	} = useTable(
		{
			columns,
			data,
			initialState: {
				hiddenColumns: columns.map(column => {
					if (column.show === false) return column.accessor || column.id;
				}),
			}
		},
		useFilters,
		useSortBy,
		usePagination,
		useRowSelect,
		(hooks) => {
			hooks.visibleColumns.push((columns) => {
				return [
					{
						id: "selection",
						header: ({ getToggleAllRowsSelectedProps }) => (
							<CheckBox {...getToggleAllRowsSelectedProps()} />
						),
						Cell: ({ row }) => (
							<CheckBox {...row.getToggleRowSelectedProps()} />
						),
					},
					...columns,
				];
			});
		}
	);
	console.log(selectedFlatRows);
	
	const { pageIndex } = state;
	const [ hideColumns, setHideColumns] = useState(false)
	const hideShowColumns = () => {
		
		if(hideColumns){

			return <div style = {{float:'left'}}>
			<button  style = {columnSelectButtonStyle} onClick = {(e) => setHideColumns(false)}>Hide/Show Columns</button>
			<div style = {hideColumnsDiv}>
			
					<CheckBox {...getToggleHideAllColumnsProps()} />Hide All{" "}
				
				{allColumns.map((column) => (
					<div key={column.id}>
						
							<input type='checkbox' {...column.getToggleHiddenProps()} />
							{column.header}
	
					</div>
				))}
			</div> </div >
		}
		else{
			
			return <div style = {{float: 'left'}}><button  style = {columnSelectButtonStyle} onClick = {(e) => setHideColumns(true)}>Hide/Show Columns</button>
				</div>

		}
	}

	const showOverview = () => {

		setHiddenColumns('Current_Price', 'R_On_E')
	}
	
	const showGrowth = () => {

		setHiddenColumns('Current_Price')
	}
	
	
	const showRatios = () => {

		setHiddenColumns('Current_Price')
	}
	
	const showFundamental = () => {

		setHiddenColumns('Current_Price')
	}
	
	const showOwnership = () => {

		setHiddenColumns('Current_Price')
	}
	
	const showQuickFinancials = () => {

		setHiddenColumns('Current_Price')
	}

	const masterDiv = {
		backgroundColor: 'white',
		
	}
	const columnSelectDivStyle = {
		float: 'left',
		padding: "1rem",
		backgroundColor: 'white',
		display: 'flex'
	}

	const columnSelectButtonStyle = {
		backgroundColor: '#888888',
		color: 'black',
		fontsize: '20px',
		padding: '10px 60px',
		borderradius: '5px',
		margin: '10px 0px',
		cursor: 'pointer'
	}
	const hideColumnsDiv = {

		width: '200px',
  		height: '300px',
  		overflow: 'scroll'
	}

	const headerDivStyle = {
		height: '100px'
	}
	const headerStyle = {
		fontsize:'20px',
		
	}

	const selectColumnsButtonsStyle = {

	}
	return (
		<>
		
			<div>
			<div className = "divPresets"> 
				{/*<div style = {columnSelectDivStyle}>
				
				
				
			</div> */}
			
				
				<div style = {columnSelectDivStyle}>
					<ButtonGroup>
					<Button  onClick = {
						(e) => showOverview()
					} >Overview</Button>
					<Button    onClick = {
						(e) => showGrowth()
					} >Growth</Button>
					<Button    onClick = {
						(e) => showRatios()
					} >Ratios</Button>
					<Button className = "btnPresets"   onClick = {
						(e) => showFundamental()
					} >Fundamental</Button>
					<Button  className = "btnPresets"   onClick = {
						(e) => showOwnership()
					} >Ownership</Button>
					<Button className = "btnPresets"  onClick = {
						(e) => showQuickFinancials()
					} >Quick Financials</Button>
					</ButtonGroup>
					
				</div>
				
				
			</div>
		<div style = {{float: 'left'}}>
			<table {...getTableProps}>
				<thead style = {headerDivStyle}>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th style = {headerStyle} 
								{...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render("header")}
									<span>
										{column.isSorted ? (column.isSortedDesc ? "<" : ">") : " "}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			
			{/*
			<pre>
				<code>
					{JSON.stringify(
						{
							selectedFlatRows: selectedFlatRows.map((row) => row.original),
						},
						null,
						2
					)}  
				</code>
			</pre> */}
			<div>
				<span>
					Page{" "}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>
				</span>
				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
					Previous
				</button>
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					{" "}
					Next
				</button>
			</div>
			{hideShowColumns()}</div>
			</div>
			
		
		</>
	);
};

