# Ozine.js
**Ozine.js** is small library that helps you use states to keep independent the logic from the view. Very similar in its integration to Jquery,  simply include the code in the project and start using it. And inspired on the principles of React. The idea is to bring the Joy of React where it might not be able to be integrated as easy as it is to integrate jQuery.

The project relies on 3 pieces:

 - **Ozine.DOM:** which works as an equivalent to JSX but is able to be plug
   into a UI build in the backend, while completely being agnostic to
   it.
 -  **Ozine.addState:** A state manager which can be added into any object or component.
 - **Ozine.Data:** As an equivalent of Redux to control the state of the entire app at  a single point without being so complicated to set up. And base on the principles used for state.

**Ozine.js** is based on making things simple. The goal is to make code so simple that it’s distributed without being minify allowing people to read the code they are using.

It’s so simple that the three pieces will be able to fit on a medium size t-shirt. In the case of our state manager it fits on a regular cup of coffee.

## Ozine.DOM(html, UI)

Our equivalent to JSX, we can send to the function a string with HTML valid syntax or a real node dom like *document.body* to analyze the entire page. On our regular html syntax we can add the attribute *ref*. In this attribute we can add a dot syntax variable name, when you do that node will be saved into the UI Object.

**Params:**
**Name:** Html
**Type:** (html node/ string)
**Description:** The html node that we will create from HTML syntax string or an already created node to be analyzed to extract references from.

**Name:** UI
**Type:** Object
**Description:** Object where references to html nodes will be saved

**Returns**
**Type:** Html node/ fragment

**For example**

    <div ref=”person.title”></div>

Will attach the html node at:
*UI.person.title*

So if we need to update the content of the DOM is as simple as:

    UI.person.title.innerHTML.= "Hello World";


## Ozine.addState(object)

This is our equivalent to state in React, this function will add the setState function to object sent to it. It will also call **onState** with the changes done to the state before each frame (think of it as being called every x time to sync all the changes, just the way that React.js does it)

**Params:**
**Name:** object
**Type:** (object)
**Description:** Object which setState and onState will be added to.

## Ozine.setState(partialState)

Very similar to React’s equivalent we will be sending a partialState. This is the part of the state we want to be overridden. The state will be merged when requestAnimationFrame is called. This will allow to merge multiple updates to the state at the same time, similar to the way React does.

**Params:**
**Name:** partialState
**Type:** (object)
**Description:** Object with the properties to update the state with.

## Ozine.onState(state_delta)

We will wait for the next time the browser will try to repaint by waiting via using requestAnimationFrame. After that we will call onState in case it has been defined in the object and if a change of state has been requested via setState. Here we will differ from React’s approach: we will send as a param all the changes that have been requested via setState. This will create a nice dynamic when we are updating the UI since we are not using a virtual dom.


**Example**

    var app= {};
    Ozine.addState(app);
    // We print on the page the changes done to the state, in this case both will
    // be apply at the same time so the result will be
    // { a: 1, b: 2 };
    app.onState = function(state){
      document.body.innerHTML=JSON.stringify(state)
    };
    app.setState({a:1});
    app.setState({b:2});

**Example using setState and Ozine.DOM to build UI**

[https://codepen.io/anon/pen/KOVdKZ?editors=0010](https://codepen.io/anon/pen/KOVdKZ?editors=0010)
