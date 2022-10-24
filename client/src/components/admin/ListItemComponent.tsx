import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

type ListItemComponentProps = {
  bgcolor: string;
  value: number;
  label: string;
};
const ListItemComponent: React.FC<ListItemComponentProps> = ({
  bgcolor,
  value,
  label,
}) => {
  return (
    <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px", gap: "15px" }}>
      <span
        style={{
          backgroundColor: bgcolor,
          width: "13px",
          height: "13px",
          borderRadius: "4px",
        }}
      ></span>
      <ListItemText sx={{ fontSize: "13px" }}>
        <Typography
          paragraph
          sx={{ fontWeight: "700", fontSize: ".8rem", marginBottom: "0" }}
        >
          {value}% in {label}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default ListItemComponent;
