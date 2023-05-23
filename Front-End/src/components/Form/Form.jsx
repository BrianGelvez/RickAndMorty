import './Form.modules.css';
import { useState } from 'react';
import { validation } from './validation';

export const Form = ({ login }) => {

  const [userData, setUserData] = useState({ email: '', password: '' });

  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className="conteiner">
      <form action="" onSubmit={submitHandler} className="form-container">
        <div>
          <label htmlFor="email" className="form-label">email: </label>
          <input type="text" id='email' name='email' value={userData.email}
            onChange={handleInputChange} className="form-input" />
          <p className="form-error">{errors.email}</p>
        </div>
        <div>
          <label htmlFor="password" className="form-label">Password: </label>
          <input type="text" id='password' name='password' value={userData.password}
            onChange={handleInputChange} className="form-input" />
          <p className="form-error">{errors.password}</p>
        </div>
        <button className="form-button">LOGIN</button>
      </form>
    </div>
  );
};
