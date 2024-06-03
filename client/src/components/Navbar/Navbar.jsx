import "./Navbar.css";
import { Link } from "react-router-dom";
//import { useContext } from "react";
//import { AuthContext } from "../../context/auth.context";

function Navbar() {
  //const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/products">
        <button>Products</button>
      </Link>
      <Link to="/collections">
        <button>Collections</button>
      </Link>
      <Link to="/faq">
        <button>FAQ</button>
      </Link>
      <Link to="/blog">
        <button>Blog</button>
      </Link>
      <Link to="/contact">
        <button>Contact Us</button>
      </Link>

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
