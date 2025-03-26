---
layout: default
title: Travel
---

<div class="travel-container">
    <h3>Places I've Been</h3>
    <div id="map" style="width: 100%; height: 600px;"></div>
</div>

<script>
let map;
let markers = [];

const locations = [
    {
        position: { lat: 38.6270, lng: -90.1994 },
        title: "St. Louis, Missouri",
        description: "",
        dates: "2003-2006",
        details: "Birthplace"
    },
    {
        position: { lat: 39.1653, lng: -86.5264 },
        title: "Bloomington, Indiana",
        description: "",
        dates: "2006-2021",
        details: "Hometown. So much corn. "
    },
    {
        position: { lat: 51.7520, lng: -1.2577 },
        title: "Oxford, England",
        description: "Living Abroad",
        dates: "2013",
        details: "Spent 8 months living abroad in Oxford."
    },
    {
        position: { lat: 42.3736, lng: -71.1097 },
        title: "Cambridge, Massachusetts",
        description: "",
        dates: "2021-2025",
        details: "Harvard University (Undergraduate)"
    },
    {
        position: { lat: 41.8781, lng: -87.6298 },
        title: "Chicago, Illinois",
        description: "",
        dates: "2024",
        details: "Jump Trading spring internship"
    },
    {
        position: { lat: 40.7128, lng: -74.0060 },
        title: "New York City, New York",
        description: "",
        dates: "2022, 2023, 2024",
        details: "Winter and summer internships at Meta, Five Rings, Hudson River Trading in Long Island City, Midtown and FiDi NYC."
    },
    {
        position: { lat: 49.2827, lng: -123.1207 },
        title: "Vancouver, Canada",
        description: "",
        dates: "December 2024",
        details: "NeurIPS Conference"
    },
    {
        position: { lat: 40.0379, lng: -76.3055 },
        title: "Lancaster, Pennsylvania",
        description: "",
        dates: "October 2024",
        details: "Voice of the Apostles Conference"
    },
    {
        position: { lat: 21.3069, lng: -157.8583 },
        title: "Kona, Hawaii",
        description: "Vacation",
        dates: "2024",
        details: "Eating pizza in a hot tub with friends on vacation."
    },
    {
        position: { lat: 18.1096, lng: -77.2975 },
        title: "Jamaica",
        description: "",
        dates: "2025",
        details: "Vacation featuring a taxi driver pulling a knife on myself and a friend."
    },
    {
        position: { lat: 32.0853, lng: 34.7818 },
        title: "Israel",
        description: "",
        dates: "Spring 2025",
        details: "Harvard Israel Trek"
    }
];

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Create the map centered on US
    map = new Map(document.getElementById("map"), {
        zoom: 2,  // Zoomed out further to show Europe
        center: { lat: 30.0, lng: -45.0 },  // Centered in the Atlantic to show both continents
        mapId: "TRAVEL_MAP",
        styles: [
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{ color: getComputedStyle(document.documentElement).getPropertyValue('--text-color') }]
            },
            {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ color: getComputedStyle(document.documentElement).getPropertyValue('--background-color') }]
            }
        ]
    });

    // Create markers for each location
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title,
            animation: google.maps.Animation.DROP
        });

        // Create info window for each marker
        const infowindow = new google.maps.InfoWindow({
            content: `
                <div style="color: #333; padding: 6px;">
                    <h3 style="margin: 0 0 2px 0;">${location.title}</h3>
                    <p style="margin: 0 0 2px 0;"><strong>${location.dates}</strong></p>
                    <p style="margin: 0;">${location.details}</p>
                </div>
            `
        });

        // Add hover event listeners
        marker.addListener("mouseover", () => {
            infowindow.open(map, marker);
        });

        marker.addListener("mouseout", () => {
            infowindow.close();
        });

        markers.push(marker);
    });
}
</script>

<!-- Add Google Maps JavaScript API -->
<!-- To make this map work:
1. Go to https://console.cloud.google.com
2. Create a project and enable Maps JavaScript API
3. Create credentials (API key)
4. Replace YOUR_API_KEY below with your actual API key
5. Secure your key by restricting it to your domain -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDa7VBVaA0Kpk5IbM4tjce4QKHqvcsxWPI&callback=initMap"></script>

<style>
.travel-container {
    padding: 20px 0;
}

#map {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin: 20px 0;
}
</style>

