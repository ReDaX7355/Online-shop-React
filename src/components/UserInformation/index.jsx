import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../../context/ShopContext";

import "./style.scss";

const UserInformation = () => {
  const { login } = useParams();
  const { signOut } = useContext(ShopContext);

  return (
    <div className='user-information'>
      <h3>Добро пожаловать, {login}</h3>
      <button onClick={() => signOut()}>Выйти</button>
    </div>
  );
};

export default UserInformation;
