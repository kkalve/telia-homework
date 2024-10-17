# Movie search
Small test exercise for TeliaTV.

## Requirements
- For development, you will need NodeJS (https://nodejs.org/en/) installed in your environment.
Tested with NodeJS version v14.17.1.
- It is also recommended to have git installed - https://github.com/git-guides/install-git and have a GitHub account.

## Version control
Do not fork this repository, as it would be visible to other candidates.
Download this project to your computer by using the green "Code" button and selecting "Download Zip".
Unzip it and add it to your own GitHub account project. Or clone it and change origin.
In GitHub.com create new PRIVATE repository "<your-username\>/telia-homework", do not add README or gitignore.

On your computer run inside telia-homework folder:
- `git init`
- `git remote add origin https://github.com/<your-username\>/telia-homework.git`
- `git branch -M master`
- Add all files and commit with message `git commit -m "Initial commit"`
- `git push -u origin master`

Once you have successfully completed your project, you must open project settings in GitHub.com and add collaborators for code review:
- Kaspar Kalve (@kkalve)
- Jaagop Janson (@JJaks)
- Kenert Karu (@karukenert)
- Roman Petrov (@petrov-roman)

## Setup
- Install Node packages with the following command in project root: `npm install`.
- Start development server with `npm start` command.
- Application can be opened from http://localhost:8080

## Configuration
Configuration is in src/Config.ts file and should not be changed.
TeliaTV live public API is used for the application, imageBaseUrl is used for displaying images.

## Complete tasks
- Complete tasks in [TODO](TODO.md)
- Feel free to refactor existing code as you see fit. Good luck!
