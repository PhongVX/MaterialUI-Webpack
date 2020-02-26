import * as tabPaneConstants from '../constants/tabPaneConstants'

export const getTabPane = (componentId)=>{
    return{
        type: tabPaneConstants.GET_TAB_PANE,
        payload:{
            componentId
        }
    }
}

export const createTabPane = (componentId, data)=>{
    return{
        type: tabPaneConstants.CREATE_TAB_PANE,
        payload:{
            componentId,
            data
        }
    }
}

export const deleteTabPane = (componentId, targetKey)=>{
    return{
        type: tabPaneConstants.DELETE_TAB_PANE,
        payload:{
            componentId,
            targetKey
        }
    }
}

export const updateTabPaneActiveKey = (activeKey)=>{
    return{
        type: tabPaneConstants.UPDATE_TAB_PANE_ACTIVE_KEY,
        payload:{
            activeKey
        }
    }
}
