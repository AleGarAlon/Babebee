import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditAnnouncementPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = useState({ title: "", body: "" });

  const fetchAnnouncement = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/announcement/${id}`
      );
      console.log(res.data);
      setAnnouncement(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitle = (e) =>
    setAnnouncement({ ...announcement, title: e.target.value });
  const handleImage = (e) =>
    setAnnouncement({ ...announcement, image: e.target.value });
  const handleBody = (e) =>
    setAnnouncement({ ...announcement, body: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/announcement/${id}`,
        announcement
      );
      navigate("/announcements");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  return (
    <div>
      <h2>Edita la noticia</h2>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input
          type="text"
          name="title"
          value={announcement.title}
          onChange={handleTitle}
        />
        <label>Imagen</label>
        <input
          type="text"
          name="image"
          value={announcement.image}
          onChange={handleImage}
        />
        <label>Cuerpo</label>
        <input
          type="text"
          name="body"
          value={announcement.body}
          onChange={handleBody}
        />
        <button type="submit">Editar</button>
      </form>
    </div>
  );
}

export default EditAnnouncementPage;
