# GlobalState
Using CreateContext API to do global state in React

# Introduction

An example of how to do Global State in React using Context API

# Usage

````
npm i
````
#
````
npm run dev
````

# Description

GlobalContext component written to hold state which can then be passed to component children.  This is a much cleaner way of accessing state in various 
components and avoids using prop drilling and redux.

Component ShoppingList uses the state held in GlobalContext to display list of items.  AddItem component allows an item to be added to the list. 


