import { useLoaderData, useParams } from "react-router"
import CardGame from "../components/cardGame";

export default function SearchPage(){

    const games = useLoaderData();
    const {slug} = useParams();
    
    return(<>
       <div className="flex flex-col align-middle justify-center">
              <div className="flex align-middle justify-center mt-10">
                  <h2 className="font-bold text-5xl text-blue-100">Results for: {slug} </h2>
              </div>
              <div className="flex align-middle justify-center mb-10 mt-4">
                  <p className="text-xl">All your games in one place!</p>
              </div>
              <div className="grid lg:grid-cols-4 gap-4 px-6 sm:grid-cols-1 sm:gap-y-2 ">
                  {games.map((game) => 
                      <CardGame game={game} key={game.id}/>)} 
              </div>  
          </div> 
    </>
    )
}