import React from "react";
//import { GoogleMap } from "@react-google-maps/api";
import { MapContext } from "@react-google-maps/api";

// https://stackoverflow.com/questions/65616329/overlapping-markers-spiderfier-using-react-google-maps-api

class Spiderfy extends React.Component {
  constructor(props) {
    super(props);
    const oms = require(`npm-overlapping-marker-spiderfier/lib/oms.min`);

    this.oms = new oms.OverlappingMarkerSpiderfier(
      MapContext._currentValue, // 1*
      {}
    );

    this.markerNodeMounted = this.markerNodeMounted.bind(this);
  }

  async markerNodeMounted(ref) {
    setTimeout(() => { //3*
      this.oms.addMarker(ref.marker); // 2*
      window.google.maps.event.addListener(ref.marker, "spider_click", e => {
        if (this.props.onSpiderClick) this.props.onSpiderClick(e);
      });
    }, 2000);
  }

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, { ref: this.markerNodeMounted })
    );
  }
}

export default Spiderfy;