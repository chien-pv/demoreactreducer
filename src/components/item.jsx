import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Item({ title, desctiption, status }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <h3>{title}</h3>
        </Grid>
        <Grid item xs={3}>
          <pre>{desctiption}</pre>
        </Grid>
        <Grid item xs={2}>
          {status == "done" && (
            <FormControlLabel control={<Checkbox defaultChecked />} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
