import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderColor: "red"
      }
    },
    select: {
      "&:before": {
        borderColor: "red"
      },
      '&:hover': {
        background: "rgb(48, 111, 224, 0.42)",    
      }
    }
  }));


export default useStyles
