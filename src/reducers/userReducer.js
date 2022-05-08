import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  usersList: [],
  listPage: 1,
  maxPages: null,
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  console.log({action},"action")
  switch (action.type) {
    case ActionTypes.GET_USERS_LIST: {
      
      return {
        ...state,
        isLoading: true,
      };
    }
    
    case ActionTypes.GET_USERS_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        usersList: action.payload
      };
    }
    
    // case ActionTypes.INCREMENT_PAGE_SUCCESS: {
    //   return {
    //     ...state,
    //     listPage: state.listPage + action.payload,
    //   };
    // }
  
    default: {
      return state;
    }
  }
};

export default userReducer;
