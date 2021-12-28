import "./style.scss";
import { useNavigate } from "react-router-dom";

function App() {
  let nav = useNavigate();

  function toLogin() {
    nav("/login");
  }

  return (
    <div className="bg-registro">
      <div className="box-registro">
        <p className="title-registro">Crie uma conta</p>

        <input
          className="input-registro"
          type="email"
          placeholder="Nome Completo"
        />
        <input className="input-registro" type="email" placeholder="Email" />
        <input className="input-registro" type="email" placeholder="CPF" />
        <input className="input-registro" type="email" placeholder="Senha" />
        <input
          className="input-registro"
          type="email"
          placeholder="Confirmar Senha"
        />

        <div className="cta-registro" variant="contained">
          Cadastrar{" "}
        </div>

        <p className="ou-registro">ou</p>

        <p onClick={toLogin} className="login">
          Acesse sua conta
        </p>
      </div>
    </div>
  );
}

export default App;
