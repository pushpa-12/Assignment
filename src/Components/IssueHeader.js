import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckIcon from "@mui/icons-material/Check";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const IssueHeader = () => {
  const styleObj = {
    container: {
      border: "1px solid",
      borderColor: "#d6d4d4",
      p: "15px",
      backgroundColor: "#f4f4f4",
    },
    openText: {
      ml: "5px",
      fontWeight: "600",
    },
    closeText: {
      fontSize: "12px",
      color: "#8f8b8b",
    },
    navList: {
      display: "flex",
      justifyContent: "space-between",
    },
    flexDisplay:{
        display: "flex",
    }
  };

  const navList = [
    "Author",
    "Label",
    "Projects",
    "Assignee",
    "Sort",
  ];

  return (
    <Grid container sx={styleObj.container}>
      <Grid item xs={12} md={8} sx={styleObj.flexDisplay}>
        <Box sx={styleObj.flexDisplay}>
          <RadioButtonCheckedIcon fontSize="small" />
          <Typography variant="body2" sx={styleObj.openText}>
            655 Open
          </Typography>
        </Box>
        <Box sx={styleObj.flexDisplay}>
          <CheckIcon fontSize="small" sx={{ mx: "7px" }} />
          <Typography variant="body2" sx={styleObj.closeText}>
            10104 Closed
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={styleObj.navList}
      >
        {navList?.map((item) => (
          <Box sx={styleObj.flexDisplay} key={item}>
            <Typography variant="body2" sx={styleObj.closeText}>
              {item}
            </Typography>
            <ArrowDropDownIcon fontSize="small" />
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default IssueHeader;
