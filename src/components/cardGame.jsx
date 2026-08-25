export default function CardGame({game}){return(<>

<div className="card bg-base-100  shadow-sm">
  <figure className="aspect-video">
    <img
      src={game.background_image}
      alt="Shoes" 
      className="object-contain"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-1">{game.name}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</>)}