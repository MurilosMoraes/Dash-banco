import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import "./style.scss";
import { Search } from "@mui/icons-material";
import { useStore } from "../../context/StoreContext";

function Users() {
  const [active, setActive] = useState("usuários");
  const [context, setContex] = useState("pf");
  const { setSelectedUser } = useStore();

  const navigation = useNavigate();

  const columnsPf = [
    { field: "id", headerName: "CPF", flex: 1 },
    { field: "name", headerName: "Nome", flex: 1 },
    { field: "birthday", headerName: "Data de Nascimeto", flex: 1 },
    { field: "state", headerName: "Estado", flex: 1 },
    { field: "city", headerName: "Cidade", flex: 1 },
  ];
  const columnsPj = [
    { field: "id", headerName: "CNPJ", flex: 1 },
    { field: "name", headerName: "Nome", flex: 1 },
    { field: "birthday", headerName: "Data de fundação", flex: 1 },
    { field: "state", headerName: "Estado", flex: 1 },
    { field: "city", headerName: "Cidade", flex: 1 },
  ];

  const rowsPf = [
    {
      id: "123.488.555-40",
      name: "Vitor Hugo",
      birthday: "20/11/2004",
      state: "SP",
      city: "Araraquara",
      user: {
        id: "123.488.555-40",
        name: "Vitor Hugo",
        birthday: "20/11/2004",
        state: "SP",
        city: "Araraquara",
        email: "vitor@gmail.com",
        phone: "(16) 99999-9999",
        document_images: [
          {
            url: "https://www.saopaulo.sp.gov.br/wp-content/uploads/2019/08/novo-rg-thumb-icone-correto.jpg",
          },
          {
            url: "https://www.saopaulo.sp.gov.br/wp-content/uploads/2019/08/novo-rg-thumb-icone-correto.jpg",
          },
        ],
        adress: {
          code: "47368-878",
          street: "Avenida Assis Brasil",
          number: 1903,
          complement: "Esquina com o Ibirapuera",
          district: "Jardim Paulista",
          state: "SP",
          city: "São Paulo",
        },
      },
    },
  ];
  const rowsPJ = [
    {
      id: " 12.123.123/0001-12",
      name: "Empresa de cosmeticos",
      birthday: "12/01/2020",
      state: "SP",
      city: "São Paulo",
      user: {
        id: " 12.123.123/0001-12",
        name: "Empresa de cosmeticos",
        birthday: "12/01/2020",
        state: "SP",
        city: "São Paulo",
        email: "vitor@gmail.com",
        phone: "(16) 99999-9999",
        adress: {
          code: "47368-878",
          street: "Avenida Assis Brasil",
          number: 1903,
          complement: "Esquina com o Ibirapuera",
          district: "Jardim Paulista",
          state: "SP",
          city: "São Paulo",
        },
        document_images: [
          {
            url: "https://www.saopaulo.sp.gov.br/wp-content/uploads/2019/08/novo-rg-thumb-icone-correto.jpg",
          },
          {
            url: "https://www.saopaulo.sp.gov.br/wp-content/uploads/2019/08/novo-rg-thumb-icone-correto.jpg",
          },
        ],
      },
    },
  ];

  const renderRows = (context) => {
    let rows = [];
    if (context == "pf") {
      rows = rowsPf;
    } else {
      rows = rowsPJ;
    }
    return rows;
  };
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            placeholder={`Pesquise pelo ${
              context == "pf" ? "CPF" : "CNPJ"
            } do usuário`}
            className="search-input"
            InputProps={{
              startAdornment: (
                <Search style={{ marginRight: 10, cursor: "pointer" }} />
              ),
            }}
          />
          <select
            className="select-context"
            value={context}
            onChange={(e) => setContex(e.target.value)}
          >
            <option value="pf">Pessoa Fisíca</option>
            <option value="pj">Pessoa Juridíca</option>
          </select>
        </div>
        <div style={{ height: 600, width: "100%", marginTop: 40 }}>
          <DataGrid
            rows={renderRows(context)}
            columns={context == "pf" ? columnsPf : columnsPj}
            pageSize={20}
            rowsPerPageOptions={[20]}
            disableSelectionOnClick
            onRowClick={(e) => {
              console.log(e.row.user);
              setSelectedUser(e.row.user);
              navigation("/users/view");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;
