import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import { useStore } from "../../../context/StoreContext";
import "./index.scss";

function Accounts() {
  const { selectedAccountAn } = useStore();
  const [active, setActive] = useState("an contas");

  return (
    <div className="container">
      <Navbar
        active={active}
        setActive={setActive}
        user={{
          firstName: "Vitor",
          lastName: "Hugo",
          notifications: [1, 2, 3],
          email: "admin@admin.com",
        }}
      />
      <div className="content">
        <div className="content-actions">
          <h2
            style={{
              height: 60,
              display: "flex",
              alignItems: "center",
              fontSize: 30,
              marginBottom: 10,
            }}
          >
            {selectedAccountAn.id} - {selectedAccountAn.name}
          </h2>
          <div style={{ display: "flex" }}>
            <Button
              style={{
                height: 60,
                width: 150,
                backgroundColor: "#2EC461",
                color: "#fff",
                fontWeight: "bold",
                marginRight: 20,
              }}
              onClick={() => console.log(selectedAccountAn)}
            >
              Aprovar
            </Button>
            <Button
              style={{
                height: 60,
                width: 150,
                backgroundColor: "#F84040",
                color: "#fff",
                fontWeight: "bold",
              }}
              onClick={() => console.log(selectedAccountAn)}
            >
              Reprovar
            </Button>
          </div>
        </div>
        <div className="content-data">
          <div style={{ flex: 1, marginTop: 20 }}>
            <h1 style={{ fontWeight: "bold", fontSize: 30, marginTop: 20 }}>
              Dados Pessoais:
            </h1>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Nome Completo:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.name}
              </span>
            </h3>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Data de Nascimento:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.date}
              </span>
            </h3>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Documento:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.code}
              </span>
            </h3>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Email:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.email}
              </span>
            </h3>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Telefone:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.phone}
              </span>
            </h3>
          </div>
          <div style={{ flex: 1, marginTop: 20 }}>
            <h1 style={{ fontWeight: "bold", fontSize: 30, marginTop: 20 }}>
              Endereço:
            </h1>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              CEP:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.adress.code}
              </span>
            </h3>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Rua/Avenida:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.adress.street}
              </span>
            </h3>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Número:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.adress.number}
              </span>
            </h3>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Complemento:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.adress.complement}
              </span>
            </h3>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Bairro:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.adress.district}
              </span>
            </h3>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Estado:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.adress.state}
              </span>
            </h3>
            <h3 style={{ margin: "20px 0", fontWeight: "bold" }}>
              Cidade:{" "}
              <span style={{ fontWeight: "normal" }}>
                {selectedAccountAn.adress.city}
              </span>
            </h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            marginTop: 40,
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: 30, marginTop: 20 }}>
            Fotos do Documento:
          </h1>
          <div className="content-images">
            {selectedAccountAn.document_images.map((image) => {
              return <img src={image.url} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
