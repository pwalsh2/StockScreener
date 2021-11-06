

export async function addToWatch(list) {
    console.log(list)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(list)
    };
    const url = 'http://127.0.0.1:8000/addToWatchList';
    const response = await fetch(url, requestOptions);
    // const data = await response.json();
    
   
    return ;
  }