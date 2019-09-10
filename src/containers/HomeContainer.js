import { connect } from 'react-redux';
import Home from '../components/Home/Home.js'
import * as actionTypes from '../redux/modules/chat'

const mapStateToProps = (state) => ({
  input: state.chat.input,
  messages: state.chat.messages,
  isLoggedIn: state.login.isLoggedIn,
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(actionTypes.load()),
  updateInput: (e) => dispatch(actionTypes.updateInput(e)),
  sendMessageToSocket: (e) =>  dispatch(actionTypes.sendMessageToSocket(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);