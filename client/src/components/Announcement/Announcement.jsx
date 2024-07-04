import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import "./Announcement.css";

function Announcement() {
  const [announcements, setAnnouncements] = useState([]);

  const fetchAnnouncements = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/announcement`
    );
    console.log(res.data);
    setAnnouncements(res.data);
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <>
      {announcements.length > 0 ? (
        announcements.reverse().map((announcement) => (
          <div className="announcementComponet" key={announcement._id}>
            <h2 className="announcementTitle">{announcement.title}</h2>
            <img
              className="announcementImage"
              src={announcement.image}
              alt="announcement"
            />
            <p className="announcementBody">{announcement.body}</p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Announcement;
