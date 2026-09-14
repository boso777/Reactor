export async function getAllGamesLoader(){
    const oggi = new Date().toISOString().split('T')[0];;
    const promise = await fetch (`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2024-01-01,${oggi}&page_size=30`);
    const json = await promise.json();
    return json.results;
}

export async function getSearchedGames({params}){
    const oggi = new Date().toISOString().split('T')[0];;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2024-01-01,${oggi}&page_size=30&search=${params.slug}`);
    const json = await promise.json();
    return json.results;
}

export async function getAllGenres(){
    const oggi = new Date().toISOString().split('T')[0];;
    const promise = await fetch(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`);
    const json = await promise.json();
    return json.results;
}

export async function getFilteredByCategory({params}){
    const oggi = new Date().toISOString().split('T')[0];;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${params.slug}`);
    const json = await promise.json();
    return json.results;
}

export async function getGameDetails({params}){
    const promise = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_API_KEY}`)
    const json = await promise.json();
    return json;
}