
navigator.geolocation.getCurrentPosition((position) => {
    let { latitude, longitude } = position.coords;
    var map = L.map('map').setView([latitude, longitude], 19);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Create a marker and bind a popup to it
    var marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
});
