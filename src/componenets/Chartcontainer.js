import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChartJS from './Candlestick';
import { useEffect ,useState} from 'react';
import MadeData from "./Data";
import LineChart from './LineChart';


// const useStyles = makeStyles({
//     root: {
//       minWidth: 275,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });

function Chartcontainer() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        let Data = require('./Stock-List.json');
        setData(Data);
    },[])
    console.log(data);
    const [chartsToDisplay, setChartsToDisplay] = useState([]);

    const getChart = async () => {
        const charts = [];
        charts.push(<ChartJS key="AAPL" data={data} />);
        setChartsToDisplay(charts);
    };

    useEffect(() => {
        getChart();
    }, []);
    console.log(chartsToDisplay);
    //const classes = useStyles();
    //const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <Card variant="outlined">
                <CardContent>
                    <LineChart/>
                </CardContent>
                        
            </Card>

        </div>
    )
}

export default Chartcontainer
