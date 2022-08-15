import { GoogleLogo } from "phosphor-react";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";

import "./signin.scss";
import { auth } from "../../services/firebase";
import { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState<User>({} as User);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(response => {
        setUser(response.user);        
      }).catch(error => {
        console.error(error);        
      })
  }
  
  return (
    <div className="container">
      <div className="user">
        {user.photoURL &&
          <img src={user.photoURL} alt="Foto do usuário da Google" />
        }
        <h2>{user.displayName}</h2>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua Conta</h1>
      <span>
        Utilizando autenticação social, por exemplo, autenticação com a Google{" "}
        <br />
        você facilita a vida do usuário, permitindo utilizar a sua aplicação sem
        fazer cadastro
      </span>

      <button type="button" className="button" onClick={handleGoogleSignIn}>
        <GoogleLogo size={28} weight="bold" />
        Entrar com o Google
      </button>
    </div>
  );
};

export default SignIn;
