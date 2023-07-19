import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

const Project = ({ img, nav, navLink, gitLink, title, description }) => {
  return (
    <Card
      sx={{ maxWidth: 412, backgroundColor: "#212121", marginBottom: "12%" }}
    >
      <CardMedia component="img" alt="green iguana" height="212" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" color="#fff" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#fff">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <button
          style={{
            color: "#fff",
            backgroundColor: "transparent",
            border: "none",
            width: "1.5rem",
          }}
        >
          <a href={gitLink}>
            <FiGithub />
          </a>
        </button>
        {nav && (
          <button
            style={{
              color: "#fff",
              backgroundColor: "transparent",
              border: "none",
              width: "1.5rem",
            }}
          >
            <a href={navLink} target="blank">
              <BiLinkExternal />
            </a>
          </button>
        )}
      </CardActions>
    </Card>
  );
};

export default Project;
