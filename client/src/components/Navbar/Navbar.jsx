import "./Navbar.css";
import { Link } from "react-router-dom";

//import { useContext } from "react";
//import { AuthContext } from "../../context/auth.context";

function Navbar() {
  //const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navBar">
      <div className="navLinks">
        <Link to="/">
          <button>Inicio</button>
        </Link>
        <Link to="/products">
          <button>Productos</button>
        </Link>
        <Link to="/collections">
          <button>Colecciones</button>
        </Link>
        <Link to="/faq">
          <button>FAQ</button>
        </Link>
        <Link to="/about-us">
          <button>Sobre nosotros</button>
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
