import Announcement from "../../components/Announcement/Announcement";
import Article from "../../components/Article/Article";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homePage">
      <Announcement />
      <h2>Noticias</h2>
      <Article />
    </div>
  );
}

export default HomePage;
