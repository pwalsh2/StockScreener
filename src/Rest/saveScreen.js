

export async function postScreen(filters, hiddenColumns) {
    console.log(filters)
    console.log(hiddenColumns)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([ filters, hiddenColumns])
    };
    const url = 'http://127.0.0.1:8000/saveScreen';
    const response = await fetch(url, requestOptions);
    // const data = await response.json();
    
   
    return ;
}
  

export async function getPresetScreen() {




}

export async function getPresetList() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([ ])
    };
    const url = 'http://127.0.0.1:8000/saveScreen';
    const response = await fetch(url, requestOptions);
    // const data = await response.json();
    
}