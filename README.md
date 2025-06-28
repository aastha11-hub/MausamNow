# 🌤️ MausamNow

MausamNow is a beautiful, modern weather application for Indian cities and states. Built with HTML, CSS, and JavaScript, it provides real-time weather information and forecasts for over 150+ Indian cities across all states and union territories.

## ✨ Features

- **Indian Cities Focus**: Comprehensive coverage of 150+ Indian cities across all states and union territories
- **Smart Autocomplete**: Intelligent search with city and state suggestions
- **Current Weather**: Real-time temperature, humidity, wind speed, and visibility
- **5-Day Forecast**: Extended weather predictions with daily temperature and conditions
- **Beautiful UI**: Modern, responsive design with gradient backgrounds and smooth animations
- **Search Functionality**: Search for any Indian city by name or state
- **Local Storage**: Remembers your last searched city
- **Error Handling**: Graceful error handling with user-friendly messages
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Weather Icons**: Dynamic weather icons based on current conditions

## 🗺️ Indian Cities Coverage

The app includes weather data for major Indian cities including:

### Major Metropolitan Cities
- **Mumbai** (Maharashtra)
- **Delhi** (Delhi)
- **Bangalore** (Karnataka)
- **Hyderabad** (Telangana)
- **Chennai** (Tamil Nadu)
- **Kolkata** (West Bengal)
- **Pune** (Maharashtra)
- **Ahmedabad** (Gujarat)
- **Jaipur** (Rajasthan)
- **Surat** (Gujarat)

### State Capitals
- **Bhopal** (Madhya Pradesh)
- **Patna** (Bihar)
- **Ranchi** (Jharkhand)
- **Bhubaneswar** (Odisha)
- **Thiruvananthapuram** (Kerala)
- **Gandhinagar** (Gujarat)
- **Shimla** (Himachal Pradesh)
- **Gangtok** (Sikkim)
- **Kohima** (Nagaland)
- **Imphal** (Manipur)
- **Aizawl** (Mizoram)
- **Shillong** (Meghalaya)
- **Itanagar** (Arunachal Pradesh)
- **Dispur** (Assam)
- **Panaji** (Goa)

### Union Territory Capitals
- **Chandigarh** (Chandigarh)
- **Port Blair** (Andaman and Nicobar Islands)
- **Kavaratti** (Lakshadweep)
- **Silvassa** (Dadra and Nagar Haveli)
- **Daman** (Daman and Diu)
- **Pondicherry** (Puducherry)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An internet connection
- (Optional) OpenWeatherMap API key for real weather data

### Installation

1. **Clone or download** this repository to your local machine
2. **Open** `index.html` in your web browser
3. **Start searching** for Indian cities to get weather information!

### Using Real Weather Data

To get real-time weather data instead of sample data:

1. **Sign up** for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
2. **Replace** `'YOUR_API_KEY'` in `script.js` line 4 with your actual API key:
   ```javascript
   this.apiKey = 'your_actual_api_key_here';
   ```
3. **Save** the file and refresh your browser

## 🎨 Features in Detail

### Smart Search with Autocomplete
- **Intelligent Suggestions**: Type any part of a city or state name
- **Quick Selection**: Click on suggestions to instantly search
- **State Information**: Shows both city and state names
- **150+ Cities**: Comprehensive coverage across India

### Current Weather Display
- **Location**: City name and state
- **Temperature**: Current temperature in Celsius
- **Weather Description**: Detailed weather conditions
- **Feels Like**: Apparent temperature
- **Humidity**: Air humidity percentage
- **Wind Speed**: Wind speed in km/h
- **Visibility**: Visibility in kilometers

### 5-Day Forecast
- **Daily Predictions**: Weather forecast for the next 5 days
- **Temperature Range**: High and low temperatures
- **Weather Conditions**: Expected weather patterns
- **Visual Icons**: Weather condition icons

### User Experience
- **Smart Search**: Autocomplete with city and state suggestions
- **Loading States**: Smooth loading animations
- **Error Handling**: Clear error messages for invalid cities or network issues
- **Responsive Design**: Optimized for all screen sizes
- **Local Storage**: Remembers your last searched location

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Modern JavaScript with async/await
- **Font Awesome**: Weather and UI icons
- **Google Fonts**: Poppins font family

### API Integration
- **OpenWeatherMap API**: Current weather and forecast data
- **RESTful API**: JSON data format
- **Error Handling**: Comprehensive error management
- **Indian Cities Database**: Local database of 150+ Indian cities

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Responsive Design

The app is fully responsive and optimized for:
- **Desktop**: Full-featured layout with all information displayed
- **Tablet**: Adjusted grid layouts for medium screens
- **Mobile**: Single-column layout for small screens

## 🎯 Usage Examples

1. **Search for a City**: Type "Mumbai" and press Enter or click the search button
2. **Use Autocomplete**: Type "Del" to see Delhi, Delhi suggestions
3. **Search by State**: Type "Karnataka" to see Bangalore, Mysore, etc.
4. **View Current Weather**: See temperature, humidity, wind speed, and more
5. **Check Forecast**: Scroll down to see the 5-day weather forecast

## 🔧 Customization

### Adding More Indian Cities
To add more Indian cities, modify the `getIndianCities()` method in `script.js`:
```javascript
getIndianCities() {
    return [
        { name: "Your City", state: "Your State", country: "IN" },
        // Add more cities here
    ];
}
```

### Changing Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4facfe;
    --secondary-color: #00f2fe;
    --accent-color: #ffd700;
}
```

## 🐛 Troubleshooting

### Common Issues

1. **"City not found" Error**
   - Check the spelling of the city name
   - Try using the full city name (e.g., "Mumbai" instead of "Bombay")
   - Use the autocomplete suggestions for accurate city names

2. **"API key is invalid" Error**
   - Verify your OpenWeatherMap API key is correct
   - Ensure the API key is active and has proper permissions

3. **Weather data not loading**
   - Check your internet connection
   - Verify the API service is available
   - Check browser console for error messages

### Browser Console Errors
If you see CORS errors, ensure you're running the app from a web server rather than opening the HTML file directly.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the browser console for error messages
3. Ensure your API key is properly configured

## 🔮 Future Enhancements

Potential features for future versions:
- **Weather Maps**: Interactive weather maps of India
- **Weather Alerts**: Severe weather notifications for Indian cities
- **Multiple Units**: Fahrenheit/Celsius toggle
- **Weather History**: Historical weather data for Indian cities
- **Location Services**: GPS-based location detection
- **Regional Weather**: Weather patterns by Indian regions
- **Monsoon Tracking**: Special monsoon season features
- **Air Quality Index**: AQI data for major Indian cities

## 🇮🇳 Indian Weather Patterns

The app is designed to handle India's diverse weather patterns:
- **Tropical Climate**: Hot and humid weather in coastal areas
- **Monsoon Season**: Heavy rainfall patterns
- **Desert Climate**: Hot and dry weather in Rajasthan
- **Himalayan Climate**: Cold weather in northern states
- **Coastal Weather**: Sea breeze and humidity effects

---

**Enjoy your Indian weather app! 🌤️🇮🇳** 