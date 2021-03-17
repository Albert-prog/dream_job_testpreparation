import './App.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  margin: {
    borderRadius: theme.spacing(4),
    padding: theme.spacing(2,8),
    margin: theme.spacing(2,4),
  },
}));


function App() {

  const ApplyButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);

  const classes = useStyles();

  return (
    <div className="App">
      <section className="section">
        <h1 className="header">
          Find Your Dream Job with Us
        </h1>
        <Typography>
        <MenuIcon className="menu"/>
        <p className="MuiTypography-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        </Typography>
        <ApplyButton variant="contained" color="primary" className={classes.margin}>APPLY</ApplyButton>
      </section>
    </div>
  );
}

export default App;
