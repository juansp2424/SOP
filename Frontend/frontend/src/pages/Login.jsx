import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Container, der den gesamten Bildschirm abdeckt
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

// Überschrift
const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

// Input-Feld
const Input = styled.input`
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Button
const Button = styled.button`
  width: 320px;
  padding: 12px 20px;
  margin: 8px 0;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      // Für Testzwecke speichern wir einfach die E-Mail und navigieren weiter
      localStorage.setItem("user", email);
      navigate("/dashboard");
    } else {
      alert("Bitte alle Felder ausfüllen.");
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <Input
        type="email"
        placeholder="E-Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </LoginContainer>
  );
};

export default Login;
