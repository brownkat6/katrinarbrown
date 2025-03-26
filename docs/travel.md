---
layout: default
title: Travel
---

<div class="travel-container">
    <h1>Places I've Been</h1>
    <div id="map" style="width: 100%; height: 600px;"></div>
</div>

<script>
let map;
let markers = [];

const locations = [
    {
        position: { lat: 38.6270, lng: -90.1994 },
        title: "St. Louis, Missouri",
        description: "Birthplace (2003-2006)",
        dates: "2003-2006",
        details: ""
    },
    {
        position: { lat: 39.1653, lng: -86.5264 },
        title: "Bloomington, Indiana",
        description: "Hometown (2006-2021)",
        dates: "2006-2021",
        details: "So much corn"
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
        description: "College (2021-2025)",
        dates: "2021-2025",
        details: "Harvard University"
    },
    {
        position: { lat: 41.8781, lng: -87.6298 },
        title: "Chicago, Illinois",
        description: "Jump Trading Internship (2024)",
        dates: "2024",
        details: "Quant research internship at Jump Trading."
    },
    {
        position: { lat: 40.7128, lng: -74.0060 },
        title: "New York City, New York",
        description: "Summer Internships",
        dates: "Summers 2022, 2023, 2024",
        details: "Multiple winter and summer internship in the heart of midtown or FiDi NYC."
    },
    {
        position: { lat: 49.2827, lng: -123.1207 },
        title: "Vancouver, Canada",
        description: "NeurIPS Conference",
        dates: "December 2024",
        details: "Presented at the NeurIPS conference."
    },
    {
        position: { lat: 40.0379, lng: -76.3055 },
        title: "Lancaster, Pennsylvania",
        description: "Voice of the Apostles Conference",
        dates: "October 2024",
        details: "Attended VoA 2024"
    },
    {
        position: { lat: 21.3069, lng: -157.8583 },
        title: "Kona, Hawaii",
        description: "Vacation",
        dates: "2024",
        details: "Eating pizza in a hot tub with friends."
    },
    {
        position: { lat: 18.1096, lng: -77.2975 },
        title: "Jamaica",
        description: "Vacation",
        dates: "2025",
        details: "Featuring a taxi driver pulling a knife on myself and a friend."
    },
    {
        position: { lat: 32.0853, lng: 34.7818 },
        title: "Israel",
        description: "Harvard Israel Trek",
        dates: "Spring 2025",
        details: "Traveler in the Harvard Israel Trek program."
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
                <div style="color: #333; padding: 10px;">
                    <h3 style="margin: 0 0 5px 0;">${location.title}</h3>
                    <p style="margin: 0 0 5px 0;"><strong>${location.dates}</strong></p>
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
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>

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

