import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { gamesOptions, fetchData } from "../../utils/fetchData";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    var fetchedCategories = [];
    const fetchGameCategories = async () => {
      fetchedCategories = await fetchData(
        `https://rawg-video-games-database.p.rapidapi.com/genres?key=${process.env.REACT_APP_RAWG_API_KEY}`,
        gamesOptions
      );
      setCategories(fetchedCategories);
    };
    fetchGameCategories();
    console.log(categories);
  }, []);

  const handleClick = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <Grid container sx={{ margin: "0 10px" }} id="categories">
      <Grid item xs={12}>
        <Typography mt={5} mb={5} variant="h3" align="center">
          Browse Games By Categories
        </Typography>
      </Grid>
      {categories?.results &&
        categories?.results.map((category, id) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={4}
            sx={{
              margin: "2rem 0",
            }}
            key={id}
          >
            <Card
              sx={{
                maxWidth: 345,
                height: 350,
                background: "#FFF",
                border: "1px solid #000",
              }}
              className="card"
            >
              <CardMedia
                component="img"
                height="140"
                image={category?.image_background}
                alt={category?.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {category?.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => handleClick(category?.id)}
                  endIcon={<VisibilityIcon />}
                >
                  View Games
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Categories;
