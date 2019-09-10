
export const CHAT_UPDATE_INPUT = 'demo/chat/CHAT_UPDATE_INPUT';
export const CHAT_DISPATCH_SOCKET = 'demo/chat/CHAT_DISPATCH_SOCKET'
export const CHAT_MESSAGES_INITIAL = 'demo/chat/CHAT_MESSAGES_INITIAL'

const initialState = {
  socket: null,
  input: null,
  messages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_UPDATE_INPUT:
      return {
        ...state,
        input: action.payload
      }
    case CHAT_MESSAGES_INITIAL: {
      const messages = action.payload.map((item, index) => {
        const user = [...Object.keys(item)]
        return item[user[0]]
      }).flat('Infinity')
      return {
        ...state,
        messages: [
          ...messages
        ]
      }
    }
    case CHAT_DISPATCH_SOCKET:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]
      }
    default:
      return state
  }
}


export const load = () => {
  return (dispatch, getState) => {
    const { userMessageLog, user } = getState().login;
    const cuser = userMessageLog ? userMessageLog.filter((item) => {
      const singleItem = Object.keys(item)
      return user === singleItem[0]
    }) : ''
    dispatch({ type: CHAT_MESSAGES_INITIAL, payload: cuser })
  }
}

export const updateInput = (e) => {
  return dispatch => {
    dispatch({ type: CHAT_UPDATE_INPUT, payload: e })
  }
}

export const sendMessageToSocket = (e) => {
  return (dispatch, getState) => {
    const { input } = getState().chat;
    if (input) {
      dispatch({
        type: CHAT_DISPATCH_SOCKET,
        payload: input,
        socket: {
          send: true
        }
      })
      dispatch(updateInput(''))
    }
  }
}