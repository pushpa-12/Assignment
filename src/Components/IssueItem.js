import React from "react";
import { Avatar, Box, Chip, Grid, Typography } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AirlineStopsOutlinedIcon from "@mui/icons-material/AirlineStopsOutlined";

const IssueItem = ({ data }) => {

  //style 
  const styleObj = {
    container: {
      border: "1px solid",
      borderColor: "#d6d4d4",
      p: "10px",
    },
    title: {
      ml: "5px",
      lineHeight: "25px",
      fontWeight:"600"
    },
    openDetails:{
        ml: "20px",
        color: "#b8b4b4",
        mt: "5px",
        fontSize: "10px",
        fontWeight: "500",
      
    },
    avatar:{
      width: 18, height: 18 
    },
    iconWithText:{
      display: "flex",
    }
  };

  //fn for calculate days/hours
  function calculateDays(createDate) {
    const targetDate = new Date(createDate);
    const today = new Date();
    const differenceMs = targetDate - today;
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

    if (differenceDays === 1) {
      return "Yesterday";
    } else if (differenceDays === 0) {
      const differenceHours = Math.ceil(differenceMs / (1000 * 60 * 60));
      return `${differenceHours} hours`;
    } else {
      return `${differenceDays} days`;
    }
  }

  return (
    <Grid container sx={styleObj.container}>
      <Grid item xs={8}>
        <Box sx={{ display: "flex" }}>
          <RadioButtonCheckedIcon fontSize="small" color="success" />
          <Typography variant="body2" sx={styleObj.title}>
            {data?.title}{" "}
            {data?.labels?.length >= 1
              ? data?.labels?.map((label) => (
                  <Chip
                  key={label.name}
                    label={label?.name}
                    size="small"
                    style={{
                      backgroundColor: `#${label?.color}`,
                      marginRight: "5px",
                      color:
                        label?.color === "9149d1" || label?.color === "263258"
                          ? "white"
                          : "black",
                    }}
                  />
                ))
              : ""}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={styleObj.openDetails}
        >
          {`#${data?.number} Open ${calculateDays(data?.created_at)}  ago by ${
            data?.user?.login
          }`}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
         ...styleObj.iconWithText,
          justifyContent: "center",
          visibility: data?.reactions?.total_count >= 1 ? "visible" : "hidden",
        }}
      >
        <AirlineStopsOutlinedIcon fontSize="small" />
        <Typography variant="body2" sx={{ ml: "5px" }}>
          {" "}
          {data?.reactions?.total_count}{" "}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Avatar
          alt="img"
          src={data?.user?.avatar_url}
          sx={styleObj.avatar}
        />
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          ...styleObj.iconWithText,
          justifyContent: "flex-end",
          visibility: data?.comments >= 1 ? "visible" : "hidden",
        }}
      >
        <ChatBubbleOutlineOutlinedIcon fontSize="small" />
        <Typography variant="body2" sx={{ ml: "5px" }}>
          {" "}
          {data?.comments}{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default IssueItem;
