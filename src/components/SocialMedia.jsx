import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/VanshajPoonia">
      <div>
        <BsTwitter />
      </div>
    </a>
    <a href="https://github.com/VanshajPoonia">
      <div>
        <FaGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/vanshajpoonia/">
      <div>
        <FaLinkedin />
      </div>
    </a>
    <a href="https://www.instagram.com/VanshajPoonia">
      <div>
        <BsInstagram />
      </div>
    </a>
  </div>
);

export default SocialMedia;
