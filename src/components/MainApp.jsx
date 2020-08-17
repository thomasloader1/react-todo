import React from 'react';
import { Grid , Paper } from '@material-ui/core';
import InputCreateNote from './InputCreateNote'

class CenteredGrid extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/notas').then( res => res.json())
      .then( data => {
          const res = data ; 
          this.setState({data: res})
        })
    console.log(this.state.data)
  }
  
  render(){
    return (
      <div className="main-app_root">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className="main-app_paper-input">
              <InputCreateNote/>
              </Paper>
          </Grid>
          
    { this.state.data.map(d => 
      <Grid item xs={4}>
        <Paper key={d.id} className="main-app_paper">
          <h4>{d.title}</h4>
          <p>{d.text}</p>
        </Paper>
      </Grid>
      ) 
    }
           
        </Grid>
      </div>);
  }
}
export default CenteredGrid;
