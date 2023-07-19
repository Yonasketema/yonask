import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </button>
        )}
      </CardActions>
    </Card>
  );
};

export default Project;
