import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {Tabs, TabList, Tab, DragTabList, DragTab, PanelList, Panel, ExtraButton} from 'react-tabtab';
// import {simpleSwitch} from 'react-tabtab/lib/helpers/move';
// import AddIcon from '@material-ui/icons/Add';
// import { 
//     Paper,
//     Button
// } from '@material-ui/core';         
import Employees from '../employees/Employees'
// class Products extends Component {
//     constructor(props) {
//         super(props);
//         const tabs = [{title: 'New Tab', content: <Employees key={1}  componentId={1}/>}, {title: 'New Tab', content: <Employees key={2} componentId={2}/>}];
//         const tabTemplate = [];
//         const panelTemplate = [];
//         tabs.forEach((tab, i) => {
//             const closable = tabs.length > 1;
//             tabTemplate.push(<Tab key={i} closable={closable}>{tab.title}</Tab>);
//             panelTemplate.push(<Panel key={i}>{tab.content}</Panel>);
//           })
//         this.state = {
//           tabs,
//           activeIndex: 0,
//           tabTemplate,
//           panelTemplate
//         };
//       }
    
//       handleExtraButton = () => {
//         const {tabs} = this.state;
//         const newTabs = [...tabs, {title: 'New Tab', content: 'New Content'}];
//         this.setState({tabs: newTabs, activeIndex: newTabs.length - 1});
//       }
    
//       handleTabChange = (index) => {
//         this.setState({activeIndex: index});
//       }
    
//       handleEdit = ({type, index}) => {
//         this.setState((state) => {
//           let {tabs, activeIndex} = state;
//           if (type === 'delete') {
//             tabs = [...tabs.slice(0, index), ...tabs.slice(index + 1)];
//           }
//           if (index - 1 >= 0) {
//             activeIndex = index - 1;
//           } else {
//             activeIndex = 0;
//           }
//           return {tabs, activeIndex};
//         });
//       }
    
//       render() {
//         const {tabs, activeIndex} = this.state;
        
    
//         return (
    
//           <Tabs onTabEdit={this.handleEdit}
//                 onTabChange={this.handleTabChange}
//                 activeIndex={activeIndex}
//                 customStyle={this.props.customStyle}
//                 ExtraButton={
//                   <ExtraButton onClick={this.handleExtraButton}>
                    
//                     <Button>
//                          <AddIcon/>
//                     </Button>
//                   </ExtraButton>
//                 }>
//             <TabList>
//               {this.state.tabTemplate}
//             </TabList>
//             <PanelList>
//               {this.state.panelTemplate}
//             </PanelList>
//           </Tabs>
//         // <> 
//         //     <Employees key={1} componentId={1}/>
//         //     <Employees key={2}  componentId={2}/>
//         // </>
      
//         )
//       }
// }

function randomId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

import { Tabs, Button } from 'antd';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: <Employees key={1} componentId={1}/>, key: '1' },
      { title: 'Tab 2', content: <Employees key={2}  componentId={2}/>, key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  addNewEmployeeTab = ()=>{ 
    const { panes } = this.state;
    // const activeKey = `newTab${this.newTabIndex++}`;
    let id = randomId()
    console.log(id)
   
    panes.push({ title: 'New Tab', content:  <Employees key={id} componentId={id}/>, key: id });
    this.setState({ panes, activeKey:id });
  }
  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.addNewEmployeeTab}>Add New Employee Tab</Button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>ADD</Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default connect()(Products)