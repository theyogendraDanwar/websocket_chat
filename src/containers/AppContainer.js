import { connect } from 'react-redux'
import App from '../components/App/App'

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(actionTypes.simpleAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);