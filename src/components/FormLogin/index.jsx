import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShopContext from '../../context/ShopContext';
import users from '../../data/users';

import './style.scss';

// const useValidation = (value, validations) => {
//   const [isEmpty, setIsEmpty] = React.useState(true);

//   React.useEffect(() => {
//     for(const validation in validations){
//       switch(validation){
//         case 'isEmpty':
//           value ? setIsEmpty(false) : setIsEmpty(true)
//       }
//     }
//   }, [value])

//   return {
//     isEmpty
//   }
// }

// const useinput = (initValue, validations) => {
//   const [value, setValue] = React.useState(initValue);
//   const [isDirty, setIsDirty] = React.useState(false);
//   const [valid, setValid] = useValidation(value, validations);

//   const onChange = (e) => {
//     setValue(e.target.value);
//   }

//   const onBlur = () => {
//     setIsDirty(true)
//   }

//   return  {
//     value,
//     onChange,
//     onBlur,
//     isDirty,
//     ...valid
//   }

// }

const FormLogin = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { loginUser } = useContext(ShopContext);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    users.map((el) => {
      if (el.login === login && el.password === password) {
        loginUser(login);
        navigate(`/user/${login}`);
      }
    });
  };

  return (
    <form className="login__form" onSubmit={submitForm}>
      <label htmlFor="login">Логин</label>
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
        type="text"
        id="login"
      />
      <label htmlFor="password">Пароль</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        id="password"
      />
      <div className="form__footer">
        <Link to="../registration" className="form__footer-link" href="#">
          Зарегистрироваться
        </Link>
        <a className="form__footer-link" href="#">
          Забыли пароль?
        </a>
        <input type="submit" value="Войти" />
      </div>
    </form>
  );
};

export default FormLogin;
