import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table";
import MOCK_DATA_SCREENER from "./MOCK_DATA_SCREENER.json";
import { COLUMNS } from "./columns";
import "./Table.css";

export const FilteringTable = (props) => {
	const columns = COLUMNS; // Use MEMO ??????
	const data = props.data; // Use MEMO ??????

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable(
			{
				columns,
				data,
			},
			useFilters,
			useSortBy
		);
	return (
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
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
