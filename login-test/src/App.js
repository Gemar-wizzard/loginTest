import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    
    flexGrow: 1,
    
  },
  paper: {
      width: theme.spacing(40),
      height: theme.spacing(35),
      textAlign: 'center',

  },
  paperTop:{
      width: theme.spacing(40),
      height: theme.spacing(25),
      backgroundColor: '#26a69a',
       color: '#ffffff',
      
  },
  textColor:{
     color: '#eeeeee',
  },
  form:{
      margin: theme.spacing(2),
      width: '30ch',
  },
  button: {
    width: theme.spacing(12),
    margin: theme.spacing(9),
    marginLeft:'190px',
    color:'#ff9800',
  },
  costum:{
      marginTop:'50px',
  },
  margincostum:{

    marginLeft:'10px',
    paddingTop:'20px',

  },
}));


function App() {
  const classes = useStyles();

    return (
         <div className={classes.root}>
          <Grid container container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item className={classes.costum} xs={6}>
              <Paper elevation={3} className={classes.paperTop}  square>
                  <div className={classes.margincostum}>
                      <h1>Electric Billing <br/>System</h1>             
                      <p className={classes.textColor}>Admin Login</p>
                  </div>
               </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3} className={classes.paper} square>
                  <form  noValidate autoComplete="off">
                   <TextField id="standard-basic" label="User Name" className={classes.form}/>
                   <TextField id="standard-basic" label="Password" className={classes.form}/>
                   <Button className={classes.button}>Sign In</Button>                 
                  </form>
              </Paper>
            </Grid>
          </Grid>
         </div>

  );
}

export default App;
