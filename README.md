# Full Stack Open

---

## About

Repository to save my advance in this FullStack course : https://fullstackopen.com/

----

### Set each project

Basic understanding of React library.To initialize each exercise; instead of download the [first-react-template](!) everything was setup from scratch following the steps from [here](!https://javascript.plainenglish.io/create-a-react-app-from-scratch-in-2021-8e9948602e9c):

```
mkdir {exercicename} && cd {exercicename}
mkdir src/ && cd src/ && touch index.js && touch App.js && touch index.html && cd ..

npm init -y
npm i webpack babel-loader @babel/preset-react @babel/core babel-preset-react html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties webpack-cli -D && npm i react react-dom -S

touch .babelrc && touch webpack.config.js
```

---

### [M0] Fundamentals of WebApps

Basic understanding about web pages.

* **0.1**: Read [HTML basics tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
* **0.2**: Read [CSS basics tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
* **0.3**: Read [HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)
* **0.4**: Make a [mermaid](!https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) diagram about a *new note action*
* **0.5**: Make a [mermaid](!https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) diagram about a *entering a SPA*
* **0.6**: Make a [mermaid](!https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) diagram about a *new note on a SPA*

----

### [M1] React

<u>Exercices</u>:

* **1.1 to 1.5 courseinfo**
  * Given an `index.js`code and a `App.js` code *refactor* everything to fit into three components : *Header, Content and Total*. 
  * Given the component `Content` refactor in order it contains a *Part* subcomponent.
  * Refactor to use Objects (dicts) on `parts{i}` variables.
  * Refactor to use a loop for each part in parts and to use sum() of number in parts in the Total.
  * Refactor to use an array of Objects (dict) in parts and change *Content* and *Total* to avoid crashes.
* **1.6 to 1.11 unicafe**
  * Make an app that stores the cafe feedback votes.
  * Add some statistics : mean and total over *good* valuations.
  * Refactor in order so that *Stats* is a component by itself.
  * Add a state handler to no-show stats if no-votes.
  * Refactor code to include components *StatisticLine and Button* without nesting on other components.
  * Refactor to add a stats data into a <table>.
* **1.12 to 1.14 anecdotes**
  * Find out how to generate random numbers and include a button that picks a randomly selected anecdote from the list.
  * Expand the app so that you can vote the displayed anecdote. These votes are stored in an NB array/object in the component's state.
  * Expand the app to include a second part that displays the most voted anecdote.

----

### [M2] React pt.2

* **2.1 to 2.5 courseinfo**
  * Doing the same project as in *1.1-1.5* but applying the principles of modularization, event handling and composition.
  * Refactor de app to avoid `key`errors on console.
  * Refactor de app to include de total num of exercices as a bold line outside the course content.
  * Refactor de app to allow list of multiple courses, in order to increase dinamicaly as the data.
* **2.6 to 2.10 phonebook**
  * Create a new app that allows to add new contacs to a list of contacts (name and phone number).
  * Refactor the app to show an alert if the contact already exists
  * Add a filter input that updates the contacts' list when rerenderig.
  * Add al least three components: *filter, personform and persons*
* **2.11 to 2.17 phonebook**
  * Set a local json-server with new data to show
  * Use an effect hook to update states when adding new contacts.
  * Add new features expanding the server comunication: delete contact, change phone number; with its alert windows.
  * Change the alerts' windows for notifications pop-ups.

* **2.18 to 2.20 countries**
  * Set a new app that shows information about countries from an external API:
  * Render different information by filtering the number of countries found at the input update.
  * Add two ways to show information about a country: a "show" button next to a country in the list of countries found; or when only one country matches the search input.
  * Integrate a weather API that shows: temperature, wind and weathercode.

----

