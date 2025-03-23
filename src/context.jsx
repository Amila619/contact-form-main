import { createContext, useReducer } from 'react';

export const Context = createContext();

const initialState = {
    fname: '',
    lname: '',
    email: '',
    qType: '',
    message: '',
    consent: false,
    errors: {
      fname: '',
      lname: '',
      email: '',
      qType: '',
      message: '',
      consent: ''
    },
    validated: false
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "setFname":
        return {
          ...state,
          fname: action.payload.input
        };
  
      case "setLname":
        return {
          ...state,
          lname: action.payload.input
        };
  
      case "setEmail":
        return {
          ...state,
          email: action.payload.input
        };
  
      case "setQType":
        return {
          ...state,
          qType: action.payload.input
        };
  
      case "setMessage":
        return {
          ...state,
          message: action.payload.input
        };
  
      case "setConsent":
        return {
          ...state,
          consent: action.payload.input
        };
  
      case "setErrors":
        return {
          ...state,
          errors: action.payload.input
        };
  
      case "setValidated":
        return {
          ...state,
          validated: action.payload.input
        };
  
      default:
        return state
  
    }
  }
  

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>

}

export default Provider;