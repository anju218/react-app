import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import './App.css';
import Chartcontainer from './componenets/Chartcontainer';


function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    },

  }));
  const classes = useStyles();
  const [chart, setChart] = useState("Candle Stick");

  const handleChange = (event) => {
    setChart(event.target.value);
  };
  return (
    <div className="App">
      
      <div>
      <h1>OHLC Tracker</h1>
      <div className="Head">
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
        </form>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Chart</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={chart}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="OHLC">OHLC</MenuItem>
          <MenuItem value="Candlestick">Candelstick</MenuItem>
          <MenuItem value="Vertex Line">Vertex Line</MenuItem>
          <MenuItem value="Hollow Candle">Hollow Candle</MenuItem>
        </Select>
      </FormControl>
      

      </div>
    
          <Chartcontainer/>
          
      </div>
      

     
      
    </div>
  );
}

export default App;
