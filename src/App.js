/* eslint-disable */

import "./App.css";
import react, { Component } from "react";
import ValidationSample from './Validation/ValidationSample';
import ScrollBox from './Scroll/ScrollBox';
import IterationSample from './map/IterationSample';


class App extends Component{
  render(){
    return(
      <div>
        <IterationSample />
      </div>
    )
  }
}




// const App = () => {
//   return (
//     <>
//       {/* <ValidationSample /> */}
//       <ScrollBox></ScrollBox>
//     </>
//   );
// };

export default App;
