"use client"
import { FC, useEffect, useState } from "react"
import { LAB_LOCATIONS_WITH_COORDS } from "@/constants/yandex-map";




interface YandexMapCustomProps {
  activeLabId: string;
  onLabSelect: (labId: string) => void;
}

export const YandexMapCustom: FC<YandexMapCustomProps> = ({ activeLabId, onLabSelect }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [activeData, setActiveData] = useState<string>(activeLabId);



   

  useEffect(() => {
    // Agar tashqaridan activeLabId yangilansa
    if (activeLabId !== undefined && activeLabId !== activeData) {
      setActiveData(activeLabId);
    }
  }, [activeLabId]);

  useEffect(() => {
    const handleScroll = () => {
      const mapElement = document.getElementById('mapTUR');
      if (mapElement && mapElement.getBoundingClientRect().top < window.innerHeight) {
        if (!mapLoaded) {
          loadYandexMap();
          setMapLoaded(true);
        }
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mapLoaded]);

  // Add placemarkers to the map
  const addPlacemarkers = (map: any) => {
    LAB_LOCATIONS_WITH_COORDS.forEach((lab) => {
      if (!lab.coordinates) return;

      const placemark = new window.ymaps.Placemark(
        lab.coordinates,
        {
          hintContent: lab.title,
          balloonContent: `
            <div class="lab-balloon">
              <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 8px;">${lab.title}</h3>
              <p style="margin-bottom: 5px;">${lab.address}</p>
              <p style="margin-bottom: 5px; white-space: pre-line;">${lab.schedule}</p>
              <p style="font-weight: bold;">${lab.openTime}</p>
            </div>
          `
        },
        {
          iconColor: lab.id === activeData ? '#FF0000' : '#1E98FF' // Red if active, blue otherwise
        }
      );

      // Add click event to set active data
      placemark.events.add('click', () => {
        onLabSelect(lab.id)
      });

      map.geoObjects.add(placemark);
    });
  };

  const loadYandexMap = () => {
    if (typeof window !== "undefined" && !document.getElementById("yandex-map-script")) {
      const script = document.createElement("script");
      script.id = "yandex-map-script";
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=5771415d-001f-4699-b102-0fb2f6af965a&lang=ru_RU`;
      script.async = true;
      script.defer = true;
      
      document.body.appendChild(script);
      
      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(() => {
            const map = new window.ymaps.Map("mapTUR", {
              center: [41.3112, 69.2797],
              zoom: 11,
              controls: ['zoomControl'] 
            });
            
            addPlacemarkers(map);
            setMapInstance(map);

            if (activeData) {
              const activeLab = LAB_LOCATIONS_WITH_COORDS.find(lab => lab.id === activeData);
              if (activeLab && activeLab.coordinates) {
                map.setCenter(activeLab.coordinates, 15, { duration: 500 });
              }
            }
          });
        }
      };
      
      script.onerror = () => {
        console.error("Yandex Maps API yuklanishida xatolik yuz berdi");
      };
    } else if (window.ymaps && !mapInstance) {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map("mapTUR", {
          center: [41.3112, 69.2797],
          zoom: 11,
          controls: ['zoomControl']
        });
        
        addPlacemarkers(map);
        setMapInstance(map);
        
        // Agar aktiv lab bo'lsa, uni markazga qo'yamiz
        if (activeData) {
          const activeLab = LAB_LOCATIONS_WITH_COORDS.find(lab => lab.id === activeData);
          if (activeLab && activeLab.coordinates) {
            map.setCenter(activeLab.coordinates, 15, { duration: 500 });
          }
        }
      });
    }
  };
  
  // Load Yandex Maps API when the component is mounted
  useEffect(() => {
    if (!mapLoaded) {
      loadYandexMap();
      setMapLoaded(true);
    }
  }, [mapLoaded]);
  
  // Update placemarkers when activeData changes
  useEffect(() => {
    if (mapInstance && window.ymaps) {
      mapInstance.geoObjects.removeAll();
      addPlacemarkers(mapInstance);
      
      if (activeData) {
        const activeLab = LAB_LOCATIONS_WITH_COORDS.find(lab => lab.id === activeData);
        if (activeLab && activeLab.coordinates) {
          mapInstance.setCenter(activeLab.coordinates, 15, { duration: 500 });
        }
      }
    }
  }, [activeData, mapInstance]);
  
  return (
    <div className="w-full h-full">
      <div id="mapTUR" className="w-full h-full rounded-lg"></div>
    </div>
  );
};

