import {
  Autocomplete,
  Avatar,
  Badge,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/CIFRAPay.png";
import "./style.scss";

import { useNavigate } from "react-router-dom";

function Navbar({ active, user, searchList, setActive }) {
  const [search, setSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let navigation = useNavigate();

  return (
    <>
      <header className="header">
        <div className="container-logo">
          Digital Eazy
        </div>
        <div className="container-links">
          <ul>
            <li>
              <a
                onClick={() => navigation("/")}
                className={active === "home" ? "active" : ""}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                onClick={() => navigation("/users")}
                className={active === "usuários" ? "active" : ""}
              >
                USUÁRIOS
              </a>
            </li>
            <li>
              <a
                onClick={() => navigation("/account-analytics")}
                className={active === "an contas" ? "active" : ""}
              >
                ANÁLISE DE CONTAS
              </a>
            </li>
            <li>
              <a
                onClick={() => navigation("/card-analytics")}
                className={active === "an cartões" ? "active" : ""}
              >
                ANÁLISE DE CARTÕES
              </a>
            </li>
            <li>
              <a
                onClick={() => navigation("/configuration")}
                className={active === "configurações" ? "active" : ""}
              >
                CONFIGURAÇÕES
              </a>
            </li>
          </ul>
        </div>
        <div className="container-user">
          {search ? (
            <Autocomplete
              id="Pesquisar"
              freeSolo
              clearIcon={false}
              sx={{ width: "35%" }}
              options={searchList.map((option) => option.title)}
              renderInput={(params) => (
                <TextField {...params} placeholder="Pesquisar" />
              )}
            />
          ) : (
            false
          )}
          {/* <IconButton>
            <Badge badgeContent={user.notifications.length} color="primary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton> */}

          <IconButton
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ArrowDropDownRoundedIcon fontSize="large" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5px 10px",
              }}
            >
              {user ? (
                <Avatar>{user.firstName[0] + user.lastName[0]}</Avatar>
              ) : (
                <Avatar sx={{ cursor: "pointer" }}></Avatar>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 5,
                  justifyContent: "center",
                }}
              >
                <Typography style={{ fontWeight: "bold" }} variant="inherit">
                  {user.firstName + " " + user.lastName}
                </Typography>
                <Typography variant="inherit">{user.email}</Typography>
              </div>
            </div>
            <Divider sx={{ my: 0.5, margin: "10px 0" }} />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ExitToAppTwoToneIcon />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                Sair
              </Typography>
            </MenuItem>
          </Menu>
        </div>
        <div className="mobile-menu">
          <IconButton onClick={() => setMobileMenu(!mobileMenu)}>
            {!mobileMenu ? <MenuIcon /> : <CloseIcon />}
          </IconButton>
        </div>
      </header>
      {mobileMenu && (
        <nav className="mobile-menu-container">
          <div
            style={{
              display: "flex",
              margin: 10,
            }}
          >
            {user ? (
              <Avatar>{user.firstName[0] + user.lastName[0]}</Avatar>
            ) : (
              <Avatar sx={{ cursor: "pointer" }}></Avatar>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <Typography style={{ fontWeight: "bold" }} variant="inherit">
                {user.firstName + " " + user.lastName}
              </Typography>
              <Typography variant="inherit">{user.email}</Typography>
            </div>
          </div>
          <MenuItem
            onClick={() => {
              navigation("/");
              handleClose();
            }}
          >
            {" "}
            <a className={active === "home" ? "active" : ""}>HOME</a>
          </MenuItem>

          <MenuItem
            onClick={() => {
              navigation("/users");
              handleClose();
            }}
          >
            <a className={active === "usuários" ? "active" : ""}>USUÁRIOS</a>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigation("/account-analytics");
              handleClose();
            }}
          >
            {" "}
            <a className={active === "an contas" ? "active" : ""}>
              ANÁLISE DE CONTAS
            </a>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigation("/card-analytics");
              handleClose();
            }}
          >
            {" "}
            <a className={active === "an cartões" ? "active" : ""}>
              ANÁLISE DE CARTÕES
            </a>
          </MenuItem>

          <MenuItem
            onClick={() => {
              navigation("/configuration");
              handleClose();
            }}
          >
            {" "}
            <a className={active === "configurações" ? "active" : ""}>
              CONFIGURAÇÕES
            </a>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigation("/");
              handleClose();
            }}
          >
            <ListItemIcon>
              <ExitToAppTwoToneIcon />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              SAIR
            </Typography>
          </MenuItem>
        </nav>
      )}
    </>
  );
}

export default Navbar;
