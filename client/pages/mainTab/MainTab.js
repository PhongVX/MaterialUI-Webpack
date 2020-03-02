import React, { Component } from 'react'
import { connect } from 'react-redux'
        
import Employees from '../employees/Employees'

import { Tabs, Button } from 'antd';

import {randomId} from '../../commons/utils'
import  * as tabPanelAction from '../../actions/tabPanelAction'

import 'antd/dist/antd.css';
const { TabPane } = Tabs;

import {TABS} from '../../constants/tabConstants'

class MainTab extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
    ];
    this.state = {
      activeKey: '',
      panes,
    };
  }

  onChange = activeKey => {
    let {updateTabPaneActiveKey} = this.props
    updateTabPaneActiveKey(activeKey)
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  remove = targetKey => {
    let {deleteTabPane} = this.props;
    deleteTabPane(targetKey)
  };

  addNewEmployeeTab = ()=>{ 
    let id = randomId()
    let {createTabPane} = this.props
    createTabPane({ title: `Employee${id}`, content:  <Employees key={id} componentId={id}/>, key: id })
  }

  render() {
    let {activeTabPaneKey} = this.props
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.addNewEmployeeTab}>Add New Employee Tab</Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={activeTabPaneKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.props.listTabPane.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  let listTabPane = !!state.tabPane.listTabPane[TABS.mainTab]?state.tabPane.listTabPane[TABS.mainTab].list:[]
  return {
      listTabPane:listTabPane,
      activeTabPaneKey: !!state.tabPane.listTabPane[TABS.mainTab]? state.tabPane.listTabPane[TABS.mainTab].activeKey: ''
  }
}

const mapDispatchToProps = (dispatch,  ownProps) => {
  return {
      createTabPane:(payload)=>dispatch(tabPanelAction.createTabPane(TABS.mainTab, payload)), 
      deleteTabPane: (targetKey) => dispatch(tabPanelAction.deleteTabPane(TABS.mainTab, targetKey)),
      updateTabPaneActiveKey:(activeKey)=>dispatch(tabPanelAction.updateTabPaneActiveKey(TABS.mainTab, activeKey))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainTab)





