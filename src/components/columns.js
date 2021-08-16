import { format } from "date-fns";
import { NumberRangeColumnFilter } from "./NumberRangeColumnFilter";

import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
	{ accessor: "id", header: "id", show: false },
	{
		accessor: "symbol",
		header: "Symbol",
		style: { whiteSpace: "nowrap" },
		Filter: ColumnFilter,
		filter: "Text",
		show: true,
	},
	{
		accessor: "companyName",
		header: "Company Name",
		show: true,
		Filter: ColumnFilter,
		filter: "Text",
	},
	{
		accessor: "Exchange",
		header: "Exchange",
		show: false,
		Filter: ColumnFilter,
		filter: "Text",
	},
	{
		accessor: "Market_Cap",
		header: "Market Capitalization",
		show: false,
	},
	{
		accessor: "Sector",
		header: "Sector",
		show: false,
		Filter: ColumnFilter,
		filter: "Text",
	},
	{
		accessor: "Current_Price",
		header: "Current Price",
		show: false,
	},
	{
		accessor: "R_On_E",
		header: "Return on Equity",
		show: false,
	},
	{
		accessor: "Current_Ratio",
		header: "Current Ratio",
	},
	{
		accessor: "R_on_A",
		header: "Return on Assets",
	},
	{
		accessor: "Debt_to_E",
		header: "Debt to Equity",
	},
	{
		accessor: "Quick_Ratio",
		header: "Quick Ratio",
		show: false,
	},
	{
		accessor: "Gross_Margin",
		header: "Gross Margin",
		show: false,
	},
	{
		accessor: "Operating_Margin",
		header: "Operating Margin",
		show: false,
	},
	{
		accessor: "Net_Profit_Margin",
		header: "Net Profit Margin",
		show: false,
	},
	{
		accessor: "EPS_Growth",
		header: "EPS Growth",
		show: false,
	},
	{
		accessor: "Sales_Growth",
		header: "Sales Growth",
		show: false,
	},
	{
		accessor: "P_E",
		header: "Price to Earnings",
		show: false,
	},
	{
		accessor: "PEG",
		header: "price/earnings to growth",
		show: false,
	},
	{
		accessor: "P_S",
		header: "Price to Sales",
		show: false,
	},
	{
		accessor: "P_B",
		header: "Price to Book",
		show: false,
	},
	{
		accessor: "P_FCF",
		header: "Price to Free Cash Flow",
		show: false,
	},
	{
		accessor: "Cash_Per_Share",
		header: "Cash Per Share",
		show: false,
	},
	{
		accessor: "Receivebles",
		header: "Receivebles",
		show: false,
	},
	{
		accessor: "FiveYrEPSGrowth",
		header: "5 year EPS Growth Rate",
		show: false,
	},
	{
		accessor: "ThreeYrEPSGrowth",
		header: "3 year EPS Growth Rate",
		show: false,
	},
	{
		accessor: "FiveYrNetIncomeGrowth",
		header: "5 Year Net Income Growth Rate",
		style: { whiteSpace: "nowrap" },
		show: false,
	},
	{
		accessor: "ThreeYrNetIncomeGrowth",
		header: "3 Year Net Income Growth Rate",
		show: false,
	},
	{
		accessor: "ThreeYrDebtGrowth",
		header: "3 Year Debt Growth Rate",
		show: false,
	},
	{
		accessor: "ThreeYrReceiveblesGrowth",
		header: "3 Year Receivebles Growth Rate",
		show: false,
	},
	{
		accessor: "P_C",
		header: "Price to Cash",
		show: false,
	},
	{
		accessor: "EPS",
		header: "EPS",
		show: false,
	},
	{
		accessor: "Dividend",
		header: "Dividend",
		show: false,
	},
	{
		accessor: "ROI",
		header: "Return On Investment",
		show: false,
	},
	{
		accessor: "Volume",
		header: "Volume",
		show: false,
	},
	{
		accessor: "EarningDate",
		header: "Earnings Date",
		show: false,
	},
	{
		accessor: "InsideOwnerShip",
		header: "InsideOwnerShip",
		show: false,
	},
	{
		accessor: "netIncome",
		header: "Net Income",
		show: false,
	},
	{
		accessor: "deferredIncomeTax",
		header: "Deferred Income Tax",
		show: false,
	},
	{
		accessor: "stockBasedCompensation",
		header: "stock Based Compensation",
		show: false,
	},
	{
		accessor: "changeInWorkingCapital",
		header: "Change In Working Capital",
		show: false,
	},
	{
		accessor: "accountsReceivables",
		header: "Accounts Receivables",
		show: false,
	},
	{
		accessor: "inventory",
		header: "Inventory",
		show: false,
	},
	{
		accessor: "accountsPayables",
		header: "Accounts Payables",
		show: false,
	},
	{
		accessor: "otherWorkingCapital",
		header: "Other Working Capital",
		show: false,
	},
	{
		accessor: "otherNonCashItems",
		header: "Other Non Cash Items",
		show: false,
	},
	{
		accessor: "netCashProvidedByOperatingActivities",
		header: "Net Cash Provided By Operating Activities",
		show: false,
	},
	{
		accessor: "investmentsInPropertyPlantAndEquipment",
		header: "Investments In Property Plant And Equipment",
		show: false,
	},
	{
		accessor: "acquisitionsNet",
		header: "Net Acquisitions",
		show: false,
	},
	{
		accessor: "purchasesOfInvestments",
		header: "Purchases Of Investments",
		show: false,
	},
	{
		accessor: "salesMaturitiesOfInvestments",
		header: "Sales Maturities Of Investments",
		show: false,
	},
	{
		accessor: "otherInvestingActivites",
		header: "Other Investing Activites",
		show: false,
	},
	{
		accessor: "netCashUsedForInvestingActivites",
		header: "Net Cash Used For Investing Activites",
		show: false,
	},
	{
		accessor: "debtRepayment",
		header: "Debt Repayment",
		show: false,
	},
	{
		accessor: "commonStockIssued",
		header: "Common Stock Issued",
		show: false,
	},
	{
		accessor: "commonStockRepurchased",
		header: "Common Stock Repurchased",
		show: false,
	},
	{
		accessor: "dividendsPaid",
		header: "Dividends Paid",
		show: false,
	},
	{
		accessor: "otherFinancingActivites",
		header: "Other Financing Activites",
		show: false,
	},
	{
		accessor: "netCashUsedProvidedByFinancingActivities",
		header: "Net Cash Used Provided By Financing Activities",
		show: false,
	},
	{
		accessor: "effectOfForexChangesOnCash",
		header: "Effect Of Forex Changes On Cash",
		show: false,
	},
	{
		accessor: "netChangeInCash",
		header: "Net Change In Cash",
		show: false,
	},
	{
		accessor: "cashAtEndOfPeriod",
		header: "Cash At End Of Period",
		show: false,
	},
	{
		accessor: "cashAtBeginningOfPeriod",
		header: "Cash At Beginning Of Period",
		show: false,
	},
	{
		accessor: "operatingCashFlow",
		header: "Operating Cash Flow",
		show: false,
	},
	{
		accessor: "capitalExpenditure",
		header: "Capital Expenditure",
		show: false,
	},
	{
		accessor: "freeCashFlow",
		header: "Free Cash Flow",
		show: false,
	},
	{
		accessor: "revenueGrowth",
		header: "Revenue Growth",
		show: false,
	},
	{
		accessor: "grossProfitGrowth",
		header: "Gross Profit Growth",
		show: false,
	},
	{
		accessor: "ebitgrowth",
		header: "Ebit growth",
		show: false,
	},
	{
		accessor: "operatingIncomeGrowth",
		header: "Operating Income Growth",
		show: false,
	},
	{
		accessor: "netIncomeGrowth",
		header: "Net Income Growth",
		show: false,
	},
	{
		accessor: "epsgrowth",
		header: "EPS Growth",
		show: false,
	},
	{
		accessor: "epsdilutedGrowth",
		header: "EPS Diluted Growth",
		show: false,
	},
	{
		accessor: "weightedAverageSharesGrowth",
		header: "Weighted Average Shares Growth",
		show: false,
	},
	{
		accessor: "weightedAverageSharesDilutedGrowth",
		header: "Weighted Average Shares Diluted Growth",
		show: false,
	},
	{
		accessor: "dividendsperShareGrowth",
		header: "Dividends per Share Growth",
		show: false,
	},
	{
		accessor: "operatingCashFlowGrowth",
		header: "Operating Cash Flow Growth",
		show: false,
	},
	{
		accessor: "freeCashFlowGrowth",
		header: "Free Cash Flow Growth",
		show: false,
	},
	{
		accessor: "tenYRevenueGrowthPerShare",
		header: "10 Year Revenue Growth Per Share",
		show: false,
	},
	{
		accessor: "fiveYRevenueGrowthPerShare",
		header: "5 Year Revenue Growth Per Share",
		show: false,
	},
	{
		accessor: "threeYRevenueGrowthPerShare",
		header: "3 Year Revenue Growth Per Share",
		show: false,
	},
	{
		accessor: "tenYOperatingCFGrowthPerShare",
		header: "10 Year Operating Cash Flow Growth Per Share",
		show: false,
	},
	{
		accessor: "fiveYOperatingCFGrowthPerShare",
		header: "5 Year Operating Cash Flow Growth Per Share",
		show: false,
	},
	{
		accessor: "threeYOperatingCFGrowthPerShare",
		header: "3 Year Operating Cash Flow Growth Per Share",
		show: false,
	},
	{
		accessor: "tenYNetIncomeGrowthPerShare",
		header: "10 Year Net Income Growth Per Share",
		show: false,
	},
	{
		accessor: "fiveYNetIncomeGrowthPerShare",
		header: "5 Year Net Income Growth Per Share",
		show: false,
	},
	{
		accessor: "threeYNetIncomeGrowthPerShare",
		header: "3 Year Net Income Growth Per Share",
		show: false,
	},
	{
		accessor: "tenYShareholdersEquityGrowthPerShare",
		header: "10 Year Shareholders Equity Growth Per Share",
		show: false,
	},
	{
		accessor: "fiveYShareholdersEquityGrowthPerShare",
		header: "5 Year Shareholders Equity Growth Per Share",
		show: false,
	},
	{
		accessor: "threeYShareholdersEquityGrowthPerShare",
		header: "3 Year Shareholders Equity Growth Per Share",
		show: false,
	},
	{
		accessor: "tenYDividendperShareGrowthPerShare",
		header: "10 Year Dividend Per Share Growth Per Share",
		show: false,
	},
	{
		accessor: "fiveYDividendperShareGrowthPerShare",
		header: "5 Year Dividend Per Share Growth Per Share",
		show: false,
	},
	{
		accessor: "threeYDividendperShareGrowthPerShare",
		header: "3 Year Dividend Per Share Growth Per Share",
		show: false,
	},
	{
		accessor: "receivablesGrowth",
		header: "Receivables Growth",
		show: false,
	},
	{
		accessor: "inventoryGrowth",
		header: "Inventory Growth",
		show: false,
	},
	{
		accessor: "assetGrowth",
		header: "Asset Growth",
		show: false,
	},
	{
		accessor: "bookValueperShareGrowth",
		header: "Book Value Per Share Growth",
		show: false,
	},
	{
		accessor: "debtGrowth",
		header: "Debt Growth",
		show: false,
	},
	{
		accessor: "rdexpenseGrowth",
		header: "Research and Development Expense Growth",
		show: false,
	},
	{
		accessor: "sgaexpensesGrowth",
		header: "Selling, general and administrative Expenses Growth",
		show: false,
	},
	{
		accessor: "revenuePerShare",
		header: "Revenue Per Share",
		show: false,
	},
	{
		accessor: "netIncomePerShare",
		header: "Net Income Per Share",
		show: false,
	},
	{
		accessor: "operatingCashFlowPerShare",
		header: "Operating Cash Flow Per Share",
		show: false,
	},
	{
		accessor: "freeCashFlowPerShare",
		header: "Free Cash Flow Per Share",
		show: false,
	},
	{
		accessor: "cashPerShare",
		header: "Cash Per Share",
		show: false,
	},
	{
		accessor: "bookValuePerShare",
		header: "Book Value Per Share",
		show: false,
	},
	{
		accessor: "tangibleBookValuePerShare",
		header: "Tangible Book Value Per Share",
		show: false,
	},
	{
		accessor: "Shareholders Equity Per Share",
		header: "Interest Debt Per Share",
		show: false,
	},
	{
		accessor: "marketCap",
		header: "Market Cap",
		show: false,
	},
	{
		accessor: "enterpriseValue",
		header: "Enterprise Value",
		show: false,
	},
	{
		accessor: "peRatio",
		header: "PE Ratio",
		show: false,
	},
	{
		accessor: "priceToSalesRatio",
		header: "Price To Sales Ratio",
		show: false,
	},

	{
		accessor: "pfcfRatio",
		header: "Price To Free Cash Flow Ratio",
		show: false,
	},
	{
		accessor: "pbRatio",
		header: "Price to Book Ratio",
		show: false,
	},
	{
		accessor: "evToSales",
		header: "Enterprise Value To Sales Ratio",
		show: false,
	},
	{
		accessor: "enterpriseValueOverEBITDA",
		header: "Enterprise Value Over EBITDA",
		show: false,
	},
	{
		accessor: "evToOperatingCashFlow",
		header: "Enterprise Value To Operating Cash Flow",
		show: false,
	},
	{
		accessor: "evToFreeCashFlow",
		header: "Enterprise Value To Free Cash Flow",
		show: false,
	},
	{
		accessor: "earningsYield",
		header: "Earnings Yield",
		show: false,
	},
	{
		accessor: "freeCashFlowYield",
		header: "Free Cash Flow Yield",
		show: false,
	},
	{
		accessor: "debtToEquity",
		header: "Debt To Equity",
		show: false,
	},
	{
		accessor: "debtToAssets",
		header: "Debt To Assets",
		show: false,
	},
	{
		accessor: "netDebtToEBITDA",
		header: "Net Debt To EBITDA",
		show: false,
	},
	{
		accessor: "currentRatio",
		header: "Current Ratio",
		show: false,
	},
	{
		accessor: "interestCoverage",
		header: "Interest Coverage",
		show: false,
	},
	{
		accessor: "dividendYield",
		header: "Dividend Yield",
		show: false,
	},
	{
		accessor: "payoutRatio",
		header: "Payout Ratio",
		show: false,
	},
	{
		accessor: "salesGeneralAndAdministrativeToRevenue",
		header: "Sales General And Administrative To Revenue",
		show: false,
	},
	{
		accessor: "researchAndDdevelopementToRevenue",
		header: "Research And Developement To Revenue",
		show: false,
	},
	{
		accessor: "intangiblesToTotalAssets",
		header: "Intangibles To Total Assets",
		show: false,
	},
	{
		accessor: "capexToOperatingCashFlow",
		header: "Capital Expenditure To Operating Cash Flow",
		show: false,
	},
	{
		accessor: "capexToRevenue",
		header: "Capital Expenditure To Revenue",
		show: false,
	},
	{
		accessor: "capexToDepreciation",
		header: "Capital Expenditure To Depreciation",
		show: false,
	},
	{
		accessor: "stockBasedCompensationToRevenue",
		header: "Stock Based Compensation To Revenue",
		show: false,
	},
	{
		accessor: "grahamNumber",
		header: "Graham Number",
		show: false,
	},
	{
		accessor: "roic",
		header: "Return On Invested Capital",
		show: false,
	},
	{
		accessor: "returnOnTangibleAssets",
		header: "Return On Tangible Assets",
		show: false,
	},
	{
		accessor: "grahamNetNet",
		header: "Graham Net Net",
		show: false,
	},
	{
		accessor: "workingCapital",
		header: "Working Capital",
		show: false,
	},
	{
		accessor: "tangibleAssetValue",
		header: "Tangible Asset Value",
		show: false,
	},
	{
		accessor: "netCurrentAssetValue",
		header: "Net Current Asset Value",
		show: false,
	},
	{
		accessor: "investedCapital",
		header: "Invested Capital",
		show: false,
	},
	{
		accessor: "averageReceivables",
		header: "Average Receivables",
		show: false,
	},
	{
		accessor: "averagePayables",
		header: "Average Payables",
		show: false,
	},
	{
		accessor: "averageInventory",
		header: "Average Inventory",
		show: false,
	},
	{
		accessor: "daysSalesOutstanding",
		header: "Days Sales Outstanding",
		show: false,
	},
	{
		accessor: "daysPayablesOutstanding",
		header: "Days Payables Outstanding",
		show: false,
	},
	{
		accessor: "daysOfInventoryOnHand",
		header: "Days Of Inventory On Hand",
		show: false,
	},
	{
		accessor: "receivablesTurnover",
		header: "Receivables Turnover",
		show: false,
	},
	{
		accessor: "payablesTurnover",
		header: "Payables Turnover",
		show: false,
	},
	{
		accessor: "inventoryTurnover",
		header: "Inventory Turnover",
		show: false,
	},
	{
		accessor: "roe",
		header: "Return On Equity",
		show: false,
	},
	{
		accessor: "capexPerShare",
		header: "Capital Expenditure Per Share",
		show: false,
	},
	{
		accessor: "price",
		header: "Share Price",
		show: false,
	},
	{
		accessor: "beta",
		header: "Beta",
		show: false,
	},
	{
		accessor: "volAvg",
		header: "Average Volume",
		show: false,
	},
	{
		accessor: "mktCap",
		header: "Market Capitalization",
		show: false,
	},
	{
		accessor: "lastDiv",
		header: "Last Dividend",
		show: false,
	},
	{
		accessor: "range",
		header: "Range",
		show: false,
	},
	{
		accessor: "changes",
		header: "Change",
		show: false,
	},

	{
		accessor: "currency",
		header: "Currency",
		show: false,
	},
	{
		accessor: "cik",
		header: "",
		show: false,
	},

	{
		accessor: "ceo",
		header: "CEO Of Company",
		show: false,
	},
	{
		accessor: "sector",
		header: "Sector",
		show: false,
	},
	{
		accessor: "country",
		header: "Country",
		show: false,
	},
	{
		accessor: "fullTimeEmployees",
		header: "Full Time Employees",
		show: false,
	},
	{
		accessor: "city",
		header: "City",
	},
	{
		accessor: "state",
		header: "State",
		show: false,
	},
	{
		accessor: "zip",
		header: "Zip Code",
		show: false,
	},
	{
		accessor: "dcfDiff",
		header: "Discounted cash flow Difference",
		show: false,
	},
	{
		accessor: "dcf",
		header: "Discounted cash flow",
		show: false,
	},
	{
		accessor: "image",
		header: "Image",
		show: false,
	},
	{
		accessor: "ipoDate",
		header: "IPO Date",
		show: false,
	},
	{
		accessor: "defaultImage",
		header: "Default Image",
		show: false,
	},
	{
		accessor: "isEtf",
		header: "Is an ETF",
		show: false,
	},
	{
		accessor: "isActivelyTrading",
		header: "Is Actively Trading",
		show: false,
	},
	{
		accessor: "quickRatio",
		header: "Quick Ratio",
		show: false,
	},
	{
		accessor: "cashRatio",
		header: "Cash Ratio",
		show: false,
	},
	{
		accessor: "daysOfSalesOutstanding",
		header: "Days Of Sales Outstanding",
		show: false,
	},
	{
		accessor: "daysOfInventoryOutstanding",
		header: "Days Of Inventory Outstanding",
		show: false,
	},
	{
		accessor: "operatingCycle",
		header: "Operating Cycle",
		show: false,
	},
	{
		accessor: "daysOfPayablesOutstanding",
		header: "Days Of Payables Outstanding",
		show: false,
	},
	{
		accessor: "cashConversionCycle",
		header: "Cash Conversion Cycle",
		show: false,
	},
	{
		accessor: "grossProfitMargin",
		header: "Gross Profi tMargin",
		show: false,
	},
	{
		accessor: "operatingProfitMargin",
		header: "Operating Profit Margin",
		show: false,
	},
	{
		accessor: "pretaxProfitMargin",
		header: "Pretax Profit Margin",
		show: false,
	},
	{
		accessor: "netProfitMargin",
		header: "Net Profit Margin",
		show: false,
	},
	{
		accessor: "effectiveTaxRate",
		header: "Effective Tax Rate",
		show: false,
	},

	{
		accessor: "returnOnAssets",
		header: "Return On Assets",
		show: false,
	},
	{
		accessor: "returnOnEquity",
		header: "Return On Equity",
		show: false,
	},
	{
		accessor: "returnOnCapitalEmployed",
		header: "Return On Capital Employed",
		show: false,
	},
	{
		accessor: "netIncomePerEBT",
		header: "Net Income Per EBT",
		show: false,
	},
	{
		accessor: "ebtPerEbit",
		header: "EBT Per EBIT",
		show: false,
	},
	{
		accessor: "ebitPerRevenue",
		header: "EBIT Per Revenue",
		show: false,
	},
	{
		accessor: "debtRatio",
		header: "Debt Ratio",
		show: false,
	},
	{
		accessor: "debtEquityRatio",
		header: "Debt To Equity Ratio",
		show: false,
	},
	{
		accessor: "longTermDebtToCapitalization",
		header: "Long Term Debt To Capitalization",
		show: false,
	},
	{
		accessor: "totalDebtToCapitalization",
		header: "Total Debt To Market Capitalization",
		show: false,
	},
	{
		accessor: "cashFlowToDebtRatio",
		header: "Cash Flow To Debt Ratio",
		show: false,
	},
	{
		accessor: "companyEquityMultiplier",
		header: "Company Equity Multiplier",
		show: false,
	},
	{
		accessor: "operatingCashFlowSalesRatio",
		header: "Operating Cash Flow Sales Ratio",
		show: false,
	},
	{
		accessor: "freeCashFlowOperatingCashFlowRatio",
		header: "Free Cash Flow Operating Cash Flow Ratio",
		show: false,
	},
	{
		accessor: "cashFlowCoverageRatios",
		header: "Cash Flow Coverage Ratios",
		show: false,
	},
	{
		accessor: "shortTermCoverageRatios",
		header: "Short Term Coverage Ratios",
		show: false,
	},
	{
		accessor: "capitalExpenditureCoverageRatio",
		header: "Capital Expenditure Coverage Ratio",
		show: false,
	},
	{
		accessor: "dividendPaidAndCapexCoverageRatio",
		header: "Dividend Paid And Capital Expenditure Coverage Ratio",
		show: false,
	},
	{
		accessor: "dividendPayoutRatio",
		header: "Dividend Payout Ratio",
		show: false,
	},
	{
		accessor: "priceBookValueRatio",
		header: "Price To Book Value Ratio",
		show: false,
	},
	{
		accessor: "priceToBookRatio",
		header: "Price To Book Ratio",
		show: false,
	},
	{
		accessor: "priceEarningsRatio",
		header: "Price To Earnings Ratio",
		show: false,
	},
	{
		accessor: "priceToFreeCashFlowsRatio",
		header: "Price To Free Cash Flows Ratio",
		show: false,
	},
	{
		accessor: "priceCashFlowRatio",
		header: "Price Cash Flow Ratio",
		show: false,
	},
	{
		accessor: "priceEarningsToGrowthRatio",
		header: "Price Earnings To Growth Ratio",
		show: false,
	},
	{
		accessor: "priceSalesRatio",
		header: "Price Sales Ratio",
		show: false,
	},
	{
		accessor: "enterpriseValueMultiple",
		header: "Enterprise Value Multiple",
		show: false,
	},
	{
		accessor: "priceFairValue",
		header: "Fair Value",
		show: false,
	},
	{
		accessor: "cashAndCashEquivalents",
		header: "Cash And Cash Equivalents",
		show: false,
	},
	{
		accessor: "shortTermInvestments",
		header: "Short Term Investments",
		show: false,
	},
	{
		accessor: "netReceivables",
		header: "Net Receivables",
		show: false,
	},
	{
		accessor: "otherCurrentAssets",
		header: "Other Current Assets",
		show: false,
	},
	{
		accessor: "totalCurrentAssets",
		header: "Total Current Assets",
		show: false,
	},
	{
		accessor: "propertyPlantEquipmentNet",
		header: "Property, Plant, and Equipment Net",
		show: false,
	},
	{
		accessor: "goodwill",
		header: "Goodwill",
		show: false,
	},
	{
		accessor: "intangibleAssets",
		header: "Intangible Assets",
		show: false,
	},
	{
		accessor: "goodwillAndIntangibleAssets",
		header: "Goodwill And Intangible Assets",
		show: false,
	},
	{
		accessor: "longTermInvestments",
		header: "Long Term Investments",
		show: false,
	},
	{
		accessor: "taxAssets",
		header: "Tax Assets",
		show: false,
	},
	{
		accessor: "otherNonCurrentAssets",
		header: "Other Non Current Assets",
		show: false,
	},
	{
		accessor: "totalNonCurrentAssets",
		header: "Total Non Current Assets",
		show: false,
	},
	{
		accessor: "otherAssets",
		header: "Other Assets",
		show: false,
	},
	{
		accessor: "totalAssets",
		header: "Total Assets",
		show: false,
	},
	{
		accessor: "accountPayables",
		header: "Account Payables",
		show: false,
	},
	{
		accessor: "shortTermDebt",
		header: "Short Term Debt",
		show: false,
	},
	{
		accessor: "taxPayables",
		header: "Tax Payables",
		show: false,
	},
	{
		accessor: "deferredRevenue",
		header: "Deferred Revenue",
		show: false,
	},
	{
		accessor: "otherCurrentLiabilities",
		header: "Other Current Liabilities",
		show: false,
	},
	{
		accessor: "totalCurrentLiabilities",
		header: "Total Current Liabilities",
		show: false,
	},
	{
		accessor: "longTermDebt",
		header: "Long Term Debt",
		show: false,
	},
	{
		accessor: "deferredRevenueNonCurrent",
		header: "Deferred Revenue Non Current",
		show: false,
	},
	{
		accessor: "deferredTaxLiabilitiesNonCurrent",
		header: "Deferred Tax Liabilities Non Current",
		show: false,
	},

	{
		accessor: "otherNonCurrentLiabilities",
		header: "Other Non Current Liabilities",
		show: false,
	},
	{
		accessor: "totalNonCurrentLiabilities",
		header: "Total Non Current Liabilities",
		show: false,
	},
	{
		accessor: "otherLiabilities",
		header: "Other Liabilities",
		show: false,
	},
	{
		accessor: "totalLiabilities",
		header: "Total Liabilities",
		show: false,
	},
	{
		accessor: "commonStock",
		header: "Common Stock",
		show: false,
	},
	{
		accessor: "retainedEarnings",
		header: "Retained Earnings",
		show: false,
	},
	{
		accessor: "accumulatedOtherComprehensiveIncomeLoss",
		header: "Accumulated Other Comprehensive Income Loss",
		show: false,
	},
	{
		accessor: "othertotalStockholdersEquity",
		header: "Other total Stockholders Equity",
		show: false,
	},
	{
		accessor: "totalStockholdersEquity",
		header: "Total Stockholders Equity",
		show: false,
	},
	{
		accessor: "totalLiabilitiesAndStockholdersEquity",
		header: "Total Liabilities And Stockholders Equity",
		show: false,
	},
	{
		accessor: "totalInvestments",
		header: "Total Investments",
		show: false,
	},
	{
		accessor: "totalDebt",
		header: "Total Debt",
		show: false,
	},
	{
		accessor: "netDebt",
		header: "Net Debt",
		show: false,
	},
	{
		accessor: "reportedCurrency",
		header: "Reported Currency",
		show: false,
	},
	{
		accessor: "fillingDate",
		header: "Filling Date",
		show: false,
	},
	{
		accessor: "date",
		header: "Date",
		show: false,
	},
	{
		accessor: "revenue",
		header: "Revenue",
		show: false,
	},
	{
		accessor: "costOfRevenue",
		header: "Cost Of Revenue",
		show: false,
	},
	{
		accessor: "grossProfit",
		header: "Gross Profit",
		show: false,
	},
	{
		accessor: "grossProfitRatio",
		header: "Gross Profit Ratio",
		show: false,
	},
	{
		accessor: "researchAndDevelopmentExpenses",
		header: "Research And Development Expenses",
		show: false,
	},
	{
		accessor: "generalAndAdministrativeExpenses",
		header: "General And Administrative Expenses",
		show: false,
	},
	{
		accessor: "sellingAndMarketingExpenses",
		header: "Selling And Marketing Expenses",
		show: false,
	},
	{
		accessor: "sellingGeneralAndAdministrativeExpenses",
		header: "Selling General And Administrative Expenses",
		show: false,
	},
	{
		accessor: "otherExpenses",
		header: "Other Expenses",
		show: false,
	},
	{
		accessor: "operatingExpenses",
		header: "Operating Expenses",
		show: false,
	},
	{
		accessor: "costAndExpenses",
		header: "Cost And Expenses",
		show: false,
	},
	{
		accessor: "interestExpense",
		header: "Interest Expense",
		show: false,
	},
	{
		accessor: "depreciationAndAmortization",
		header: "Depreciation And Amortization",
		show: false,
	},
	{
		accessor: "ebitda",
		header: "EBITDA",
		show: false,
	},
	{
		accessor: "ebitdaratio",
		header: "EBITDA Ratio",
		show: false,
	},
	{
		accessor: "operatingIncome",
		header: "Operating Income",
		show: false,
	},
	{
		accessor: "operatingIncomeRatio",
		header: "Operating Income Ratio",
		show: false,
	},
	{
		accessor: "totalOtherIncomeExpensesNet",
		header: "Total Other Income Expenses Net",
		show: false,
	},
	{
		accessor: "incomeBeforeTax",
		header: "Income Before Tax",
		show: false,
	},
	{
		accessor: "incomeBeforeTaxRatio",
		header: "Income Before Tax Ratio",
		show: false,
	},
	{
		accessor: "incomeTaxExpense",
		header: "Income Tax Expense",
		show: false,
	},
	{
		accessor: "netIncomeRatio",
		header: "Net Income Ratio",
		show: false,
	},
	{
		accessor: "eps",
		header: "EPS",
		show: false,
	},
	{
		accessor: "epsdiluted",
		header: "EPS Diluted",
		show: false,
	},
	{
		accessor: "weightedAverageShsOut",
		header: "Weighted Average Shares Outstanding",
		show: false,
	},
	{
		accessor: "weightedAverageShsOutDil",
		header: "Weighted Average Shares Outstanding Diluted",
		show: false,
	},
	{
		accessor: "name",
		header: "Company Name",
		show: false,
	},
	{
		accessor: "change",
		header: "Change",
		show: false,
	},
	{
		accessor: "dayLow",
		header: "Day Low",
		show: false,
	},

	{
		accessor: "dayHigh",
		header: "Day High",
		show: false,
	},
	{
		accessor: "yearHigh",
		header: "Year High",
		show: false,
	},
	{
		accessor: "yearLow",
		header: "Year Low",
		show: false,
	},

	{
		accessor: "volume",
		header: "Volume",
		show: false,
	},
	{
		accessor: "open",
		header: "Open",
		show: false,
	},
	{
		accessor: "previousClose",
		header: "Previous Close",
		show: false,
	},
	{
		accessor: "earningsAnnouncement",
		header: "Earnings Announcement",
		show: false,
	},
	{
		accessor: "sharesOutstanding",
		header: "Shares Outstanding",
		show: false,
	},
];
