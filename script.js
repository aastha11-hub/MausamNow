// Weather App JavaScript - India Focused
class WeatherApp {
    constructor() {
        this.apiKey = 'YOUR_API_KEY'; // You'll need to get a free API key from OpenWeatherMap
        this.baseUrl = 'https://api.openweathermap.org/data/2.5';
        this.lastSearchedCity = '';
        this.indianCities = this.getIndianCities();
        
        this.initializeApp();
    }

    getIndianCities() {
        return [
            // Major Cities
            { name: "Mumbai", state: "Maharashtra", country: "IN" },
            { name: "Delhi", state: "Delhi", country: "IN" },
            { name: "Bangalore", state: "Karnataka", country: "IN" },
            { name: "Hyderabad", state: "Telangana", country: "IN" },
            { name: "Chennai", state: "Tamil Nadu", country: "IN" },
            { name: "Kolkata", state: "West Bengal", country: "IN" },
            { name: "Pune", state: "Maharashtra", country: "IN" },
            { name: "Ahmedabad", state: "Gujarat", country: "IN" },
            { name: "Jaipur", state: "Rajasthan", country: "IN" },
            { name: "Surat", state: "Gujarat", country: "IN" },
            { name: "Lucknow", state: "Uttar Pradesh", country: "IN" },
            { name: "Kanpur", state: "Uttar Pradesh", country: "IN" },
            { name: "Nagpur", state: "Maharashtra", country: "IN" },
            { name: "Indore", state: "Madhya Pradesh", country: "IN" },
            { name: "Thane", state: "Maharashtra", country: "IN" },
            { name: "Bhopal", state: "Madhya Pradesh", country: "IN" },
            { name: "Visakhapatnam", state: "Andhra Pradesh", country: "IN" },
            { name: "Pimpri-Chinchwad", state: "Maharashtra", country: "IN" },
            { name: "Patna", state: "Bihar", country: "IN" },
            { name: "Vadodara", state: "Gujarat", country: "IN" },
            { name: "Ghaziabad", state: "Uttar Pradesh", country: "IN" },
            { name: "Ludhiana", state: "Punjab", country: "IN" },
            { name: "Agra", state: "Uttar Pradesh", country: "IN" },
            { name: "Nashik", state: "Maharashtra", country: "IN" },
            { name: "Faridabad", state: "Haryana", country: "IN" },
            { name: "Meerut", state: "Uttar Pradesh", country: "IN" },
            { name: "Rajkot", state: "Gujarat", country: "IN" },
            { name: "Kalyan-Dombivali", state: "Maharashtra", country: "IN" },
            { name: "Vasai-Virar", state: "Maharashtra", country: "IN" },
            { name: "Varanasi", state: "Uttar Pradesh", country: "IN" },
            { name: "Srinagar", state: "Jammu and Kashmir", country: "IN" },
            { name: "Aurangabad", state: "Maharashtra", country: "IN" },
            { name: "Dhanbad", state: "Jharkhand", country: "IN" },
            { name: "Amritsar", state: "Punjab", country: "IN" },
            { name: "Allahabad", state: "Uttar Pradesh", country: "IN" },
            { name: "Ranchi", state: "Jharkhand", country: "IN" },
            { name: "Howrah", state: "West Bengal", country: "IN" },
            { name: "Coimbatore", state: "Tamil Nadu", country: "IN" },
            { name: "Jabalpur", state: "Madhya Pradesh", country: "IN" },
            { name: "Gwalior", state: "Madhya Pradesh", country: "IN" },
            { name: "Vijayawada", state: "Andhra Pradesh", country: "IN" },
            { name: "Jodhpur", state: "Rajasthan", country: "IN" },
            { name: "Madurai", state: "Tamil Nadu", country: "IN" },
            { name: "Raipur", state: "Chhattisgarh", country: "IN" },
            { name: "Kota", state: "Rajasthan", country: "IN" },
            { name: "Guwahati", state: "Assam", country: "IN" },
            { name: "Chandigarh", state: "Chandigarh", country: "IN" },
            { name: "Solapur", state: "Maharashtra", country: "IN" },
            { name: "Hubballi-Dharwad", state: "Karnataka", country: "IN" },
            { name: "Bareilly", state: "Uttar Pradesh", country: "IN" },
            { name: "Moradabad", state: "Uttar Pradesh", country: "IN" },
            { name: "Mysore", state: "Karnataka", country: "IN" },
            { name: "Gurgaon", state: "Haryana", country: "IN" },
            { name: "Aligarh", state: "Uttar Pradesh", country: "IN" },
            { name: "Jalandhar", state: "Punjab", country: "IN" },
            { name: "Tiruchirappalli", state: "Tamil Nadu", country: "IN" },
            { name: "Bhubaneswar", state: "Odisha", country: "IN" },
            { name: "Salem", state: "Tamil Nadu", country: "IN" },
            { name: "Warangal", state: "Telangana", country: "IN" },
            { name: "Mira-Bhayandar", state: "Maharashtra", country: "IN" },
            { name: "Thiruvananthapuram", state: "Kerala", country: "IN" },
            { name: "Bhiwandi", state: "Maharashtra", country: "IN" },
            { name: "Saharanpur", state: "Uttar Pradesh", country: "IN" },
            { name: "Guntur", state: "Andhra Pradesh", country: "IN" },
            { name: "Amravati", state: "Maharashtra", country: "IN" },
            { name: "Bikaner", state: "Rajasthan", country: "IN" },
            { name: "Noida", state: "Uttar Pradesh", country: "IN" },
            { name: "Jamshedpur", state: "Jharkhand", country: "IN" },
            { name: "Bhilai", state: "Chhattisgarh", country: "IN" },
            { name: "Cuttack", state: "Odisha", country: "IN" },
            { name: "Firozabad", state: "Uttar Pradesh", country: "IN" },
            { name: "Kochi", state: "Kerala", country: "IN" },
            { name: "Nellore", state: "Andhra Pradesh", country: "IN" },
            { name: "Bhavnagar", state: "Gujarat", country: "IN" },
            { name: "Dehradun", state: "Uttarakhand", country: "IN" },
            { name: "Durgapur", state: "West Bengal", country: "IN" },
            { name: "Asansol", state: "West Bengal", country: "IN" },
            { name: "Rourkela", state: "Odisha", country: "IN" },
            { name: "Nanded", state: "Maharashtra", country: "IN" },
            { name: "Kolhapur", state: "Maharashtra", country: "IN" },
            { name: "Ajmer", state: "Rajasthan", country: "IN" },
            { name: "Akola", state: "Maharashtra", country: "IN" },
            { name: "Gulbarga", state: "Karnataka", country: "IN" },
            { name: "Jamnagar", state: "Gujarat", country: "IN" },
            { name: "Ujjain", state: "Madhya Pradesh", country: "IN" },
            { name: "Loni", state: "Uttar Pradesh", country: "IN" },
            { name: "Siliguri", state: "West Bengal", country: "IN" },
            { name: "Jhansi", state: "Uttar Pradesh", country: "IN" },
            { name: "Ulhasnagar", state: "Maharashtra", country: "IN" },
            { name: "Nellore", state: "Andhra Pradesh", country: "IN" },
            { name: "Jammu", state: "Jammu and Kashmir", country: "IN" },
            { name: "Sangli-Miraj", state: "Maharashtra", country: "IN" },
            { name: "Belgaum", state: "Karnataka", country: "IN" },
            { name: "Mangalore", state: "Karnataka", country: "IN" },
            { name: "Ambattur", state: "Tamil Nadu", country: "IN" },
            { name: "Tirunelveli", state: "Tamil Nadu", country: "IN" },
            { name: "Malegaon", state: "Maharashtra", country: "IN" },
            { name: "Gaya", state: "Bihar", country: "IN" },
            { name: "Jalgaon", state: "Maharashtra", country: "IN" },
            { name: "Udaipur", state: "Rajasthan", country: "IN" },
            { name: "Maheshtala", state: "West Bengal", country: "IN" },
            { name: "Tirupur", state: "Tamil Nadu", country: "IN" },
            { name: "Davanagere", state: "Karnataka", country: "IN" },
            { name: "Kozhikode", state: "Kerala", country: "IN" },
            { name: "Kurnool", state: "Andhra Pradesh", country: "IN" },
            { name: "Rajpur Sonarpur", state: "West Bengal", country: "IN" },
            { name: "Bokaro", state: "Jharkhand", country: "IN" },
            { name: "South Dumdum", state: "West Bengal", country: "IN" },
            { name: "Bellary", state: "Karnataka", country: "IN" },
            { name: "Patiala", state: "Punjab", country: "IN" },
            { name: "Gopalpur", state: "West Bengal", country: "IN" },
            { name: "Agartala", state: "Tripura", country: "IN" },
            { name: "Bhagalpur", state: "Bihar", country: "IN" },
            { name: "Muzaffarnagar", state: "Uttar Pradesh", country: "IN" },
            { name: "Bhatpara", state: "West Bengal", country: "IN" },
            { name: "Panihati", state: "West Bengal", country: "IN" },
            { name: "Latur", state: "Maharashtra", country: "IN" },
            { name: "Dhule", state: "Maharashtra", country: "IN" },
            { name: "Rohtak", state: "Haryana", country: "IN" },
            { name: "Korba", state: "Chhattisgarh", country: "IN" },
            { name: "Bhilwara", state: "Rajasthan", country: "IN" },
            { name: "Brahmapur", state: "Odisha", country: "IN" },
            { name: "Muzaffarpur", state: "Bihar", country: "IN" },
            { name: "Ahmednagar", state: "Maharashtra", country: "IN" },
            { name: "Mathura", state: "Uttar Pradesh", country: "IN" },
            { name: "Kollam", state: "Kerala", country: "IN" },
            { name: "Avadi", state: "Tamil Nadu", country: "IN" },
            { name: "Kadapa", state: "Andhra Pradesh", country: "IN" },
            { name: "Anantapur", state: "Andhra Pradesh", country: "IN" },
            { name: "Tiruvottiyur", state: "Tamil Nadu", country: "IN" },
            { name: "Bardhaman", state: "West Bengal", country: "IN" },
            { name: "Panipat", state: "Haryana", country: "IN" },
            { name: "Fatehpur", state: "Uttar Pradesh", country: "IN" },
            { name: "Bhiwani", state: "Haryana", country: "IN" },
            { name: "Thoothukkudi", state: "Tamil Nadu", country: "IN" },
            { name: "Vellore", state: "Tamil Nadu", country: "IN" },
            { name: "Karnal", state: "Haryana", country: "IN" },
            { name: "Ratlam", state: "Madhya Pradesh", country: "IN" },
            { name: "Sirsa", state: "Haryana", country: "IN" },
            { name: "Alwar", state: "Rajasthan", country: "IN" },
            { name: "Pondicherry", state: "Puducherry", country: "IN" },
            { name: "Thanjavur", state: "Tamil Nadu", country: "IN" },
            { name: "Bharatpur", state: "Rajasthan", country: "IN" },
            { name: "Sonipat", state: "Haryana", country: "IN" },
            { name: "Nagercoil", state: "Tamil Nadu", country: "IN" },
            { name: "Thrissur", state: "Kerala", country: "IN" },
            { name: "Gandhinagar", state: "Gujarat", country: "IN" },
            { name: "Shimla", state: "Himachal Pradesh", country: "IN" },
            { name: "Gangtok", state: "Sikkim", country: "IN" },
            { name: "Kohima", state: "Nagaland", country: "IN" },
            { name: "Imphal", state: "Manipur", country: "IN" },
            { name: "Aizawl", state: "Mizoram", country: "IN" },
            { name: "Shillong", state: "Meghalaya", country: "IN" },
            { name: "Itanagar", state: "Arunachal Pradesh", country: "IN" },
            { name: "Dispur", state: "Assam", country: "IN" },
            { name: "Panaji", state: "Goa", country: "IN" },
            { name: "Port Blair", state: "Andaman and Nicobar Islands", country: "IN" },
            { name: "Kavaratti", state: "Lakshadweep", country: "IN" },
            { name: "Silvassa", state: "Dadra and Nagar Haveli", country: "IN" },
            { name: "Daman", state: "Daman and Diu", country: "IN" },
            { name: "Karaikal", state: "Puducherry", country: "IN" },
            { name: "Yanam", state: "Puducherry", country: "IN" },
            { name: "Mahe", state: "Puducherry", country: "IN" }
        ];
    }

    initializeApp() {
        this.bindEvents();
        this.loadLastSearchedCity();
        this.setupAutocomplete();
    }

    setupAutocomplete() {
        const searchInput = document.getElementById('search-input');
        const autocompleteContainer = document.createElement('div');
        autocompleteContainer.id = 'autocomplete-container';
        autocompleteContainer.className = 'autocomplete-container';
        searchInput.parentNode.appendChild(autocompleteContainer);

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length < 2) {
                autocompleteContainer.innerHTML = '';
                autocompleteContainer.style.display = 'none';
                return;
            }

            const matches = this.indianCities.filter(city => 
                city.name.toLowerCase().includes(query) || 
                city.state.toLowerCase().includes(query)
            ).slice(0, 8);

            if (matches.length > 0) {
                autocompleteContainer.innerHTML = matches.map(city => 
                    `<div class="autocomplete-item" data-city="${city.name}, ${city.state}">
                        <i class="fas fa-map-marker-alt"></i>
                        <span class="city-name">${city.name}</span>
                        <span class="state-name">${city.state}</span>
                    </div>`
                ).join('');
                autocompleteContainer.style.display = 'block';

                // Add click events to autocomplete items
                autocompleteContainer.querySelectorAll('.autocomplete-item').forEach(item => {
                    item.addEventListener('click', () => {
                        searchInput.value = item.dataset.city;
                        autocompleteContainer.style.display = 'none';
                        this.searchWeather();
                    });
                });
            } else {
                autocompleteContainer.style.display = 'none';
            }
        });

        // Hide autocomplete when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !autocompleteContainer.contains(e.target)) {
                autocompleteContainer.style.display = 'none';
            }
        });
    }

    bindEvents() {
        const searchBtn = document.getElementById('search-btn');
        const searchInput = document.getElementById('search-input');

        searchBtn.addEventListener('click', () => this.searchWeather());
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchWeather();
            }
        });

        // Auto-search on page load if we have a last searched city
        if (this.lastSearchedCity) {
            searchInput.value = this.lastSearchedCity;
            this.searchWeather();
        }
    }

    async searchWeather() {
        const city = document.getElementById('search-input').value.trim();
        
        if (!city) {
            this.showError('Please enter an Indian city name');
            return;
        }

        this.showLoading();
        this.lastSearchedCity = city;
        this.saveLastSearchedCity();

        try {
            const weatherData = await this.getWeatherData(city);
            const forecastData = await this.getForecastData(city);
            
            this.displayWeather(weatherData, forecastData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            this.showError(error.message || 'Failed to fetch weather data');
        }
    }

    async getWeatherData(city) {
        const url = `${this.baseUrl}/weather?q=${encodeURIComponent(city)},IN&appid=${this.apiKey}&units=metric`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else if (response.status === 401) {
                throw new Error('API key is invalid. Please check your configuration.');
            } else {
                throw new Error('Failed to fetch weather data. Please try again later.');
            }
        }

        return await response.json();
    }

    async getForecastData(city) {
        const url = `${this.baseUrl}/forecast?q=${encodeURIComponent(city)},IN&appid=${this.apiKey}&units=metric`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Failed to fetch forecast data');
        }

        return await response.json();
    }

    displayWeather(weatherData, forecastData) {
        this.hideAllSections();
        document.getElementById('weather-details').style.display = 'block';

        // Update current weather
        document.getElementById('city-name').textContent = weatherData.name + ', ' + weatherData.sys.country;
        document.getElementById('date-time').textContent = this.formatDateTime(weatherData.dt);
        document.getElementById('temperature').textContent = Math.round(weatherData.main.temp) + '°C';
        document.getElementById('weather-description').textContent = weatherData.weather[0].description;
        document.getElementById('feels-like').textContent = Math.round(weatherData.main.feels_like) + '°C';
        document.getElementById('humidity').textContent = weatherData.main.humidity + '%';
        document.getElementById('wind-speed').textContent = Math.round(weatherData.wind.speed * 3.6) + ' km/h'; // Convert m/s to km/h
        document.getElementById('visibility').textContent = (weatherData.visibility / 1000).toFixed(1) + ' km';

        // Update weather icon
        const weatherIcon = document.getElementById('weather-icon');
        weatherIcon.className = this.getWeatherIcon(weatherData.weather[0].main, weatherData.weather[0].description);

        // Display forecast
        this.displayForecast(forecastData);
    }

    displayForecast(forecastData) {
        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = '';

        // Get daily forecasts (every 24 hours)
        const dailyForecasts = this.getDailyForecasts(forecastData.list);

        dailyForecasts.forEach(forecast => {
            const forecastCard = document.createElement('div');
            forecastCard.className = 'forecast-card';
            
            const date = new Date(forecast.dt * 1000);
            const dayName = date.toLocaleDateString('en-IN', { weekday: 'short' });
            const temp = Math.round(forecast.main.temp);
            const icon = this.getWeatherIcon(forecast.weather[0].main, forecast.weather[0].description);

            forecastCard.innerHTML = `
                <h4>${dayName}</h4>
                <i class="${icon}"></i>
                <div class="temp">${temp}°C</div>
                <p>${forecast.weather[0].description}</p>
            `;

            forecastContainer.appendChild(forecastCard);
        });
    }

    getDailyForecasts(forecastList) {
        const dailyForecasts = [];
        const today = new Date().getDate();
        
        forecastList.forEach(forecast => {
            const forecastDate = new Date(forecast.dt * 1000);
            if (forecastDate.getDate() !== today && dailyForecasts.length < 5) {
                dailyForecasts.push(forecast);
            }
        });

        return dailyForecasts;
    }

    getWeatherIcon(weatherMain, description) {
        const weatherIcons = {
            'Clear': 'fas fa-sun',
            'Clouds': description.includes('scattered') ? 'fas fa-cloud-sun' : 'fas fa-cloud',
            'Rain': 'fas fa-cloud-rain',
            'Drizzle': 'fas fa-cloud-rain',
            'Thunderstorm': 'fas fa-bolt',
            'Snow': 'fas fa-snowflake',
            'Mist': 'fas fa-smog',
            'Smoke': 'fas fa-smog',
            'Haze': 'fas fa-smog',
            'Dust': 'fas fa-smog',
            'Fog': 'fas fa-smog',
            'Sand': 'fas fa-smog',
            'Ash': 'fas fa-smog',
            'Squall': 'fas fa-wind',
            'Tornado': 'fas fa-wind'
        };

        return weatherIcons[weatherMain] || 'fas fa-cloud';
    }

    formatDateTime(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    showLoading() {
        this.hideAllSections();
        document.getElementById('loading').style.display = 'block';
    }

    showError(message) {
        this.hideAllSections();
        const errorSection = document.getElementById('error');
        document.getElementById('error-message').textContent = message;
        errorSection.style.display = 'block';
    }

    hideAllSections() {
        document.getElementById('weather-info').style.display = 'none';
        document.getElementById('weather-details').style.display = 'none';
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').style.display = 'none';
    }

    saveLastSearchedCity() {
        localStorage.setItem('lastSearchedCity', this.lastSearchedCity);
    }

    loadLastSearchedCity() {
        const savedCity = localStorage.getItem('lastSearchedCity');
        if (savedCity) {
            this.lastSearchedCity = savedCity;
        }
    }
}

// Global function for retry button
function retrySearch() {
    weatherApp.searchWeather();
}

// Initialize the app when the page loads
let weatherApp;
document.addEventListener('DOMContentLoaded', () => {
    weatherApp = new WeatherApp();
});

// Add some sample data for demonstration (remove this in production)
// This allows the app to work without an API key for demonstration purposes
const sampleWeatherData = {
    name: "Mumbai",
    sys: { country: "IN" },
    dt: Date.now() / 1000,
    main: {
        temp: 28,
        feels_like: 30,
        humidity: 75
    },
    weather: [{ main: "Clouds", description: "scattered clouds" }],
    wind: { speed: 4.2 },
    visibility: 8000
};

const sampleForecastData = {
    list: [
        {
            dt: Date.now() / 1000 + 86400,
            main: { temp: 29 },
            weather: [{ main: "Clear", description: "clear sky" }]
        },
        {
            dt: Date.now() / 1000 + 172800,
            main: { temp: 31 },
            weather: [{ main: "Clouds", description: "broken clouds" }]
        },
        {
            dt: Date.now() / 1000 + 259200,
            main: { temp: 27 },
            weather: [{ main: "Rain", description: "light rain" }]
        },
        {
            dt: Date.now() / 1000 + 345600,
            main: { temp: 30 },
            weather: [{ main: "Clear", description: "clear sky" }]
        },
        {
            dt: Date.now() / 1000 + 432000,
            main: { temp: 32 },
            weather: [{ main: "Clouds", description: "scattered clouds" }]
        }
    ]
};

// Modify the searchWeather method to use sample data if no API key is provided
const originalSearchWeather = WeatherApp.prototype.searchWeather;
WeatherApp.prototype.searchWeather = function() {
    if (this.apiKey === 'YOUR_API_KEY') {
        // Use sample data for demonstration, but update city name dynamically
        this.showLoading();
        const city = document.getElementById('search-input').value.trim();
        let cityName = city;
        let stateName = '';
        // Try to find the state from the Indian cities list
        if (this.indianCities) {
            const match = this.indianCities.find(c => `${c.name}, ${c.state}`.toLowerCase() === city.toLowerCase() || c.name.toLowerCase() === city.toLowerCase());
            if (match) {
                cityName = match.name;
                stateName = match.state;
            }
        }
        // Clone the sample data and update city/state
        const demoWeather = JSON.parse(JSON.stringify(sampleWeatherData));
        demoWeather.name = cityName + (stateName ? ', ' + stateName : '');
        const demoForecast = JSON.parse(JSON.stringify(sampleForecastData));
        setTimeout(() => {
            this.displayWeather(demoWeather, demoForecast);
        }, 1000);
        return;
    }
    return originalSearchWeather.call(this);
}; 