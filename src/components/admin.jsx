import ColorInversionNavigation from "./sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ColorInversionNavigation />
          </Grid>
          <Grid item xs={8}>
            <main>
              <Outlet />
            </main>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Admin;
