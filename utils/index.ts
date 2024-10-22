export async function fetchData() {

    const response = await fetch(`http://127.0.0.1:3001/version`, { cache: 'no-store' });

    const result  = await response.json();
    console.log("fetch version")
    return result
}