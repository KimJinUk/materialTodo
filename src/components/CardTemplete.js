import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Motion, spring} from 'react-motion';

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      open: false
    };

    this.handleExpandChange = this.handleExpandChange.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  };

  handleMouseDown() {
    this.setState({open: !this.state.open});
  };

  handleTouchStart(e) {
    console.log(e)
    //e.preventDefault();
    this.handleMouseDown
  };

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
          {({x}) =>
            <Card 
              style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} 
              expanded={this.state.expanded} 
              onExpandChange={this.handleExpandChange}
              onTouchStart={this.handleTouchStart}
              onMouseDown={this.handleMouseDown}
            >
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
        }
        </Motion>
      </div>        
      </MuiThemeProvider>
    );
  }
}