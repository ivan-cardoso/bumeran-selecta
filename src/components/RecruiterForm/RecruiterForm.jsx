
import { Grid, TextField, makeStyles, Button } from "@material-ui/core";

/* 
name  surname email country state bio img rating  favoriteArea1, 2 y 3 y seniority 
*/

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));



const RecruiterForm = ({handleInputChange, handleSubmit,values}) => {
  
  const classes = useStyles();

  

  return (
    <form
      className={classes.root}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Surname"
            name="surname"
            value={values.surname}
            onChange={handleInputChange}
          />

            <TextField
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Country"
            name="country"
            value={values.country}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="State"
            name="state"
            value={values.state}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Bio"
            name="bio"
            value={values.bio}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Img"
            name="img"
            value={values.img}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="favoriteArea1"
            name="favoriteArea1"
            value={values.favoriteArea1}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="favoriteArea2"
            name="favoriteArea2"
            value={values.favoriteArea2}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="favoriteArea3"
            name="favoriteArea3"
            value={values.favoriteArea3}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Seniority"
            name="seniority1"
            value={values.seniority1}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Seniority"
            name="seniority2"
            value={values.seniority2}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            label="Seniority"
            name="seniority3"
            value={values.seniority3}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}></Grid>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          label="Add"
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            width: "10%",
            margin: "10px auto",
          }}
        >
          Add
        </Button>
      </Grid>
    </form>
  );
};

export default RecruiterForm;
/* 
name  surname email country state bio img rating  favoriteArea1, 2 y 3 y seniority 
*/

/* <Container>

      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" type="email" aria-describedby="email-helper" />
        <FormHelperText id="email-helper">We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="email">Editar </InputLabel>
        <Input id="email" type="email" aria-describedby="email-helper" />
        <FormHelperText id="email-helper">We'll never share your email.</FormHelperText>
      </FormControl>


    </Container> */



    