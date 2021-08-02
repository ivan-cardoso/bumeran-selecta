import React from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./style";
import { getAllAditionalData } from "../../store/aditionalData/actions";
import styles from "../Jobs/index.module.css";
//import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../RecruiterForm/ImageUpload";

export default function AddCompaniesForm({
  values,
  setValues,
  handleInputChange,
  handleSubmit,
  handleClose,
}) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllAditionalData());
  }, [dispatch]);
  const classes = useStyles();
  const { aditionalData } = useSelector((state) => state);
  const { states, areas } = aditionalData;

  return (
    <>
      <form
        onChange={(e) => handleInputChange(e)}
        className={classes.root}
        onSubmit={handleSubmit}
      >
        <Grid item xs={8}>
          <ImageUpload setValues={setValues} values={values} />
        </Grid>
        <Grid container spacing={12}>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Nombre"
              name="name"
              value={values.name}
              autoComplete="disabled"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Provincia
              </InputLabel>
              <Select
                name="stateId"
                required
                label="Provincia"
                onChange={(e) => handleInputChange(e)}
                autoComplete="disabled"
              >
                <MenuItem className={styles.menuItemSelect} value="" disable>
                  <em>Seleccione provincia</em>
                </MenuItem>
                {states
                  ? states.map((state) => {
                      return <MenuItem value={state.id}>{state.name}</MenuItem>;
                    })
                  : null}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Area
              </InputLabel>
              <Select
                name="areaId"
                required
                label="Area"
                onChange={(e) => handleInputChange(e)}
                autoComplete="disabled"
              >
                <MenuItem className={styles.menuItemSelect} value="" disable>
                  <em>Seleccione su area</em>
                </MenuItem>
                {areas
                  ? areas.map((area) => {
                      return <MenuItem value={area.id}>{area.name}</MenuItem>;
                    })
                  : null}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Email"
              type="email"
              name="email"
              value={values.email}
              autoComplete="disabled"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Nombre del contacto"
              name="contactName"
              value={values.contactName}
              autoComplete="disabled"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Descripción"
              name="description"
              multiline
              rows={6}
              value={values.description}
              autoComplete="disabled"
              className={styles.formControlDescription}
            />
          </Grid>
          <input
            style={{ display: "none" }}
            id="contained-button-file"
            type="file"
          />

          <Grid item xs={3}></Grid>
          <Grid item xs={4}>
            <Button type="submit" color="primary" variant="contained">
              Confirmar
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button
              onClick={() => handleClose()}
              color="primary"
              variant="contained"
            >
              Cerrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
