document.getElementById('get-location').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail)
  } else alert('Geolocation is not supported by your browser.');
});

function success(position) {
  let currentDate = new Date(position.timestamp * 1000)
  alert('Latitude: ' + position.coords.latitude +
    ', Longitude: ' + position.coords.longitude +
    ',\nThe Date and Time is: ' + currentDate.toString())

}


function fail(error) {
  alert(`Failed to get location: ${error.message}`);
}



