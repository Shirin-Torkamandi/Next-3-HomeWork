"use client";
import { Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import Button from "@mui/material/Button";
export default function error() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h3" component={"h1"} color={orange[400]}>
        {" "}
        An error accurred: You are putting numbers more than 8 after /posts
      </Typography>
      <h2>Please try 1 to 8</h2>
      <Button sx={{ bgcolor: orange[200] }} variant="contained" href="/posts">
        Want to go back?
      </Button>
    </div>
  );
}