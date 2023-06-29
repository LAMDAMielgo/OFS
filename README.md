# Full Stack Open

---

## About

Repository to save my advance in this FullStack course : https://fullstackopen.com/

---

### [M0] Fundamentals of WebApps

Basic understanding about web pages.

* **0.1**: Read [HTML basics tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
* **0.2**: Read [CSS basics tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
* **0.3**: Read [HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)
* **0.4**: Make a [mermaid](!https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) diagram about a *new note action*
* **0.5**: Make a [mermaid](!https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) diagram about a *entering a SPA*
* **0.6**: Make a [mermaid](!https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) diagram about a *new note on a SPA*

---

### [M1] React

Basic understanding of React library.To initialize each exercise; instead of download the [first-react-template](!) everything was setup from scratch following the steps from [here](!https://javascript.plainenglish.io/create-a-react-app-from-scratch-in-2021-8e9948602e9c):

```
mkdir {exercicename} && cd {exercicename}
mkdir src/ && cd src/ && touch index.js && touch App.js && touch index.html && cd ..

npm init -y
npm i webpack babel-loader @babel/preset-react @babel/core babel-preset-react html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties webpack-cli -D && npm i react react-dom -S

touch .babelrc && touch webpack.config.js
```



Exercices:

* **1.1 courseinfo**

  Given an `index.js`code and a `App.js` code *refactor* everything to fit into three compoents : *Header, Content and Total*. 

* **1.2 courseinfo**

  Given the component `Content` refactor in order it contains a *Part* subcomponent

* **1.3 couseinfo**

  Refactor to use Objects (dicts) on `parts{i}` variables

* **1.4 courseinfo**

  Refactor to use a loop for each part in parts and to use sum() of number in parts in the Total

* **1.5 courseinfo**

  Refactor to use an array of Objects (dict) in parts and change *Content* and *Total* to avoid crashes.

* **1.6 unicafe**

  Make an app that stores the cafe feedback votes.

* **1.7 unicafe**

  Add some statistics : mean and total over *good* valuations.

* **1.8 unicafe**

  Refactor in order so that *Stats* is a component by itself

* **1.9 unicafe**

  Add a state handler to no-show stats if no-votes.

* **1.10 unicafe**

  Refactor code to include components *StatisticLine and Button* without nesting on other components.

* **1.11 unicafe**

  Refactor to add a stats data into a <table>.

* **1.12 anecdotes**

  Find out how to generate random numbers and include a button that picks a randomly selected anecdote from the list.

* **1.13 anecdotes**

  Expand the app so that you can vote the displayed anecdote. These votes are stored in an NB array/object in the component's state.

* **1.14 anecdotes**

  Expand the app to include a second part that displays the most voted anecdote.

​	
