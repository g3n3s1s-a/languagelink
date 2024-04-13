import "./register.css";
import logoImage from "./language_logo.png";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from "../login/loginfunctions";
import Login from "../login/Login";
import Home from "../home/Home";

export default function Register({ setPage }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [languageToLearn, setLanguageToLearn] = useState('');
  const [languageSpoken, setLanguageSpoken] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log("switching to login");
    setPage(<Login />);
  };

  const handleSignUp = async () => {
    // Perform validation or submit the form data
    if (password !== passwordAgain) {
      setError('Passwords do not match');
      return;
    }

    const formData = {
      'username': username,
      'password': password,
      'email': email,
      'language_learning': languageToLearn,
      'language_teaching': languageSpoken,
      'name': name,
      'last_name': lastName,
      'age': age
    };

    try {
      const response = await createUser(formData);
      console.log('User created successfully:', response);
      setPage(<Home />);
    } catch (error) {
      console.error('Error creating user:', error);
      setError('Failed to create user. Please try again.');
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">
            <img src={logoImage} alt="Logo" />
          </h3>
          <span className="loginDesc">
            Connect with other like minded individuals here on LanguageLink!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Name" className="loginInput" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Last Name" className="loginInput" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input placeholder="Age" className="loginInput" value={age} onChange={(e) => setAge(e.target.value)} />
            <input placeholder="Language you want to learn" className="loginInput" value={languageToLearn} onChange={(e) => setLanguageToLearn(e.target.value)} />
            <input placeholder="Language you speak" className="loginInput" value={languageSpoken} onChange={(e) => setLanguageSpoken(e.target.value)} />
            <input placeholder="Username" className="loginInput" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Email" className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" className="loginInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input placeholder="Password Again" className="loginInput" type="password" value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} />
            {error && <div className="error">{error}</div>}
            <button className="loginButton" onClick={handleSignUp}>Sign Up</button>
            <button className="loginRegisterButton" onClick={handleLogin}>Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
