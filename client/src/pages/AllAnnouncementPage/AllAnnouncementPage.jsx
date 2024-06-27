import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

function AllAnnouncementPage() {
  const [announcements, setAnnouncements] = useState([]);

  const fetchAnnouncements = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/announcement/`
    );
    console.log(res.data);
    setAnnouncements(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/announcement/${id}`
    );
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.filter((announcement) => announcement._id !== id)
    );
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <div>
      <h1>Noticias</h1>

      {announcements ? (
        announcements.reverse().map((announcement) => (
          <div key={announcement._id}>
            <h3>{announcement.title}</h3>
            <p>{announcement.body}</p>
            <Link to={`/editAnnouncement/${announcement._id}`}>
              <button>Editar</button>
            </Link>
            <button onClick={() => handleDelete(announcement._id)}>
              Borrar
            </button>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default AllAnnouncementPage;
