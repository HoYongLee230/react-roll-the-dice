import React from 'react';
import ReactDOM from 'react-dom';
import dice1 from '../css/dice_1.png';
import dice2 from '../css/dice_2.png';
import dice3 from '../css/dice_3.png';
import dice4 from '../css/dice_4.png';
import dice5 from '../css/dice_5.png';
import dice6 from '../css/dice_6.png';

class DiceFace extends React.Component {
  render() {
    switch (parseInt(this.props.roll)) {
      case 1:   return (<div><img src={dice1}/></div>);
      case 2:   return (<div><img src={dice2}/></div>);
      case 3:   return (<div><img src={dice3}/></div>);
      case 4:   return (<div><img src={dice4}/></div>);
      case 5:   return (<div><img src={dice5}/></div>);
      case 6:   return (<div><img src={dice6}/></div>);
      default:  return (null);
    }
  }
}

export default DiceFace;
