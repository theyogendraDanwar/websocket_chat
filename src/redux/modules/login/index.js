import _merge from '../../../utils/_merge'

export const LOGIN_INITIAL = 'demo/login/LOAD';
export const USER_MESSAGE_LOG = 'demo/chat/CHAT_INTIAL_LOAD';
export const LOGIN_SUCCESS = 'demo/login/LOAD_SUCCESS';
export const LOGIN_FAIL = 'demo/login/LOAD_SUCCESS';
export const UPDATE_EMAIL = 'demo/login/UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'demo/login/UPDATE_PASSWORD';
export const CHECK_LOGIN_CREDENTIALS = 'demo/login/CHECK_LOGIN_CREDENTIALS';
export const SIGN_OUT = 'demo/login/SIGN_OUT';
export const UPDATE_MESSAGE_LOG = 'demo/login/UPDATE_MESSAGE_LOG';



const initialState = {
  isLoggedIn: false,
  user: null,
  pass: null,
  userMessageLog: [],
  id: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INITIAL:
      return {
        ...state,
        isLoggedIn: true,
      }
    case UPDATE_EMAIL: {
      return {
        ...state,
        user: action.payload
      }
    }
    case UPDATE_PASSWORD: {
      return {
        ...state,
        pass: action.payload
      }
    }
    case USER_MESSAGE_LOG:
      const exist_user = state.userMessageLog ? state.userMessageLog.filter((item) => {
        const singleItem = Object.assign([], item)
        const user = [...Object.keys(singleItem)]
        return user[0] === state.user
      }) : []
      const ids = exist_user.length <= 0 ? [{ [action.payload]: [] }] : []
      return {
        ...state,
        userMessageLog: [
          ..._merge(state.userMessageLog, [...state.userMessageLog, ...ids])
        ]
      }
    case UPDATE_MESSAGE_LOG:
      const log = state.userMessageLog.map((item) => {
        const singleItem = Object.assign([], item)
        const user = [...Object.keys(singleItem)]
        if (state.user === user[0])
          return { [user[0]]: action.payload }
        else return item
      })
      return {
        ...state,
        userMessageLog: [
          ..._merge(state.userMessageLog, [...state.userMessageLog, ...log])
        ]
      }
    case CHECK_LOGIN_CREDENTIALS: {
      let found = state.id.filter((item) => {
        return item.user === state.user
      });
      found = found.length > 0 ? [] : [{ "user": state.user }]
      return {
        ...state,
        isLoggedIn: true,
        id: [
          ...state.id,
          ...found
        ],
      }
    }
    case SIGN_OUT: {
      return {
        ...state,
        isLoggedIn: false,
      }
    }
    default:
      return state
  }
}


export const updatePassword = (val) => {
  return dispatch => {
    dispatch({ type: UPDATE_PASSWORD, payload: val })
  }
}

export const updateUsername = (val) => {
  return dispatch => {
    dispatch({ type: UPDATE_EMAIL, payload: val })
  }
}

export const signOut = () => {
  return (dispatch, getState) => {
    const { messages } = getState().chat
    dispatch({ type: UPDATE_MESSAGE_LOG, payload: messages })
    dispatch({ type: SIGN_OUT })
  }
}

export const checkLoginCredentials = () => {
  return (dispatch, getState) => {
    dispatch({ type: CHECK_LOGIN_CREDENTIALS })
    dispatch({ type: USER_MESSAGE_LOG, payload: getState().login.user })
  }
}
