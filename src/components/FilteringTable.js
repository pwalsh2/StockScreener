import React, { useMemo, useState } from "react";
import {
	useTable,
	useFilters,
	useSortBy,
	usePagination,
	useRowSelect,
} from "react-table";
import { COLUMNS } from "./columns";
import "./Table.css";
import { CheckBox } from "./CheckBox";
import { Dropdown, ButtonGroup, Button, Overlay, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ColumnFilter } from "./ColumnFilter";
import { NumberRangeColumnFilter } from "./NumberRangeColumnFilter";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
export const FilteringTable = (props) => {
	const columns = COLUMNS; // use MEMO ??????
	const data = props.data; // use MEMO ??????

	const defaultColumn = useMemo(
		() => ({
			// Let's set up our default Filter UI
			Filter: NumberRangeColumnFilter,
			filter: "between",
		}),
		[]
	);
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
				hiddenColumns: columns.map((column) => {
					if (column.show === false) return column.accessor || column.id;
				}),
			},
			defaultColumn,
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

	const { pageIndex } = state;
	const [hideColumns, setHideColumns] = useState(false);

	const hideShowColumns = () => {
		if (hideColumns) {
			return (
				<div style={{ float: "left" }}>
					<Button
						variant='outline-primary'
						onClick={(e) => setHideColumns(false)}>
						Close
					</Button>
					<div className='hideColumnsDiv'>
						<CheckBox {...getToggleHideAllColumnsProps()} />
						Hide All{" "}
						{allColumns.map((column) => (
							<div key={column.id}>
								<input type='checkbox' {...column.getToggleHiddenProps()} />
								{column.header}
							</div>
						))}
					</div>{" "}
				</div>
			);
		} else {
			return (
				<div style={{ float: "left" }}>
					<Button
						variant='outline-primary'
						onClick={(e) => setHideColumns(true)}>
						Hide/Show Columns
					</Button>
				</div>
			);
		}
	};
	const OverviewGroup = [
		"symbol",
		"Exchange",
		"Market_Cap",
		"Sector",
		"price",
		"volAvg",
		"lastDiv",
		"range",
		"changes",
		"companyName",
		"companyName",
		"industry",
		"description",
		"sector",
		"country",
	];

	const showOverview = () => {
		const showColumnList = OverviewGroup;
		let hiddenList = columns.filter((column) => {
			if (showColumnList.includes(column.accessor)) {
			} else {
				return column.accessor;
			}
		});
		const headerList = [];
		for (var i in hiddenList) {
			headerList.push(hiddenList[i].accessor);
		}
		console.log(headerList);
		setHiddenColumns(headerList);
	};
	const GrowthGroupAccessor = [
		"EPS_Growth",
		"Sales_Growth",
		"PEG",
		"FiveYrEPSGrowth",
		"revenueGrowth",
		"grossProfitGrowth",
		"ebitgrowth",
		"operatingIncomeGrowth",
		"netIncomeGrowth",
		"freeCashFlowGrowth",
		"fiveYRevenueGrowthPerShare",
		"fiveYNetIncomeGrowthPerShare",
		"fiveYShareholdersEquityGrowthPerShare",
		"assetGrowth",
		"bookValueperShareGrowth",
		"debtGrowth",
	];

	const showGrowth = () => {
		const showColumnList = GrowthGroupAccessor;
		let hiddenList = columns.filter((column) => {
			if (showColumnList.includes(column.accessor)) {
			} else {
				return column.accessor;
			}
		});
		const headerList = [];
		for (var i in hiddenList) {
			headerList.push(hiddenList[i].accessor);
		}
		console.log(headerList);
		setHiddenColumns(headerList);
	};

	const RatiosGroup = [
		"Current_Ratio",
		"Quick_Ratio",
		"peRatio",
		"priceToSalesRatio",
		"pocfratio",
		"pfcfRatio",
		"pbRatio",
		"ptbRatio",
		"evToSales",
		"currentRatio",
		"payoutRatio",
		"quickRatio",
		"cashRatio",
		"debtRatio",
		"debtEquityRatio",
		"cashFlowToDebtRatio",
		"operatingCashFlowSalesRatio",
		"freeCashFlowOperatingCashFlowRatio",
		"cashFlowCoverageRatios",
		"shortTermCoverageRatios",
		"capitalExpenditureCoverageRatio",
		"dividendPaidAndCapexCoverageRatio",
		"dividendPayoutRatio",
		"priceBookValueRatio",
		"priceToBookRatio",
		"priceToSalesRatio",
		"priceEarningsRatio",
		"priceToFreeCashFlowsRatio",
		"priceCashFlowRatio",
		"priceEarningsToGrowthRatio",
		"priceSalesRatio",
		"grossProfitRatio",
		"ebitdaratio",
		"operatingIncomeRatio",
		"incomeBeforeTaxRatio",
		"netIncomeRatio",
		"Debt_to_E",
		"P_E",
		"PEG",
		"P_S",
		"P_B",
		"P_FCF",
		"evToOperatingCashFlow",
		"evToFreeCashFlow",
		"debtToEquity",
		"debtToAssets",
		"netDebtToEBITDA",
		"salesGeneralAndAdministrativeToRevenue",
		"researchAndDdevelopementToRevenue",
		"intangiblesToTotalAssets",
		"capexToOperatingCashFlow",
		"capexToRevenue",
		"capexToDepreciation",
		"stockBasedCompensationToRevenue",
		"longTermDebtToCapitalization",
		"totalDebtToCapitalization",
	];

	const showRatios = () => {
		const showColumnList = RatiosGroup;
		let hiddenList = columns.filter((column) => {
			if (showColumnList.includes(column.accessor)) {
			} else {
				return column.accessor;
			}
		});
		const headerList = [];
		for (var i in hiddenList) {
			headerList.push(hiddenList[i].accessor);
		}
		console.log(headerList);
		setHiddenColumns(headerList);
	};
	const ValuationGroup = [
		"P_C",
		"P_B",
		"P_E",
		"P_FCF",
		"PEG",
		"EPS_Growth",
		"Sales_Growth",
		"fiveYShareholdersEquityGrowthPerShare",
	];

	const showValuation = () => {
		const showColumnList = ValuationGroup;

		let hiddenList = columns.filter((column) => {
			if (showColumnList.includes(column.accessor)) {
			} else {
				return column.accessor;
			}
		});
		const headerList = [];
		for (var i in hiddenList) {
			headerList.push(hiddenList[i].accessor);
		}
		console.log(headerList);
		setHiddenColumns(headerList);
	};
	const QuickFinancials = [
		"totalCurrentAssets",
		"totalNonCurrentAssets",
		"totalCurrentLiabilities",
		"totalNonCurrentLiabilities",
		"totalLiabilities",
		"totalStockholdersEquity",
		"revenue",
		"grossProfit",
		"ebitda",
		"netIncome",
		"netCashProvidedByOperatingActivities",
		"netCashUsedForInvestingActivites",
		"netCashUsedProvidedByFinancingActivities",
		"freeCashFlow",
	];
	const showQuickFinancials = () => {
		const showColumnList = QuickFinancials;
		let hiddenList = columns.filter((column) => {
			if (showColumnList.includes(column.accessor)) {
			} else {
				return column.accessor;
			}
		});
		const headerList = [];
		for (var i in hiddenList) {
			headerList.push(hiddenList[i].accessor);
		}
		console.log(headerList);
		setHiddenColumns(headerList);
	};

	return (
		<>
			<div>
				<div className='divPresets'>
					<div className='columnSelectDivStyle'>
						<ButtonGroup>
							<Button variant='outline-primary' onClick={(e) => showOverview()}>
								Overview
							</Button>
							<Button
								variant='outline-primary'
								onClick={(e) => showValuation()}>
								Valuation
							</Button>
							<Button variant='outline-primary' onClick={(e) => showRatios()}>
								Ratios
							</Button>
							<Button variant='outline-primary' onClick={(e) => showGrowth()}>
								Growth
							</Button>
							<Button
								variant='outline-primary'
								onClick={(e) => showQuickFinancials()}>
								Quick Financials
							</Button>
						</ButtonGroup>
						<div style={{ float: "right" }}>
							<ButtonGroup>
								{hideShowColumns()}
								<Button variant='outline-primary'>Trend View</Button>
								<Button variant='outline-primary'>Industry Metrics</Button>
								<Button variant='outline-primary'>Split Screen</Button>
								<ReactHTMLTableToExcel
									className='btn'
									table='Master-Table'
									filename='Export 1'
									sheet='sheet 1'
									buttonText='EXPORT'
								/>
								<Button variant='outline-primary'></Button>
							</ButtonGroup>
						</div>
					</div>
				</div>
				<div>
					<Table id='Master-Table' style={{}} {...getTableProps}>
						<thead>
							{headerGroups.map((headerGroup) => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((column) => (
										<th
											{...column.getHeaderProps(column.getSortByToggleProps())}>
											{column.render("header")}
											<span>
												{column.isSorted
													? column.isSortedDesc
														? "🔽"
														: "🔼"
													: ""}
											</span>
											{column.canFilter ? column.render("Filter") : null}
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
					</Table>

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
				</div>
			</div>
		</>
	);
};
