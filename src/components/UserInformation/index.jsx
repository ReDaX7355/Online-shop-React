import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ShopContext from '../../context/ShopContext';

import './style.scss';

const UserInformation = () => {
  const { login } = useParams();
  const { signOut } = useContext(ShopContext);

  const navigate = useNavigate();

  const hundleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <div className="user-information">
      <h3>Добро пожаловать, {login}</h3>
      <button onClick={() => hundleSignOut()}>Выйти</button>
    </div>
  );
};

export default UserInformation;
