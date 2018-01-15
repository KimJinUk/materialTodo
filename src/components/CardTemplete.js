import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.handleExpandChange = this.handleExpandChange.bind(this)
    this.handleExpand = this.handleExpand.bind(this)
    this.handleReduce = this.handleReduce.bind(this)
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  };

  handleExpand() {
    this.setState({expanded: true});
  };

  handleReduce() {
    this.setState({expanded: false});
  };

  render() {
    return (
      <MuiThemeProvider>
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
            <CardHeader
              title={this.props.memoTitle}
              subtitle={this.props.timeStamp.slice(0,-20)}            
              showExpandableButton={true}
            >
                
                <FlatButton label="Expand" onClick={this.handleExpand} />
                <FlatButton label="Reduce" onClick={this.handleReduce} />             
            </CardHeader>
            <CardTitle title={this.props.memoTitle} subtitle={this.props.timeStamp.slice(0,-20)} expandable={true} />
            <CardText expandable={true}>
              {this.props.memoBody}
            </CardText>
          </Card>
      </MuiThemeProvider>
    );
  }
}