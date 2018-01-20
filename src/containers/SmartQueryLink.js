import { connect } from 'react-redux'
import { fetchSmartQuery } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(fetchSmartQuery(ownProps.query, ownProps.namespace))
    }
  }
}

const SmartQueryLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default SmartQueryLink