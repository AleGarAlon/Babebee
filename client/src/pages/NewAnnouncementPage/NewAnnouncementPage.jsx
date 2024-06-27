import React, { useState } from "react";
import axios from "axios";

function NewAnnouncementPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleBody = (e) => setBody(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/announcement/newAnnouncement`,
        { title, body, image }
      );
    } catch (error) {}
  };

  return (
    <div>
      <h2>Crea una nueva noticia</h2>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />
        <label>Imagen</label>
        <input type="text" name="image" value={image} onChange={handleImage} />
        <label>Cuerpo</label>
        <input type="text" name="body" value={body} onChange={handleBody} />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default NewAnnouncementPage;
