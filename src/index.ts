import './styles.scss';
import Movies from './Movies';
import { api } from './Config';

// Initialises Movies API
const movies: Movies = new Movies();

// Remember references to the DOM elements used later
const resultsContainer = document.getElementById('search-results');
const detailsContainer = document.getElementById('movie-details');
const errorContainer = document.getElementById('error');

// Add listener to search button
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    updateSearchResults((searchInput as HTMLInputElement).value);
});

// Display error message to user
const displayError = (message: string) => {
    errorContainer.innerHTML = `<div>${message}</div>`;
};

// Load new search results and update the listing
const updateSearchResults = async (keyword: string) => {
    let results = [];

    try {
        results = await movies.search(keyword);
    } catch (error) {
        displayError(error);
    }

    // Add results one-by-one to the list
    results.forEach((movie) => {
        const container: HTMLElement = document.createElement('div');
        container.innerHTML = movie.name;
        container.addEventListener('click', updateDetails.bind(this, movie));

        resultsContainer.appendChild(container);
    });
};

// Load detailed information about a movie
const updateDetails = async (movie) => {
    const imageSrc = `${api.imageBaseUrl}${movie.images['webPosterLarge']}`;
    detailsContainer.innerHTML = `<div>${movie.description}</div><div><img src="${imageSrc}" /></div>`;
};
