import React from 'react';
import ReactGA from 'react-ga4';
import HomePageLayOut from './Layout/HomePageLayOut/HomePageLayOut.jsx';
import RouteComponent from './RouteComponents/RouteComponent.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'leaflet/dist/leaflet.css';

ReactGA.initialize('Your-Measurement-ID');

function App() {
  return (
      <div>
        <RouteComponent />
      </div>
  );
}
export default App;
