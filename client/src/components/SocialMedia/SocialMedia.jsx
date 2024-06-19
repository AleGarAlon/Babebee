import React from "react";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="socialMediaContainer">
      <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://res.cloudinary.com/dvml0gelc/image/upload/v1718659049/Babebee/Brand/etsy_bvwpuv.png"
          alt="iconoEtsy"
        />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://res.cloudinary.com/dvml0gelc/image/upload/v1718659014/Babebee/Brand/social_gsvpdf.png"
          alt="IconoInstagram"
        />
      </a>
      <a
        href="https://www.pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://res.cloudinary.com/dvml0gelc/image/upload/v1718659115/Babebee/Brand/pinterest_pnpl40.png"
          alt="iconoPinteres"
        />
      </a>
      <a
        href="https://www.whatsapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://res.cloudinary.com/dvml0gelc/image/upload/v1718659587/Babebee/Brand/whatsapp_nxcguf.png"
          alt="iconoWhatsapp"
        />
      </a>
      <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://res.cloudinary.com/dvml0gelc/image/upload/v1718659588/Babebee/Brand/gmail_1_siwhmb.png"
          alt="iconoGmail"
        />
      </a>
    </div>
  );
}

export default SocialMedia;
