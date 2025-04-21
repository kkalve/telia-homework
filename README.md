# Movie search

Small test exercise for TeliaTV.

## Requirements

- For development, you will need NodeJS (https://nodejs.org/en/) installed in your environment.
  Tested with NodeJS version v14.17.1.
- It is also recommended to have git installed - https://github.com/git-guides/install-git and have a GitHub account.

## Version control

Do not fork this repository, as it would be visible to other candidates.

1. On GitHub.com, create a new **private** repository named `<your-username>/telia-homework`, do not add `README` or `gitignore` file during initialization.
2. Clone this repository:
   ```
   git clone git@github.com:kkalve/telia-homework.git && cd telia-homework
   ```
3. Update the repository's remote URL to point to your private repository:
   ```
   git remote set-url origin git@github.com:<your-username>/telia-homework.git
   ```

Once you have successfully completed your project, you must open project settings in GitHub.com and add collaborators for code review:

- Kaspar Kalve (@kkalve)
- Roman Petrov (@petrov-roman)
- Kenert Karu (@karukenert)

## Setup

- Install Node packages with the following command in project root: `npm install`.
- Start development server with `npm start` command.
- Application can be opened from http://localhost:8080

## Configuration

Configuration is in src/Config.ts file.
TeliaTV live public API is used for the application, imageBaseUrl is used for displaying images.

## Complete tasks

- Complete tasks in [TODO](TODO.md)
- Feel free to refactor existing code as you see fit. Good luck!
