import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserInformation from "../components/UserInformation";

import ShopContext from "./../context/ShopContext";

const PersonalPage = () => {
  const { state } = useContext(ShopContext);
  if (state.auth) {
    return (
      <div className='personal-page'>
        <div className='container'>
          <h2 className='personal__title'>Личный кабинет</h2>
          <UserInformation />
        </div>
      </div>
    );
  } else {
    return (
      <div className='personal-page'>
        <div className='container'>
          <h2 className='personal__title'>Войдите в аккаунт</h2>
          <Link to='../login'>Войти</Link>
        </div>
      </div>
    );
  }
};

export default PersonalPage;
