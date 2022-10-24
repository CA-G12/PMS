import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Dialpad,
  AttachFile,
  Category,
  RequestQuote,
  GridView,
} from "@mui/icons-material";
import logo from "../assets/logo.png";

const DRAWER_TABS_CONFIG = [
  { component: <Dialpad />, slug: "Overview" },
  { component: <AttachFile />, slug: "Pharmacies" },
  { component: <Category />, slug: "Products" },
  { component: <RequestQuote />, slug: "Requests" },
  { component: <GridView />, slug: "Applications" },
];

const drawer = (
  <div>
    <Link to="/admin">
      <img
        alt="logo"
        src={logo}
        width="150px"
        style={{ marginTop: "20px", marginLeft: "30px" }}
      />
    </Link>
    <Divider />

    <List>
      {DRAWER_TABS_CONFIG.map(({ component, slug }) => (
        <Link to={`/admin/${slug.toLowerCase()}`} key={slug}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{component}</ListItemIcon>
              <ListItemText primary={slug} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  </div>
);

export default drawer;
