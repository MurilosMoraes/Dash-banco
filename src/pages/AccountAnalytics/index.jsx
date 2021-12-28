import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import "./style.scss";
import { Search } from "@mui/icons-material";
import { useStore } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

function CardAnalytics() {
  const [active, setActive] = useState("an contas");
  const [context, setContex] = useState("pf");
  const { setSelectedAccounAn } = useStore();
  const navigation = useNavigate();

  const columnsPf = [
    { field: "id", headerName: "Pedido", flex: 1 },
    { field: "name", headerName: "Nome", flex: 1 },
    { field: "code", headerName: "CPF", flex: 1 },
    { field: "date", headerName: "Data", flex: 1 },
  ];
  const columnsPj = [
    { field: "id", headerName: "Pedido", flex: 1 },
    { field: "name", headerName: "Nome", flex: 1 },
    { field: "code", headerName: "CNPJ", flex: 1 },
    { field: "date", headerName: "Data", flex: 1 },
  ];

  const rowsPf = [
    {
      id: "83412",
      name: "Vitor Hugo",
      code: "123.488.555-40",
      date: "20/11/2021",
      accountAn: {
        id: "83412",
        name: "Vitor Hugo",
        code: "123.488.555-40",
        date: "20/11/2021",
        email: "vitor@gmail.com",
        date: "20/11/2021",
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
      id: "83412",
      name: "cacau show",
      code: "12.123.123/0001-12",
      date: "20/11/2021",
      accountAn: {
        id: "83412",
        name: "cacau show",
        code: "12.123.123/0001-12",
        date: "20/11/2021",
        email: "Panda@gmail.com",
        date: "20/11/2021",
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
            placeholder="Pesquise pelo número do pedido"
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
              console.log(e.row.accountAn);
              setSelectedAccounAn(e.row.accountAn);
              navigation("/account-analytics/view");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CardAnalytics;
