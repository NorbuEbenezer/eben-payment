import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9yYnU5OCIsImEiOiJjbDFnN3dpenMwbDlkM2pwM3RhaHo1OXZrIn0.q_5bkndG1DP-WDDJzH5CtQ";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [78.476681027237, 22.199166076052],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);

    console.log(coordinates);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
