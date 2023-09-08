## Task 1 (story)
Display detailed information when search result is clicked.
Currently only poster is displayed. Movie title, plot, IMDB rating should also be displayed.
TODO:
- Implement new request to TeliaTV API to get additional metadata. API url takes item type and id as parameters, ie. https://api.teliatv.ee/dtv-api/3.2/en/assets/66434
- Display the title and original title
- Display plot (description)
- Display IMDB rating out of 10

## Task 2 (bug)
When search button is double-clicked, then duplicate results are displayed.
Expected behaviour is to show only 10 results.

## Task 3 (story)
To optimize application performance multiple similar requests should be avoided.
If user has already searched some keyword then this result can be cached and reused later without new API request.
This cache does not have to survive reload or restart of the application.
TODO:
- Implement cache for Movies search method.

## Task 4 (story)
Pagination - user can browse more results by using "load more" link.
TODO:
- Add "load more results" link below search results.
- By clicking the link, a new API search request is done with a different offset
- New results should appear below previous ones.
- "load more results" link should not be displayed when there are no more items to load

## Task 5 (story)
Search results are updated without clicking "SEARCH" button. Results should be updated automatically after user
stops typing. There should be about 300ms delay before search results are updated. E.g. when single character is entered then
there is 300ms delay. When next character is entered during this period then this delay will be reset. This avoids
unnecessary updates while user is typing. Automatic searching should be done when at least 3 characters have been typed.

## Task 6 (bug)
When searching for empty string or 1 character string then API returns an error response.
"Error: Error: Request failed with status code 400" is displayed to the user.
Handle these 2 error cases to display correct error message:
TODO:
* Searching for empty string should be disabled
* Searching for 1 character string returns an error 400, display the message to the user

## Bonus task
Display number of unique words (case-insensitive) in the plot text of the movie.
Display this number after the plot in the detailed information container completed in task 1.
