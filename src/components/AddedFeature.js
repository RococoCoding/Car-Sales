import React from 'react';
import {connect} from "react-redux";
import {removeFeature} from './actions/carActions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>{props.removeFeature(props)}} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(()=>{return{}}, {removeFeature})(AddedFeature);
