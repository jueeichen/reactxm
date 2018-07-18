import {combineReducers} from 'redux';

const initLogin ={
  username: '',
  password: ''
};

function loginReduce(preState = initLogin, action) {
  switch (action.type) {

    default:
      return preState
  }
}

const initYyy = 0;

function yyy(preState = initYyy, action) {
  switch (action.type) {
    default:
      return preState
  }
}

export default combineReducers({
  loginReduce,
  yyy
})