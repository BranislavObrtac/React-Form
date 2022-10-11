import React, { useState } from "react";
import { Box, Menu, MenuItem, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import styles from "./TabWindow.module.scss";
import Eia from "../../routes/Eia";
import Sea from "../../routes/Sea";
import Agendy from "../../routes/Agendy";
import Temy from "../../routes/Temy";

//Import ICONS
import ParkIcon from "@mui/icons-material/Park";

function Submenu() {
  const [value, setValue] = useState("1");
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box className={styles.submenu}>
          <TabList
            aria-label="Rýchly prehľad kategórií "
            onChange={handleChange}
            centered
            textColor="secondary"
            indicatorColor="secondary"
            variant="standard"
          >
            <Tab
              label="Agendy"
              value="1"
              icon={<ParkIcon />}
              iconPosition={"end"}
            />
            <Tab label="Eia" value="2" />
            <Tab label="Sea" value="3" />
            <Tab label="Temy" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: "1rem 0 0 0" }}>
          <Agendy />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "1rem 0 0 0" }}>
          <Eia />
        </TabPanel>
        <TabPanel value="3" sx={{ padding: "1rem 0 0 0" }}>
          <Sea />
        </TabPanel>
        <TabPanel value="4" sx={{ padding: "1rem 0 0 0" }}>
          <Temy />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Submenu;
