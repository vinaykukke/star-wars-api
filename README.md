# Project organization

This project follows Alexis Mangin's modular organizational suggestions described in

* [How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)
* [How to use Redux on highly scalable javascript applications?](https://medium.com/@alexmngn/how-to-use-redux-on-highly-scalable-javascript-applications-4e4b8cb5ef38)

I try to follow these standards to the best of my abilities.

# Project setup info

* The project is setup for webpack HRM to work properly.

* Routing was accidentally setup with `react-router` even though there are no active routes apart from `http://localhost:4000`. I assumed that it was going to be done in multiple pages when i first began setting up, but it remains in the application since its a waste of time to now remove it.


## Getting started

Simply run
```bash
yarn && yarn dev
```
and navigate to `http://localhost:4000`

## React-specific suggested workflow

This project uses React, Redux, and Sagas to manage state and render the app. To keep the app in a consistent state and allow for clean development on code related to these three libraries:

1. Decide shape of store
2. Action type constants
3. Action creators
4. Reducer
5. Sagas (optional)
6. Components
7. Containers

# Styles

Documentation of the naming convention for styled Components

## Naming convention

* Always use "S" at the beginning of the component name. It is easier to findout that the component is a styled-component and not a regular component.


```js
export const Menu
export const MenuItem
```

```js
import * as S from 'index.styles';

<S.Menu />
<S.MenuItem />
```
