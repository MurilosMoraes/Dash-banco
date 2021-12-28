import { useNavigate } from "react-router-dom";
import "./style.scss";

function App() {
  let nav = useNavigate();

  function toRegister() {
    nav("/register");
  }

  return (
    <div className="app">
      <div className="bg-login">
        <div className="box-login">
          <div className="lado-esquerdo-login">
            <h1 className="digital-eazy">Digital Eazy</h1>
          </div>

          <div className="lado-direito-login">
            <p className="title-login">Entre com sua conta</p>

            <input className="input-login" type="email" placeholder="Email" />
            <input
              className="input-login"
              type="password"
              placeholder="Senha"
            />

            <div className="cta-login" variant="contained">
              Acessar{" "}
            </div>

            <p className="ou">ou</p>

            <p onClick={toRegister} className="cadastre-se">
              Cadastre-se
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
