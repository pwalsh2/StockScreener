import React, { useMemo } from "react";
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
	} = useTable(
		{
			columns,
			data,
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
	return (
		<>
			<div>
				<div>
					<CheckBox {...getToggleHideAllColumnsProps()} /> Toggle All{" "}
				</div>
				{allColumns.map((column) => (
					<div key={column.id}>
						<label>
							<input type='checkbox' {...column.getToggleHiddenProps()} />
							{column.header}
						</label>
					</div>
				))}
			</div>
			<table {...getTableProps}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render("header")}
									<span>
										{column.isSorted ? (column.isSortedDesc ? ">" : "<") : " S"}
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
			</pre>
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
		</>
	);
};
