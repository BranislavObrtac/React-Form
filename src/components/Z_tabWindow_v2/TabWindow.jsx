import React, { useState } from "react";
import { Box, createTheme, Tab, ThemeProvider } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import styles from "./TabWindow.module.scss";
import Eia from "../../routes/Eia";
import Sea from "../../routes/Sea";
import Agendy from "./podstarnky/Agendy";
import Temy from "../../routes/Temy";

function Submenu() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f24822",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Box className={styles.submenu}>
          <TabList
            aria-label="Rýchly prehľad kategórií "
            onChange={handleChange}
            centered
            textColor="primary"
            indicatorColor="primary"
            variant="standard"
          >
            <Tab className={styles["tab-header"]} label="Agendy" value="1" />
            <Tab className={styles["tab-header"]} label="Eia" value="2" />
            <Tab className={styles["tab-header"]} label="Sea" value="3" />
            <Tab className={styles["tab-header"]} label="Temy" value="4" />
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
    </ThemeProvider>
  );
}

export default Submenu;
