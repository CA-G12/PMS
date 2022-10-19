import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import DialpadIcon from "@mui/icons-material/Dialpad";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CategoryIcon from "@mui/icons-material/Category";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import GridViewIcon from "@mui/icons-material/GridView";

const drawer = (
  <div>
    <Link to="/">
      <img
        alt="logo"
        src={logo}
        width="150px"
        style={{ marginTop: "20px", marginLeft: "30px" }}
      />
    </Link>
    <Divider />

    <List>
      <Link to="/">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <DialpadIcon />
            </ListItemIcon>
            <ListItemText>Overview</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>

      <Link to="/pharmacies">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AttachFileIcon />
            </ListItemIcon>
            <ListItemText>Pharmacies</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>

      <Link to="/products">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>

      <Link to="/requests">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText>Requests</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>

      <Link to="/applications">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <GridViewIcon />
            </ListItemIcon>
            <ListItemText>Applications</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  </div>
);

export default drawer;
