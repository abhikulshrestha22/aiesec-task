import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 13.06,
      lng: 80.25
    },
    zoom: 17
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBhM5eZ5MqgK-vBfwinABbR_hQ31c9S0FQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={13.0669044}
            lng={80.2597652}
            text={''}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;