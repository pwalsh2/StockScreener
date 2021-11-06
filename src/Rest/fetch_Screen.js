import React, {useState, useEffect} from "react"


export async function FetchAll(start, end) {
 
  const url = 'http://127.0.0.1:8000/Screener_APIs/'+start+'/'+end+'/';
  const response = await fetch(url);
  const data = await response.json();
  
 
  return data;
}
  