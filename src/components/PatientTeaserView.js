import React from 'react'
import PropTypes from 'prop-types'

const PatientTeaserView = ({ resource }) => {
  const patient = resource;
  const name = patient.name[0];
  const displayName = name.last + ', ' + name.first;
  return (
    <span className="patient-teaser-view">{displayName}</span>
  )
}

PatientTeaserView.propTypes = {
  resource: PropTypes.object
}

export default PatientTeaserView