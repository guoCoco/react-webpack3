import React from 'react';
import '../../public/css/index.pcss'
import Seconds from '../common/seconds.jsx';

const Index = () => {
    return <Seconds title='商城'/>
}

// class Index extends React.Component {
//  constructor(props){
//      super(props);
//      this.state = {seconds: 0}
//  }

//  tick(){
//      this.setState(prevState =>({
//          seconds:prevState.seconds + 1
//      }));
//  }

//  componentDidMount(){
//      this.interval = setInterval(() => this.tick(), 1000);
//  }

//  componentWillUnmount(){
//      clearInterval(this.interval);
//  }

//  render(){
//      return (
//              <div className="cont">
//                 <div className="top">
//                     这是首页222222
//                     <i className='logo'/>
//                 </div>
//                 <div className="bottom">
//                     Seconds: {this.state.seconds}
//                 </div>
//             </div>
//             )
//  }

    
// }

export default Index;