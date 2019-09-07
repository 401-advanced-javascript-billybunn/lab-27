![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

<!-- LINKS -->
<!-- Replace the link for each in brackets below -->
<!-- PR (working into submission) -->
[1]: https://github.com/401-advanced-javascript-billybunn/lab-27/pull/1
<!-- travis build -->
[2]: https://travis-ci.com/401-advanced-javascript-billybunn/lab-27/builds/109370444


[![Build Status](https://travis-ci.com/401-advanced-javascript-billybunn/lab-27.svg?branch=working)](https://travis-ci.com/401-advanced-javascript-billybunn/lab-27)
## React Testing and Deployment

### Author: Billy Bunn

### Links and Resources
* [PR][1]
* [travis][2]

#### Deployments
* [AWS S3 Bucket](http://401d29-lab-27.s3-website-us-west-2.amazonaws.com)
* [AWS Cloud Formation](https://bb401d29lab27stack-bb401d29lab27bucket-10p1se2gwpdnu.s3-us-west-2.amazonaws.com/index.html)
* [Netlify](https://bb-401d29-lab-17.netlify.com/)

#### Documentation
* [React Styleguidist](https://github.com/401-advanced-javascript-billybunn/lab-27/tree/working/styleguide)

### Modules
#### `index.js`
Entry point for the React application. Requires React and React DOM as dependencies, so it can render content to the page. Contains the `Main` React class component, i.e., `class Main` extends the `React.Component` class and uses its `render()` function to return `<App />`.

Everything rendered through index.js is rended to the DOM in the `#root` div in `index.html`.

#### `app.js`

##### `Counter` React class component. 
* `Counter` has a constructor function that takes `props`—the React component properties—as a parameter. The constructor also contains the `state` of the `Counter` component, a property that tracks the current number on the counter displayed in the DOM.

The `Counter` class component has three methods:
   * `handleDown` - takes an `event` object as a parameter and changes the `state` of `Counter` to a number one less than the current `state` (using `this.setState`).
   * `handleUp` - identical to `decrement`, but instead increases the current state by one.
   * `render` - defines the markup rendered to the DOM: two `<a>` tags (for decrementing and incrementing) and a `<h4>` containing the current count. This is an inherited method from `React.Component`

##### `App` React class component
* `App` uses its inherited `render()` method to return the three main components as markup: `Header`, `Counter`, and `Footer`.

#### `header.js`
React class component containing markup for the header.

#### `footer.js`
React class component containing markup for the footer.

#### `app.scss`
Sass CSS styling for the entire application.

#### Tests
* `npm run test`

#### UML
![UML Diagram](https://i.imgur.com/1wN8scu.jpg)
