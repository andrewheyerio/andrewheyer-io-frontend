React
=====

Wut do
######

Start a React app
-----------------
This command creates a basic build process for creating a SPA react app.

.. code-block::

    npx create-react-app my-app-name

Theory & Concepts
#################

It's a Library
--------------
* Used for composing UI's from components.
* Not to be confused with a Framework such as React Native, Angular or VUE.
* Pure React components are essentially Javascript syntactic sugar

React Component
---------------
* Tells React what the client should see (aka Render)
* A JS function that returns JSX - aka **React Elements**
* JSX is Reacts syntax for HTML + JS, for example

.. code-block::

    return <h1>{greetings}</h1>

* In order for JSX to compile it must have at least 1 <a> tag
* The reason JSX is used is because it makes writing React Components easier. For example;

.. code-block::

    <h1> == React.createElement(h1....);

Interactive Component
^^^^^^^^^^^^^^^^^^^^^
* A react component that can interact with the user. For example;

.. code-block::

    <onClick = {function() {console.log('Click'); }} >
    <onClick = {() => console.log('Click'); } >

* The above two lines are the same, arrow notation makes it easier to write.
* A common mistake that developers do is demonstrated below.

.. code-block::

    <onClick = {console.log('Click'); } >
    <onClick = {() => {console.log('Click'); }} >

* The first line will log on ever re-render, whereas the second won't.

Controlled Component
^^^^^^^^^^^^^^^^^^^^
* A React component that does not contain State.
* However, it can change state by calling functions passed down to it

Function Component
^^^^^^^^^^^^^^^^^^
* React component that only has a render method

Composition
-----------
* This is what occurs when a JS Function component contains a react component

Props
-----
* Essential parameters or arguments for passing data down into children objects or functions.
* To me, Props is peculiar in that it will contain functions to modify high level state.
* Can be left empty, however authoritative sources say it's best to include props argument even when not needed.

State
-----
* Every component can have a state
* this.state should be private to its components
* It's always a good idea for state to be "lifted up" as much as possible

Constructor
-----------
* In JS classes, you must call super to define a constructor in a subclass, for example;

.. code-block::

    constructor(props) {
        super(props) {

        # state values defined here

        }
    }


React Virtual DOM
_________________
* A Tree based virtual representation of your DOM.
* Used for identifying the changes in state from your virtual DOM in comparison to your actual DOM
* This comparison process is called "Diffing"
* This procedure is why React is considered efficient since it **only** updates the changes in DOM

Immutable Data
--------------
* By adopting immutable data architecture we gain some benefits.
* Complex features are made simple - "undo" features for example which is a common requirement.
* Detecting changed is much easier, therefore determining when to re-render is easier.

List Keys
---------
* Tell react how to identify a list item.
* These keys cannot be referenced.
* Assign proper keys when building dynamic lists.
* Only need to be unique among siblings.
* Don't use array index's, this is bad practice and makes debugging difficult. 
