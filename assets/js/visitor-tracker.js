// Visitor Tracking Script - Display historical visitor locations on map
(function() {
  'use strict';

  // Initialize visitor map and tracking
  function initializeVisitorMap() {
    // Record current visitor location in localStorage history
    recordVisitorLocation();
    // Display map with historical visitors
    displayVisitorMap();
  }

  // Record current visitor's location in browser localStorage
  function recordVisitorLocation() {
    const apiUrl = 'https://get.geojs.io/geolocation/ip/geo.json';
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.latitude && data.longitude) {
          // Store visitor location in localStorage
          let visitors = localStorage.getItem('visitorLocations');
          visitors = visitors ? JSON.parse(visitors) : [];
          
          // Add current visitor
          visitors.push({
            lat: data.latitude,
            lon: data.longitude,
            city: data.city || 'Unknown',
            country: data.country || 'Unknown',
            timestamp: new Date().getTime()
          });
          
          // Keep only last 50 visitors to avoid storage limits
          if (visitors.length > 50) {
            visitors = visitors.slice(-50);
          }
          
          localStorage.setItem('visitorLocations', JSON.stringify(visitors));
        }
      })
      .catch(error => {
        console.error('Error recording visitor location:', error);
      });
  }

  // Display map with historical visitor locations
  function displayVisitorMap() {
    const mapContainer = document.getElementById('visitor-map');
    if (!mapContainer) return;

    // Initialize map with world view
    const map = L.map('visitor-map', {
      center: [20, 0],
      zoom: 2,
      dragging: true,
      scrollWheelZoom: false
    });

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);

    // Get historical visitor locations from localStorage
    let visitors = localStorage.getItem('visitorLocations');
    visitors = visitors ? JSON.parse(visitors) : [];

    // Plot each visitor location on map
    if (visitors.length > 0) {
      visitors.forEach((visitor, index) => {
        // Color gradient from blue (older) to red (newer)
        const ratio = index / Math.max(visitors.length - 1, 1);
        const hue = (1 - ratio) * 240; // Blue to Red
        const color = `hsl(${hue}, 100%, 50%)`;

        L.circleMarker([visitor.lat, visitor.lon], {
          radius: 4 + (ratio * 4),
          fillColor: color,
          color: color,
          weight: 1,
          opacity: 0.7,
          fillOpacity: 0.6
        }).bindPopup(`${visitor.city}, ${visitor.country}`).addTo(map);
      });
    } else {
      // Show some demo locations if no history
      const demoLocations = [
        { name: 'Beijing, China', lat: 39.90, lon: 116.41, color: '#0088ff' },
        { name: 'Shanghai, China', lat: 31.23, lon: 121.47, color: '#00dd44' },
        { name: 'Xi\'an, China', lat: 34.34, lon: 109.34, color: '#ff4444' },
        { name: 'London, UK', lat: 51.51, lon: -0.13, color: '#ff8800' },
        { name: 'San Francisco, USA', lat: 37.77, lon: -122.41, color: '#dd00ff' },
      ];

      demoLocations.forEach(loc => {
        L.circleMarker([loc.lat, loc.lon], {
          radius: 5,
          fillColor: loc.color,
          color: loc.color,
          weight: 1,
          opacity: 0.6,
          fillOpacity: 0.5
        }).bindPopup(loc.name).addTo(map);
      });
    }
  }

  // Wait for DOM to be ready, then initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeVisitorMap);
  } else {
    initializeVisitorMap();
  }
})();
