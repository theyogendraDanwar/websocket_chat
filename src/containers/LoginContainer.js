import Login from '../components/Login/Login.js'
import { connect } from 'react-redux'
import * as actionTypes from '../redux/modules/login'


const mapStateToProps = (state) => ({
  login: state.login,
  from: state.router.location.state || { pathname: "/home" }
})

const mapDispatchToProps = (dispatch, props) => ({
  updateEmail: (e) => { dispatch(actionTypes.updateUsername(e)) },
  updatePassword: (e) => dispatch(actionTypes.updatePassword(e)),
  checkCredentials: () => { dispatch(actionTypes.checkLoginCredentials()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)


