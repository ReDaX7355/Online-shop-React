import React from "react";

import NumberBlock from "./../NumberBlock";
import SocialLinks from "./../SocialLinks";
import FooterMenuItem from "./FooterMenuItem";

import "./style.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__left-block'>
            <div className='social__wrapper'>
              <div className='footer__logo'>Shop</div>
              <div className='footer__telephones'>
                <NumberBlock
                  number={"+7(999) 555-35-35"}
                  text={"справочная служба"}
                />
                <NumberBlock
                  number={"+7(800) 555-35-35"}
                  text={"интернет магазин"}
                />
              </div>
              <div className='footer__social'>
                <h4 className='social__title'>оставайтесь на связи</h4>
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className='footer__right-block'>
            <FooterMenuItem
              title={"О магазине"}
              textLinks={[
                "Условия обмена и возврата",
                "Каталог",
                "О компании",
                "Контакты",
                "Оплата",
              ]}
            />
            <FooterMenuItem
              title={"Клиентам"}
              textLinks={["Личный кабинет", "Блог", "Обратная связь"]}
            />
            <FooterMenuItem
              title={"Информация"}
              textLinks={[
                "Пользовательское соглашение",
                "Политика конфиденциальности и оферта",
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
