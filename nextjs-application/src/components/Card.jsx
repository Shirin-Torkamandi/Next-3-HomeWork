"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function UsersCard({
  propPath,
  propImage,
  propFullName,
  propColor = "#69f0ae",
  propColor2 = "secondary",
}) {
  const router = useRouter();
  return (
    <Grid item size={{ xs: 12, sm: 4, md: 3 }}>
      <Card sx={{ bgcolor: propColor, maxWidth: 250 }}>
        <Suspense fallback={<p>Loading image...</p>}>
          {propImage && <CardMedia sx={{ height: 100 }} image={propImage} />}
        </Suspense>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {propFullName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ color: propColor2 }}
            onClick={() => router.push(propPath)}
            size="small"
          >
            More Info
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
