import configureStore from './configureStore'
import Smart from './containers/Smart'
import SmartDev from './containers/SmartDev'
import SmartData from './containers/SmartData'
import SmartForm from './containers/SmartForm'
import SmartQuery from './containers/SmartQuery'
import SmartDevQuery from './containers/SmartDevQuery'
import SmartQueryLink from './containers/SmartQueryLink'
import DataViewer from './components/DataViewer'
import Resource from './components/Resource'
import ResourceList from './components/ResourceList'
import ResourceDataViewer from './components/ResourceDataViewer'

export {configureStore}
export {Smart}
export {SmartDev}
export {SmartData}
export {SmartForm}
export {SmartQuery}
export {SmartDevQuery}
export {SmartQueryLink}
export {DataViewer}
export {Resource}
export {ResourceList}
export {ResourceDataViewer}

export default {
    configureStore: configureStore,
    Smart: Smart,
    SmartDev: SmartDev,
    SmartData: SmartData,
    SmartForm: SmartForm,
    SmartQuery: SmartQuery,
    SmartDevQuery: SmartDevQuery,
    SmartQueryLink: SmartQueryLink,
    DataViewer: DataViewer,
    Resource: Resource,
    ResourceList: ResourceList,
    ResourceDataViewer: ResourceDataViewer
}