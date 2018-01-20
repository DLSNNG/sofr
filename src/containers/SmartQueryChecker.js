import { connect } from 'react-redux'
import Text from '../components/Text'

const mapStateToProps = (state, ownProps) => {
    console.log(state);
  return {
    data: state.smart[ownProps.namespace]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const SmartQueryChecker = connect(
  mapStateToProps,
  mapDispatchToProps
)(Text)

export default SmartQueryChecker