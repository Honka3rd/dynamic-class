import React, { Component } from 'react';
import './App.css';

function Switch(props){
  return(
    <div>
      <button id='btn' className={props.class} onClick={()=>props.onClick('btn')}>
        {props.text}
      </button>
    </div>
  );
}

class App extends Component {
  state={isOk:true}

  onClickHandler=(id)=>
  {
    var ok = !this.state.isOk;
    this.setState({isOk:ok});

    if(this.state.isOk === true)
    {
      document.getElementById(id).setAttribute('class','blue');
      document.getElementById(id).innerHTML='info';
    }
    else
    {
      document.getElementById(id).setAttribute('class','red');
      document.getElementById(id).innerHTML='error';
    }
    
  }

  render() {
    return (
      <div className="App">
        <Switch isOk={true} class={'red'} text={'error'} onClick={this.onClickHandler} />
      </div>
    );
  }
}

export default App;
