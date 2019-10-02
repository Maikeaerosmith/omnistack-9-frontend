import React, { useState } from "react";
import api from "../../services/api";

// import { Container } from './styles';

export default function Login({ history }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/sessions", {
      email
    });

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }

  const [email, setEmail] = useState("");

  return (
    <>
      <p>
        Oferça <b>spots</b> para programadores e encontre <b>talentos</b> para
        sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="text"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
}
