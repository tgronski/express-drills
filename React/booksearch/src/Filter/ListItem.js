import React, { Component } from 'react';
import ControlBar from './ControlBar';


class ListItem extends Component {
  render() {

    return (
      <div className="ListItem">
        <div className="ListItem__content">
          <div className="ListItem__heading">
            <div className="ListItem__title">{this.props.name}</div>
            <div className="ListItem__size">{this.props.size}</div>
          </div>
          <div className="ListItem__actions">
            <div className="ListItem__status">
              {this.props.status}
            </div>
            <ControlBar/>

          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;