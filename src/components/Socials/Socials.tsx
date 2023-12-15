import React from "react";
import TelegramIcon from "../../assets/telegram.png";
import VkIcon from "../../assets/vk.png";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className="socials">
      <div className="socials__icon">
        <img
          src={TelegramIcon}
          alt="Телеграм БУДУ"
          onClick={() => {
            window.open("https://t.me/budujobs", "_blank");
          }}
        />
      </div>
      <div className="socials__icon">
        <img
          src={VkIcon}
          alt="Вконтакте БУДУ"
          onClick={() => {
            window.open("https://vk.com/budujobs", "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default Socials;
