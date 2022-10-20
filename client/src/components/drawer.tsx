import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import DialpadIcon from "@mui/icons-material/Dialpad";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CategoryIcon from "@mui/icons-material/Category";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import GridViewIcon from "@mui/icons-material/GridView";
import logo from "../assets/logo.png";

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
      <Link to="/admin/overview">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <DialpadIcon />
            </ListItemIcon>
            <ListItemText>Overview</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>

      <Link to="/admin/pharmacies">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AttachFileIcon />
            </ListItemIcon>
            <ListItemText>Pharmacies</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>

      <Link to="/admin/products">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>

      <Link to="/admin/requests">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText>Requests</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>

      <Link to="/admin/applications">
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
