import { Link } from "react-router";
export default function SideBar({categories}){

    return(<>

  
   <nav className="h-screen bg-nav-gray hidden sm:block ">
  <ul className="px-5">
    {categories.map((cat) => {
      return (
        <li className="mb-2" key={cat.id}>
          <Link to={`/genre/${cat.slug}`}>{cat.name}</Link>
        </li>
      );
    })}
  </ul>
</nav>

</>)}