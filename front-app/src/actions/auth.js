import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  
} from '../actions/ActionType';
import { setAlert } from './alert';


export function register  (
 el

)  {
  return (dispatch) => 
  
axios.post('https://my-api-expery.herokuapp.com/user/register',el).then(res=>{
  dispatch({
    type: REGISTER_SUCCESS,
    payload: res.data
  });
  
}).catch (err=>{
  // const error = err.response.data.msg; 
  // error && dispatch(alert('password wrong'));
  // dispatch({
  //   type: REGISTER_FAIL
  // });
  alert(err)
})}

