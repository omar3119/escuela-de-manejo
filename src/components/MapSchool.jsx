import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const CENTER = { lat: 8.9936, lng: -79.5197 }; // Panamá City

const containerStyle = {
  width: '100%',
  height: '100%',
};

export default function MapaEscuela() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={CENTER}
      zoom={15}
      className="border"
    >
      <Marker position={CENTER} />
    </GoogleMap>
  );
}