
# React Server Side Rendering

React server side rendering uses next.js to build applications.

## Setup

Use this documentation for [Setup](https://nextjs.org/docs/) and to install Next, react and react-dom.

```bash
yarn add next react react-dom
 or 
npm i next react react-dom
```

### Add a script to your package.json like this:

```
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

## File structure
You need to follow definite folder structure for create react app with NextJs server side app.

- First you need create pages folder and create index.js file inside of it.
- In the index.js file write either class or functional component or paste below code into index.js file inside the pages folder.
```
function Home() {
  return <div>Welcome to Next.js!</div>;
}

export default Home;
```
and then just run ```npm run dev ```  and go to ```http://localhost:3000.``` To use another port, you can run ```npm run dev -- -p <your port here>```.

#### So far, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Server rendering and indexing of ./pages
- Static file serving. ```./static/ is mapped to /static/ (given you create a ./static/ directory inside your project)```

### How to write Css
 We can use ``` style ``` tag to apply css like internal stylesheets
```
function HelloWorld() {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  );
}

export default HelloWorld;
```


#### Importing CSS / Sass / Less / Stylus files

```
npm install --save @zeit/next-css
```
The stylesheet is compiled to .next/static/css. Next.js will automatically add the css file to the HTML. In production a chunk hash is added so that styles are updated when a new version of the stylesheet is deployed.

- Create a next.config.js in the root of your project (next to pages/ and package.json)

``` // next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS()
Create a CSS file style.css
```

```
.example {
  font-size: 50px;
}
```
Create a page file pages/home/index.js

```
import "../style.css";

export default () => <div className="example">Hello World!</div>
```

### Adding Bootstrap

``` 
yarn add bootstrap
 ```

import a Bootstrap in the required files

```
 import "bootstrap/dist/css/bootstrap.min.css"; 
```

### Add Font awesome icons
