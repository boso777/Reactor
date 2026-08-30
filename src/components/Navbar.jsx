import { AiOutlineSearch } from "react-icons/ai";
import { useState, useContext } from "react";
import { Link, Routes } from "react-router";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import { FaArrowRight } from "react-icons/fa";
import routes from "../router/routes";

export default function Navbar() {
  const [slug, setSlug] = useState();

  const handleChange = (e) => {
    setSlug(e.target.value);
  };

  const navigate = useNavigate();

  const { user, signOut, profile } = useContext(UserContext);

  const handleLogout = async () => {
    await navigate("/");
    signOut();
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-lg dropdown-content bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {(!user && (
                <>
                  <li>
                    <Link to={routes.register}>Register</Link>
                  </li>
                  <li>
                    <Link to={routes.login}>Login</Link>
                  </li>
                </>
              )) || (
              <>
                <li onClick={handleLogout}>
                  <p>Logout</p>
                </li>
                <li>
                  <Link to={routes.profile}>Account</Link>
                </li>
              </>)}
            </ul>

            {(user && (
              <div className="badge badge-success">{profile?.username}</div>
            )) || <div className="badge badge-warning">Guest</div>}
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl">
            Reactor
          </Link>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            className="hidden sm:block w-32 md:w-48 transition-all duration-300 focus:w-64 bg-blue-100 text-blue-950 px-3 py-1 rounded-sm outline-none"
          />

          <button className="btn btn-ghost btn-circle">
            <Link to={`/search/${slug}`} aria-label="Search">
              <AiOutlineSearch className="size-5" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
