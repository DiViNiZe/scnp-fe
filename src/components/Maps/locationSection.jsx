import React from 'react'

import GoogleMapReact from 'google-map-react';
import logo from "assets/img/content/scnp-white-logo.jpg";

const mapLink = 'https://www.google.com/maps/place/SCNP+%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD+%E0%B8%AA%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD+%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B9%81%E0%B8%9A%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD+%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%82%E0%B8%9B%E0%B9%82%E0%B8%A5%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%B7%E0%B8%94+%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%94%E0%B8%B5/@13.6539184,100.5070355,17z/data=!3m1!4b1!4m5!3m4!1s0x30e2a3fa8179c23d:0xaefe8ea99d0a3cce!8m2!3d13.6539184!4d100.5092242'


const AnyReactComponent = ({ text }) => <div><img onClick={ () => window.location = mapLink } style={{borderRadius: '50px' , height:'50px'}} src={logo} /></div>;


class LocationSection extends React.Component {
    static defaultProps = {
        center: {
            lat: 13.6499629,
            lng: 100.506769
        },
        zoom: 15
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '100vh', width: '100%' , paddingBottom: "30px"}}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    bootstrapURLKeys={{ key: 'AIzaSyAsIYcAP8rQmp2geMi9ZFEM-oosYz2GMN0' }}
                    yesIWantToUseGoogleMapApiInternals
                >
                    <AnyReactComponent
                        lat={13.6539321}
                        lng={100.5090834}
                        text="SCNP"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default LocationSection
