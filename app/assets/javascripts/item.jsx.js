import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {RaisedButton, TextField, AppBar, Chip} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

injectTapEventPlugin();

var Index = React.createClass({
  getInitialState: function() {
    return {message: ''};
  },
  send: function(e) {
    e.preventDefault();
    this.setState({message: '', sentMessage: this.state.message.trim()});
  },
  handleChange: function(e) {
    this.setState({message: e.target.value});
  },

  render: function() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            <h1>Material UI テスト</h1>
            <form onSubmit={this.send}>
              <TextField hintText="テキスト入力" floatingLabelText="ここに入力して送信" value={this.state.message} onChange={this.handleChange}/>
              <RaisedButton label="送信" primary={true} onTouchTap={this.send}></RaisedButton>
              <Chip>
                {this.state.sentMessage}
              </Chip>
            </form>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
});

window.onload = function() {
  ReactDOM.render(
    <Index/>, document.getElementById("root"));
};
