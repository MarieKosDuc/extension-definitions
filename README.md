
# Technical definition - an API to learn tech defs while studying at Ada Tech School

By Marie Koscianski-Ducharlet, personal project during my studies at [Ada Tech School](https://adatechschool.fr/)

Ada students, feel free to download the repo and use this extension in your browser if you feel like it - and message me at (marie.koscianski@gmail.com) if some definitions seem unclear, I chose those that suited me the most, but I'm more than ready to make this tool collaborative by adding your inputs!

## Project overview

This project spans two repositories: this one for the front-end, [here](https://github.com/MarieKosDuc/api-technical-definitions) for the back-end.

From the beginning of my studies as a would-be software engineer, I've felt the need to create a tool that would allow me to review the technical definitions I learned week after week. 

The main idea was to create a Google Chrome extension that would display a random definition each time I open a new tab (which happens dozens of times a day). This front-end display would get its data from a REST API.

## Challenges

This is my first full-stack project. After creating a first working version of my API with a "get a random definition" route, I begun by creating a simple HTML/JS/CSS page with a main div that would display a random definition on loading. I then proceded by iterations, adding a button that refreshes the content of that main div, then creating category routes on the API and adding buttons to get a random definition by category.

The CSS was generated using TailwindCSS, a framework I dearly love for its one-page generation of styles and its shorthand that I find easier to apprehend than the native CSS syntax. This is the first webpage that I design alone, and simple as it may be, I'm quite happy with it!

The main challenge was to create the dropdown menus and generate their content in JS. Each dropdown menu is populated by data provided by the API (a list of the category's definitions) and allows the user to access a precise definition by clicking on it - said definition is then displayed in the main div.

This tool is proving quite useful - I now know how to describe a graph structure in a few words !
## Screenshot

![Screenshot](https://github.com/MarieKosDuc/extension-definitions/blob/main/images/Capture%20d'%C3%A9cran%202023-03-17%20130816.png?raw=true)
