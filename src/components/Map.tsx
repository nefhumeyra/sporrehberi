import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import locationsData from '../data';
import { useTranslation } from 'react-i18next';

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}

export default function Map({ filterType }: { filterType: string }) {
  const { t } = useTranslation();
  
  const filteredData = locationsData.filter(loc => {
    if (filterType === 'all') return true;
    if (filterType === 'open' && loc.type.toLowerCase() === 'açık') return true;
    if (filterType === 'closed' && loc.type.toLowerCase() === 'kapalı') return true;
    return false;
  });

  const center: [number, number] = [41.0082, 28.9784]; // Istanbul center

  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 relative z-0">
      <MapContainer center={center} zoom={11} className="h-full w-full">
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredData.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup className="custom-popup">
              <div className="w-64 max-w-xs">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-32 object-cover rounded-t-lg mb-2" 
                />
                <div className="p-2">
                  <h3 className="font-bold text-lg leading-tight mb-2">{loc.name}</h3>
                  <div className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <p><span className="font-semibold">{t('Mekan Türü')}:</span> {t('Hesapla') === 'Hesapla' ? loc.type : loc.typeEn}</p>
                    <p><span className="font-semibold">{t('İlçe')}:</span> {loc.district}</p>
                    <p><span className="font-semibold">{t('Adres')}:</span> {loc.address}</p>
                    <p><span className="font-semibold">{t('Çalışma Saatleri')}:</span> {loc.hours}</p>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
