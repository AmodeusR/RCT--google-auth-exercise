import { GoogleLogo } from "phosphor-react";
import React from "react";

import "./signin.scss";

const SignIn = () => {
  return (
    <div className="container">
      <h1>Acesse sua Conta</h1>
      <span>
        Utilizando autenticação social, por exemplo, autenticação com a Google{" "}
        <br />
        você facilita a vida do usuário, permitindo utilizar a sua aplicação sem
        fazer cadastro
      </span>

      <button type="button" className="button">
        <GoogleLogo size={28} weight="bold" />
        Entrar com o Google
      </button>
    </div>
  );
};

export default SignIn;
