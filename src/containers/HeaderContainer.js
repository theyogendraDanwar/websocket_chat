import { connect } from 'react-redux';
import Header from '../components/Header/Header.js'
import {withRouter} from 'react-router-dom'
import * as actionTypes from '../redux/modules/login'

const mapStateToProps = (state,props) => ({
  ...state,
  isLoggedIn: state.login.isLoggedIn,
})


const mapDispatchToProps = (dispatch,{history,...props}) => ({
  signout: () => {
    dispatch(actionTypes.signOut())
    history.push('/')
  },
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));