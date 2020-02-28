import * as tabPaneConstants from '../constants/tabPaneConstants'

const initialState = {
    listTabPane:{ 
        
    },
    activeKey:''
}

const tabPaneReducer = (state = initialState, action)=>{
    switch(action.type){
        case tabPaneConstants.GET_TAB_PANE:{ 
            const {componentId} = action.payload
            return state.listTabPane[componentId]
        }
        case tabPaneConstants.CREATE_TAB_PANE:{
            const {componentId, data} = action.payload
            let oldListPane = !!state.listTabPane[componentId]?state.listTabPane[componentId].list:[]
            return {
                ...state,
                listTabPane: {
                    ...state.listTabPane,
                    [componentId]:{
                        activeKey:data.key,
                        list:[...oldListPane, data]
                    }
                }
            }
        }
        case tabPaneConstants.DELETE_TAB_PANE:{
            const {componentId, targetKey} = action.payload
            let lastIndex;
            let activeKey = state.listTabPane[componentId].activeKey
            state.listTabPane[componentId].list.forEach((pane, i) => {
              if (pane.key === targetKey) {
                lastIndex = i - 1;
              }
            });

            const tabs = state.listTabPane[componentId].list.filter(pane => pane.key !== targetKey);
            if (tabs.length && activeKey === targetKey) {
              if (lastIndex >= 0) {
                activeKey = tabs[lastIndex].key;
              } else {
                activeKey = tabs[0].key;
              }
            }
            return {
                ...state,
                listTabPane: {
                    ...state.listTabPane,
                    [componentId]:{ 
                        activeKey: activeKey,
                        list: tabs
                    }
                }
            }
        }
        case tabPaneConstants.CLEAR_TAB_PANE:{
            const {componentId} = action.payload
            return {
                ...state,
                listTabPane: {
                    ...state.listTabPane,
                    [componentId]:[]
                }
            }
        }
        case tabPaneConstants.UPDATE_TAB_PANE_ACTIVE_KEY:{
            const {componentId, activeKey} = action.payload
            return {
                ...state,
                listTabPane: {
                    ...state.listTabPane,
                    [componentId]:{
                        activeKey:activeKey,
                        list:state.listTabPane[componentId].list
                    }
                }
            }
        }
        default:
            return state
    }
}

export default tabPaneReducer