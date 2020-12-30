import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
    
  } from '../actions/ActionType';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  };
  export default function  (state = initialState, action)  {
    const { type, payload } = action;
    switch (type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: true
        };
  
      
      case REGISTER_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null
        };
  

      default:
        return state;
    }
  };
  
