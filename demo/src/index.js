import React, {Component} from 'react'
import {render} from 'react-dom'

import { SmartQueryLink } from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>sofr Demo</h1>
      <SmartQueryLink query={{ type: 'Patient' }}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
