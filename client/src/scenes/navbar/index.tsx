import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";

const ROUTES: { [key: string]: string } = {
  DASHBOARD: "/",
  PREDICTIONS: "/predictions",
};

const Navbar: React.FC = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState<string>("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize={16}>
          Finanseer
        </Typography>
      </FlexBetween>
      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        {Object.entries(ROUTES).map(([key]) => (
          <Box key={key} sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to={ROUTES[key]}
              onClick={() => setSelected(key.toLowerCase())}
              style={{
                color:
                  selected === key.toLowerCase()
                    ? "inherit"
                    : palette.grey[700],
                textDecoration: "none",
              }}
              aria-label={`Navigate to ${key.toLowerCase()}`}
            >
              {key.toLowerCase()}
            </Link>
          </Box>
        ))}
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
