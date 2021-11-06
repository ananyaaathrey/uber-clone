import React from 'react';
import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYW5hbnlhYWF0aHJleSIsImEiOiJja3ZuaWs3cjkxOGRtMndrbDFjdjh3bHU2In0.2EaP4dAjbZkKjK79vuhEWw';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });
  return <Wrapper id='map'></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
