import DashboardBox from "@/components/DashboardBox";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <DashboardBox gridArea="a">1</DashboardBox>
      <DashboardBox gridArea="b">1</DashboardBox>
      <DashboardBox gridArea="c">1</DashboardBox>
      <DashboardBox gridArea="d">1</DashboardBox>
      <DashboardBox gridArea="e">1</DashboardBox>
      <DashboardBox gridArea="f">1</DashboardBox>
      <DashboardBox gridArea="g">1</DashboardBox>
      <DashboardBox gridArea="h">1</DashboardBox>
      <DashboardBox gridArea="i">1</DashboardBox>
      <DashboardBox gridArea="j">1</DashboardBox>
    </Box>
  );
};

export default Dashboard;
