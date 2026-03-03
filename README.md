Weather Search App
A web application that provides real-time weather information by integrating the OpenWeather API.
The project demonstrates the use of asynchronous JavaScript to handle multiple API requests.

Key Features

* Geocoding Integration: Converts city names into geographic coordinates (Latitude and Longitude) to ensure weather accuracy.
* Real-Time Data: Fetches current temperature in Celsius and general weather conditions.
* Asynchronous Logic: Uses async/await to manage sequential API calls efficiently.
* Error Handling: Includes checks for empty input fields and alerts the user if a city is not found.
* Multi-language Input: Supports city names in both Latin and Cyrillic scripts.

Technical Stack

* HTML5: Semantic structure for the user interface.
* CSS3: Minimalist styling for clarity and focus.
* JavaScript (ES6+): Core logic, DOM manipulation, and Fetch API.
* External API: OpenWeather Geocoding and Current Weather Data.

How It Works
1. User Input: The user enters a city name into the search field.
2. Coordinate Fetching: The application calls the Geocoding API to retrieve the latitude and longitude for the specified city.
3. Weather Fetching: These coordinates are then passed to the Weather API to get current atmospheric data in metric units.
4. UI Update: The received data (Town, Degrees, Weather) is dynamically updated in the browser.
