import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  marginRight: 20,
  position: 'fixed',
  bottom: '20px',
  right: '20px'
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatingActionButtonExampleSimple = () => (
  <MuiThemeProvider>
    <div>
      <FloatingActionButton style={style}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </MuiThemeProvider>
);

export default FloatingActionButtonExampleSimple;