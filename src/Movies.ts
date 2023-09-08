import axios from 'axios';
import { api } from './Config';
import { info } from './Log';

const moviesAjax = axios.create({
    baseURL: api.baseUrl
});

export default class Movies {
    constructor() {
        info('Initialise Movies API.');
    }

    // Search for a movie from API by its title.
    async search(title = '') {
        info(`Search for "${title}" from API.`);

        const params = {
            offset: 0,
            limit: 10,
            // possible values: description,tags,year,duration,ageRating
            fields: ['description', 'year'],
            // possible values: webPosterMedium, webPosterLarge, webBackdropMedium, webBackdropLarge
            images: ['webPosterLarge'],
        };

        const { data } = await moviesAjax.get(`search/${title}`, {
            params,
        });

        if (data.Error) {
            throw data.Error;
        }

        return data.items;
    }
}
