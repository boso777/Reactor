export async function getAllGamesLoader(){
    const oggi = new Date().toISOString().split('T')[0];;
    const promise = await fetch (`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2024-01-01,${oggi}&page_size=30`);
    const json = await promise.json();
    return json.results;
}