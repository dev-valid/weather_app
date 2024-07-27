# Weather App

This project is a simple web-based weather application that uses the AccuWeather API to fetch current weather information.

## Features

- **City Search:** Enter a city name to get the current weather information for that location.
- **Weather Details Display:** Shows details like temperature, weather conditions, and whether it is day or night.
- **Local Storage:** Saves the last searched city and automatically updates the weather information when the page is reloaded.

## Installation

To run this project locally:

1. Clone this repository or download the files.
2. Set up a local server (such as Live Server in VS Code) to run the HTML page.
3. Open your browser and navigate to `http://localhost` (or whatever address your server uses).

## Usage

1. Open the app in your browser.
2. Enter the name of a city in the input field and click the search button.
3. The weather information for the entered city will be displayed.

## Live Demo

You can view the live version of the project [here](https://valid02-weather-app.netlify.app/).

## Project Structure

- `index.html`: The main HTML file that defines the structure of the web page.
- `styles.css`: The CSS file for styling the page.
- `scripts/app.js`: The JavaScript file for handling events and user interactions.
- `scripts/forecast.js`: The JavaScript file containing the `Forecast` class for interacting with the API and fetching weather data.

## Prerequisites

- A modern web browser
- Internet access to connect to the API

## Security Notes

- Ensure all API requests are made over HTTPS to avoid mixed content errors.

## Common Errors

- **Mixed Content:** If your app attempts to load resources over HTTP, the browser may block the requests. Make sure all URLs use HTTPS.
- **API Key Issues:** Verify that your API key is valid and correctly used in the requests.

