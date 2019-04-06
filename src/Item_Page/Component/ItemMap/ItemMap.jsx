import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 37.5399238,
			lng: 127.05075719999999
		},
		zoom: 15
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div>
				<div style={{ height: '250px', width: '280px' }}>
					{/* <div id="map"> */}
					<GoogleMapReact
						bootstrapURLKeys={{ key: 'AIzaSyDQ6w-m_-IigbaK1rRGMXr4kqJqmAJpBMc' }}
						defaultCenter={this.props.center}
						defaultZoom={this.props.zoom}
					>
						<AnyReactComponent lat={37.5399238} lng={127.05075719999999} text="★" />
					</GoogleMapReact>
				</div>
				<div>
					<p>167 W 74th</p>
					<p>St New York, NY 10023</p>
					<p> b/t Columbus Ave & Amsterdam Ave Upper West Side</p>
					<p> Phone number (212) 874-6080</p>
				</div>
			</div>
		);
	}
}

export default SimpleMap;
