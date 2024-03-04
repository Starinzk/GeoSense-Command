mapboxgl.accessToken = 'pk.eyJ1Ijoic3RhcmluemsiLCJhIjoiY2x0N200eGN1MGFrNzJxb2Rmcm14czA1NiJ9.ytb_hDY3aRLdrwly6Xh63Q';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-122.4194, 37.7749],
    zoom: 12
});

// Add sample data to the table
var data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Tom Brown', age: 35 }
];

var table = document.getElementById('data-table');

data.forEach(function(item) {
    var row = table.insertRow();
    row.insertCell().textContent = item.id;
    row.insertCell().textContent = item.name;
    row.insertCell().textContent = item.age;
});
