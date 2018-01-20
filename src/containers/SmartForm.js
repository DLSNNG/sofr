import { connect } from 'react-redux'
import { fetchSmartQuery } from '../actions'
import SmartFormWrapper from '../components/SmartFormWrapper'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (query) => {
      dispatch(fetchSmartQuery(query, ownProps.namespace))
    }
  }
}

const SmartForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartFormWrapper)

export default SmartForm