import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  //alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  //console.log(tab.props.label)
}

class TabsExampleIconText extends Component {

  render() {
    return(
      <MuiThemeProvider>
        <Tabs>
          <Tab
            icon={<FontIcon className="material-icons">all_inclusive</FontIcon>}
            label="All"
            onActive={handleActive}
          >
            {this.props.tabAll}
          </Tab>
          <Tab
            icon={<FontIcon className="material-icons">favorite</FontIcon>}
            label="FAVORITES"
            onActive={handleActive}
          >
            {this.props.tabFavorites}
          </Tab>
          <Tab
            icon={<FontIcon className="material-icons">delete</FontIcon>}
            label="DELETED"
            onActive={handleActive}
          >
            {this.props.tabDeleted}
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    )
  }
}

TabsExampleIconText.defaultProps = {
  tabAll: <div>First Tab</div>,
  tabFavorites: <div>Second Tab</div>,
  tabDeleted: <div>Third Tab</div>,
};

export default TabsExampleIconText;