import React from "react";
import FormRegistration from "../components/FormRegistration";

function RegistrationPage() {
  return (
    <div className='registration-form'>
      <div className='container'>
        <h2 className='registration__title'>Регистрация</h2>
        <FormRegistration />
      </div>
    </div>
  );
}

export default RegistrationPage;
