import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState,useEffect } from 'react';
import './App.css';
import Chartcontainer from './componenets/Chartcontainer';
import { Button } from '@material-ui/core';


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
  const [chart, setChart] = useState("Candlestick");
  const [data, setdata] = useState();
  const [company, setcompany] = useState({
    symbol:"" ,open:"", close:"", high:"",low:"", date:""
  });

  useEffect(() => {
    let Data = require('./componenets/Stock-List.json');
    setdata(Data);
    // fetch("./components/Stock-List.json")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setdata(data);
    //   });
  }, []);
  //console.log(data);

  const handleChange = async (event) => {
    setChart(event.target.value);
  };
  const handleInput = (event) => {
    let name= event.target.name
    let value = event.target.value;
    setcompany({...company,[name]:value});
  }

  const handleinput = (event) => {
    //event.preventDefault();
    let name= event.target.name
    let value = event.target.value;
    setcompany({...company,[name]:value});
    //console.log(company['symbol']);
      let iterator;
      for(iterator=data.length-1;iterator>=0;iterator--)
      {   
          if(data['symbol'] === value)
          {
            company.open=data['open']
            console.log(company);
            break;
          }
          if(iterator===-1)
          {
            alert("Coudn't find any key");
          }
      }
  }

  return (
    <div className="App">
      
      <div>
      <h1>OHLC Tracker</h1>
      <div className="Head">
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" name="symbol" value={company.symbol} onChange={handleInput} label="Search" />
            <Button variant="contained" color="primary" name="symbol" onClick={handleinput}>Search</Button>
        </form>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Chart</InputLabel>
        <Select
          variant="outlined"
          value={chart}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="OHLC">OHLC</MenuItem>
          <MenuItem value="Candlestick">Candle Stick</MenuItem>
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
