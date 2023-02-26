import React from "react";

import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import "./style.scss";

const SocialLinks = () => {
  return (
    <ul className='social__items'>
      <li className='social__item'>
        <a className='social__link'>
          <AiOutlineTwitter size={"1.5em"} />
        </a>
      </li>
      <li className='social__item'>
        <a className='social__link'>
          <AiOutlineInstagram size={"1.5em"} />
        </a>
      </li>
      <li className='social__item'>
        <a className='social__link'>
          <AiFillFacebook size={"1.5em"} />
        </a>
      </li>
      <li className='social__item'>
        <a className='social__link'>
          <AiFillYoutube size={"1.5em"} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
