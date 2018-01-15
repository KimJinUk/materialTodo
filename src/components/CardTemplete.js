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
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
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
              {this.props.isDeleted?
                <FlatButton label="Restore" onClick={this.props.deleteFunc} />:<FlatButton label="Delete" onClick={this.props.deleteFunc} />
              }
            </CardHeader>
            <CardTitle title={this.props.memoTitle} subtitle={this.props.timeStamp.slice(0,-20)} expandable={true}>
              <FlatButton label="Delete" onClick={this.props.deleteFunc} />
            </CardTitle>
            <CardText expandable={true}>
              {this.props.memoBody}
            </CardText>
          </Card>
      </MuiThemeProvider>
    );
  }
}