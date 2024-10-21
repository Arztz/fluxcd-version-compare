export async function fetchData() {

    const response = await fetch(`http://127.0.0.1:3001/version`);

    const result  = await response.json();
    console.log(result)
    return result
}