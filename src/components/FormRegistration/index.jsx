import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShopContext from "../../context/ShopContext";
import users from "../../data/users";

function FormRegistration() {
  const [login, setLogin] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const { state, registration } = useContext(ShopContext);

  const submitForm = (e) => {
    e.preventDefault();
    if (state.users.length > 0) {
      users.map((el) => {
        if (el.email === email) {
          alert("Такой пользователь существует");
        } else {
          registration(login, email, password);
          navigate("/login");
        }
      });
    } else {
      registration(login, email, password);
      navigate("/login");
    }
    console.log(state.users);
  };

  return (
    <form className='login__form' onSubmit={submitForm}>
      <label htmlFor='login'>Логин</label>
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
        type='text'
        id='login'
      />
      <label htmlFor='email'>Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type='email'
        id='email'
      />
      <label htmlFor='password'>Пароль</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        type='password'
        id='password'
      />
      <div className='form__footer'>
        <button type='submit'>Зарегистрироваться</button>
      </div>
    </form>
  );
}

export default FormRegistration;
