import React, {useState, useEffect} from "react"
import { HistoricalBasic } from "../Classes/StockHistory";
import { ChartFormatter } from "../Chart/ChartFormatter";


export async function FetchAll (Ticker, setData) {
 
  const url = 'https://financialmodelingprep.com/api/v3/historical-price-full/' +Ticker+ '?from=2001-03-12&to=2019-03-12&apikey=6f583125e791bceb5e95b3307b84bd13';
  const response = await fetch(url);
  const data = await response.json();
  const Dates = data.historical.map(d => d.date)
  const Value = data.historical.map(d => d.close)
  const Symbol = data.symbol

  let Stock = new HistoricalBasic(Symbol, Value, Dates, Value.length)
  let Tempd = ChartFormatter(Stock, Stock.Length)
  
  // const Values = data.historical.map(d => d.)
  setData([...Tempd])
 
  return ;
}

export async function FetchHistoricalMetric(Ticker, Key, API, setData) {
  
  if (API !== '' && Key !== '') {
    const url = 'https://financialmodelingprep.com/api/v3/'+API+'/' +Ticker+ '?from=2001-03-12&to=2019-03-12&apikey=6f583125e791bceb5e95b3307b84bd13';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const Symbol = Ticker
    const Value = data.map(d  => d[Key].toFixed(2))
    const Dates = data.map(d => d.date)
    let Stock = new HistoricalBasic(Symbol, Value, Dates, Value.length)
    console.log(Stock)
    let Tempd = ChartFormatter(Stock, Stock.Length)
   
    // const Values = data.historical.map(d => d.)
    setData([...Tempd])
 }
  
  return ;
}


