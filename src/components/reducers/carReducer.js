import {ADD_FEATURE, REMOVE_FEATURE} from "../actions/carActions";
import { bindActionCreators } from "redux";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

const carReducer = (state = initialState, action) => {
  let newAddPrice = state.additionalPrice;
  switch (action.type) {
    case ADD_FEATURE: 
      let moreFeatures = [...state.car.features];
      if (!state.car.features.includes(action.payload)) {
        moreFeatures.push(action.payload);
        newAddPrice += action.payload.price;
        return {...state, car: {...state.car, features: moreFeatures}, additionalPrice: newAddPrice};
      }
      else return state;
    case REMOVE_FEATURE: 
      let lessFeatures = [...state.car.features];
      lessFeatures.splice(action.payload.idx, 1);
      newAddPrice -= action.payload.feature.price;
      return {...state, car: {...state.car, features: lessFeatures}, additionalPrice: newAddPrice};
    default: return state;
  }
}

export default carReducer;
