import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {FiLogIn} from "react-icons/fi";

import api from "../../Services/api";

import "./styles.css";

import logoImg from "../../Assets/logo.svg";
import heroesImg from "../../Assets/heroes.png";

export default function Logon() {
    const [id, setId] = useState("");
    const history = useHistory("");

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post("sessions", {id,});

            // *removido localStorage.setItem("ongId", id);
            // localStorage.setItem("ongName", response.data.name);

            history.push("/profile");
        } catch (err) {
            alert("falha no login, tente novamente");
        }

    }

    return (
        <div className="logon-container">
        <selection className="form">
            <img src={logoImg} alt="Be The Hero" />

            <form>
                <h1>Faça seu logon</h1>

                <input 
                placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.targer.value)}
                />

                <button className="button" type="submit">Entrar</button>

                <Link className=".back-link" to="/register">
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                </Link>
            </form>
        </selection>

        <img src={heroesImg} alt="Heroes" />
        </div>
    );
}