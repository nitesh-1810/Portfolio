import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

import me from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Nitesh" />

        <h2>Nitesh Singh</h2>
        <p>"Time, Tide and JavaScript wait for Nobody"</p>
      </div>

      <aside>
        <h2>Links</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/nitesh-singh-18ns/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>

          <a href="https://github.com/nitesh-1810" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
