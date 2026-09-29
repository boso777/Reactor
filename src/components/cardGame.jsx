import { Link } from "react-router";

export default function CardGame({game}){return(<>

<div className="card bg-base-100 my-2 shadow-sm bg-gray-600 text-white">
  <figure className="aspect-video">
    <img
      src={game.background_image}
      alt="Shoes" 
      className="object-contain"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-1">{game.name}</h2>
    <div className="card-actions justify-end">
      <Link to={`/detail/${game.id}`} className="btn-custom">Details</Link>
    </div>
  </div>
</div>
</>)}