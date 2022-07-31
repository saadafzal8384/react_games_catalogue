import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { gamesOptions, fetchData } from "../utils/fetchData";
import ListOfGames from "../components/ListOfGames/ListOfGames";

const GamesByCategories = () => {
  const { id } = useParams();
  const [categoryInfo, setCategoryInfo] = useState([]);

  useEffect(() => {
    var categoryData = [];
    const fetchCategoryData = async () => {
      categoryData = await fetchData(
        `https://rawg-video-games-database.p.rapidapi.com/genres/${id}?key=${process.env.REACT_APP_RAWG_API_KEY}`,
        gamesOptions
      );
      setCategoryInfo(categoryData);
    };
    fetchCategoryData();
    console.log(categoryInfo);
  }, []);

  const removePTagfromDescription = (text) => {
    var tmp = document.createElement("p");
    tmp.innerHTML = text;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <Box sx={{ margin: "2rem 0rem" }}>
      <Grid container>
        <Grid item xs={12}>
          {/* Genre Image Conatainer */}
          <img
            alt="Categoy banner"
            src={categoryInfo?.image_background}
            width="100%"
            height="400px"
          />
        </Grid>
        <Grid item xs={12}>
          {/* Genre Description */}
          <Typography variant="body1" gutterBottom align="justify" m={2}>
            {removePTagfromDescription(categoryInfo?.description)}
          </Typography>
        </Grid>
        <ListOfGames />
      </Grid>
    </Box>
  );
};

export default GamesByCategories;
