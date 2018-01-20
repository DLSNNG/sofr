import React from 'react'
import PropTypes from 'prop-types'

const PatientDetailView = ({ resource }) => {
  const patient = resource;
  const name = patient.name[0];
  const displayName = name.last + ', ' + name.first;
  return (
    <div className="patient-detail-view">
      <h1 className="patient-name">{displayName}</h1>
    </div>
  )
}

PatientDetailView.propTypes = {
  resource: PropTypes.object
}

export default PatientDetailView