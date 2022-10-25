import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, Button } from "@mui/material";

type Card = {
  ownerName: string;
  ownerId: number;
  licenseNumber: number;
  pharmacyName: string;
};
interface Props {
  card: Card;
  setApproved: () => Promise<void>;
  setRejected: () => Promise<void>;
}

const ApplicationCard = ({ card, setApproved, setRejected }: Props) => (
  <Box
    sx={{
      border: "2px solid #B6CAFD",
      borderRadius: "20px",
      width: "80%",
      margin: "2rem auto",
      padding: "2rem 0",
      paddingLeft: "3rem",
      display: "flex",
      position: "relative",
      fontSize: "1.3rem",
    }}
  >
    <Box>
      <Typography sx={{ fontSize: "1.3rem", margin: "0.5rem 0" }}>
        <strong>Owner’s name : </strong>
        {card.ownerName}
      </Typography>
      <Typography sx={{ fontSize: "1.3rem", margin: "0.5rem 0" }}>
        <strong>Owner’s Id : </strong>
        {card.ownerId}
      </Typography>
      <Typography sx={{ fontSize: "1.3rem", margin: "0.5rem 0" }}>
        <strong>license number : </strong>
        {card.licenseNumber}
      </Typography>
      <Typography sx={{ fontSize: "1.3rem", margin: "0.5rem 0" }}>
        <strong>Pharmacy name : </strong>
        {card.pharmacyName}
      </Typography>
    </Box>
    <Box
      sx={{
        position: "absolute",
        right: "6rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button
        sx={{
          marginBottom: "1rem",
          marginTop: "1rem",
          borderRadius: "50%",
          fontSize: "2.5rem",
        }}
        variant="contained"
        onClick={() => setApproved()}
      >
        <CheckIcon sx={{ fontSize: "2.5rem" }}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </CheckIcon>
      </Button>
      <Button
        sx={{
          borderRadius: "50%",
          marginTop: "1rem",
          fontSize: "2.5rem",
        }}
        variant="outlined"
        onClick={() => setRejected()}
      >
        <CloseIcon sx={{ fontSize: "2.5rem" }}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </CloseIcon>
      </Button>
    </Box>
  </Box>
);

export default ApplicationCard;
