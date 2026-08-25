import { useLoaderData } from "react-router";
import CardGame from "../components/cardGame";

export default function Homepage(){




    const games = useLoaderData();

    return(
    <>
    <div className="flex flex-col align-middle justify-center">
        <div className="flex align-middle justify-center my-8">
            <h2 className="font-bold text-6xl text-blue\">REACTOR</h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 px-6 sm:grid-cols-1 sm:gap-y-2 ">
            {games.map((game) => 
                <CardGame game={game} key={game.id}/>)} 
        </div>  
    </div>
    </>
    )}