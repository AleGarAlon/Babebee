import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
//import { useContext } from "react";
//import { AuthContext } from "../../context/auth.context";

function Navbar() {
  const [isDropdownPOpen, setIsDropdownPOpen] = useState(false);
  const [isDropdownCOpen, setIsDropdownCOpen] = useState(false);
  //const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const toggleDropdownP = () => {
    setIsDropdownPOpen(!isDropdownPOpen);
  };

  const closeDropdownP = () => {
    setIsDropdownPOpen(false);
  };

  const toggleDropdownC = () => {
    setIsDropdownCOpen(!isDropdownCOpen);
  };

  const closeDropdownC = () => {
    setIsDropdownCOpen(false);
  };
  const categories = [
    "Peluches",
    "Muñecos y Dudús",
    "Hora de Jugar",
    "Estimulación Sensorial",
    "Juguetes Educativos",
    "Accesorios",
    "Decoración y Orden",
    "Todos",
  ];

  const collections = ["Bajo el agua", "El Bosque", "Mundo Diminuto"];

  return (
    <nav className="navBar">
      <div className="navLinks">
        <Link to="/">
          <button>Inicio</button>
        </Link>
        <div className="dropdown">
          <button onClick={toggleDropdownP}>Productos</button>
          {isDropdownPOpen && (
            <div className="dropdownMenu">
              {categories.map((category) => (
                <Link
                  to={`/products/${category}`}
                  key={category}
                  onClick={closeDropdownP}
                >
                  <button>{category}</button>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={toggleDropdownC}>Colecciones</button>
          {isDropdownCOpen && (
            <div className="dropdownMenu">
              {collections.map((collection) => (
                <Link
                  to={`/collections/${collection}`}
                  key={collection}
                  onClick={closeDropdownC}
                >
                  <button>{collection}</button>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/faq">
          <button>FAQ</button>
        </Link>
        <Link to="/about-us">
          <button>Sobre mi</button>
        </Link>
      </div>
      {/* {isLoggedIn && ( */}
      {/* <> */}
      {/* <button onClick={logOutUser}>Logout</button> */}

      {/* <Link to="/profile"> */}
      {/* <button>Profile</button> */}
      {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
      {/* </Link> */}

      {/* <span>{user && user.name}</span> */}
      {/* </> */}
      {/* )} */}

      {/* {!isLoggedIn && ( */}
      {/* <> */}
      {/* <Link to="/signup"> */}
      {/* {" "} */}
      {/* <button>Sign Up</button>{" "} */}
      {/* </Link> */}
      {/* <Link to="/login"> */}
      {/* {" "} */}
      {/* <button>Login</button>{" "} */}
      {/* </Link> */}
      {/* </> */}
      {/* )} */}
    </nav>
  );
}

export default Navbar;
