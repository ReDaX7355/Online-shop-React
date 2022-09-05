import React from 'react';

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

const FormLogin = ({ setLogin, login }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className="login__form" onSubmit={submitForm}>
      <label htmlFor="login">Телефон или Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        <a className="form__footer-link" href="#">
          Зарегистрироваться
        </a>
        <a className="form__footer-link" href="#">
          Забыли пароль?
        </a>
        <button type="submit">Войти</button>
      </div>
    </form>
  );
};

export default FormLogin;
