import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import useStyles from "./style";

export default function AddCompaniesForm({
  values,
  handleInputChange,
  handleSubmit,
}) {
  const classes = useStyles();

  return (
    <form
      onChange={(e) => handleInputChange(e)}
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Name"
            name="name"
            value={values.name}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Address"
            name="address"
            value={values.address}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={values.email}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Img"
            name="img"
            value={values.imagen}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            label="Bio"
            name="bio"
            value={values.bio}
          />
        </Grid>
        <input
          style={{ display: "none" }}
          id="contained-button-file"
          type="file"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          label="Add"
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            width: "10%",
            margin: "10px auto",
          }}
        >
          Confirm
        </Button>
      </Grid>
    </form>
  );
}
