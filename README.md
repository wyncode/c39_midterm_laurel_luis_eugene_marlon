# Node / Create-React-App mashup

Read the instructions thoroughly before starting your project.

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `git push heroku master`

## Project Requirements

- [ ] Your project should pull data from an API. There are lots of options [here](https://github.com/toddmotto/public-apis) and [here](https://market.mashape.com/).
  - Avoid any APIs that require OAuth (we'll talk about that later).
  - Many APIs require an API key. Just sign up for an account and attach the key to your URL. Please make sure not to share your secret keys in a public GitHub repo.
  - Some APIs don't allow _Cross-Origin Resource Sharing_ (CORS), meaning you can't make AJAX requests to them. You can get around this by proxying your requests with your Express server.
- [ ] Your project should render a list of data from the API.
  - [ ] Your project should allow the list to be filtered or searched.
- [ ] Your project should show details about a single resource when clicked.
- [ ] Your project should look (really) pretty!
- [ ] You and your team should employ good Git and GitHub collaboration practices.
- [ ] Your project must have a README.md file explaining what the project does and why it matters. [Here's an example](https://github.com/codeforamerica/howto/blob/master/Good-READMEs.md) of a great README.md template.

| Rubric Criterion                                                                         | Points |
| ---------------------------------------------------------------------------------------- | ------ |
| Ability to search or filter, use of React Router                                         | 10     |
| Code formatting and quality: indentation, variable and file naming conventions, etc.     | 10     |
| No unused variables or imports, compiler errors                                          | 10     |
| Proper use of environment variables for API keys or CORS proxy if needed                 | 10     |
| Overall look and feel of application, well organized CSS files                           | 10     |
| Well written documentation                                                               | 10     |
| Use of GitHub issues, branches and commit messages                                       | 10     |
| Look and feel of demo slide deck                                                         | 10     |
| Ability to explain code decisions in demo                                                | 10     |
| Ability to defend code decisions in response to panel questions                          | 10     |

## Bonus

- Fanciful animations and transitions
- Incorporate multiple APIs into a single app

## Demo Requirements

Create a slide deck for the technical panel. (Here's an [example](https://docs.google.com/presentation/d/15rfR-S5qAlzx4rHwBp_kJOlu0nQ7hcZOruTwbH6zRvQ/edit?usp=sharing).)

- It should focus on _how_ you built the app.
- Include code snippets with brief explanations. Or, specific references to the location of the code in your GitHub repo.
- It should emphasize your technical setbacks and solutions.
- Get straight to the point.
- Be prepared to answer questions.


What
What is this and what is it for? Put a meaningful, short, plain-language description of what this project is trying to accomplish and why it matters. Describe the problem this project solves.
Status
This is a finished project. 
Why
ByrdSong is an app that simplifies the music search experience. Rather than being bombarded with unnecessary information designed to sell you more products, users can search for the music they want to listen to with none of the noise. ByrdSong draws on the iTunes API so that users can have access to every song that an apple music user does. 
Who
We have four developers on our team, Luis Perez, Eugene Washington, Marlon Angulo, and Laurel Galaty. 
How
Dependencies
Tell us what we need to know before we even begin with your project. Describe any dependencies that must be installed for this software to work. This includes programming languages, databases or other storage mechanisms, build tools, frameworks, and so forth. If specific versions of other software are required, or known not to work, call that out. Links to other How To’s will help.
In order to use this software, you need to install yarn and axios. Languages used include HTML, CSS, JavaScript, and React. We used Bootstrap for styling as well as React Icons, AOS, and react-router-dom, .
Install
In order to install:
- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.
Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.