window.addEventListener('load', ()=> {
    let long;
    let lat;
    let key;
    let query;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);            
            // long = position.coords.longitude;
            // lat = position.coords.latitude;
            query = 'bandung';
            key = '7b999cc90b9110bf19f064aab2abfa77';

            const api = `http://api.weatherstack.com/current?access_key=${key}&query=${query}`;
            
            fetch(api)
            .then( response => {
                return response.json();
            })
            .then( data => {
                console.log(data);
                const { temperature, weather_descriptions } = data.current;
                const { timezone_id } = data.location;

                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = weather_descriptions;
                locationTimezone.textContent = timezone_id;
            
            });

        });
    }
});