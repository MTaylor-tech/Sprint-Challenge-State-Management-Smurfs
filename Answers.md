1. What problem does the context API help solve?

Context API handles the passing of data and state around a React app without requiring that the data be passed down the tree through props. This prevents the need to pass everything down to each component in case it is needed by a sub-component, because the sub-component is able to access the Provider directly.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is the part of the app that holds the state for the whole app. Any data which will be used throughout the app will live here, to be accessed by components, which will run actions to retrieve or alter that data. The actions are functions that construct the correct dispatch calls to send to the reducers to alter state appropriately. Actions may also make asynchronous calls to outside APIs.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Each component may hold its own state, which is the data needed by that particular component, or might include temporary data such as entries in a form before they are submitted, but sometimes data is needed throughout the application in many components. In this case, Application state can be stored in a Redux store or Context Provider.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a middleware that sits between the actions and the Redux store to enable asynchronous actions. This allows for access to outside APIs, because it takes time to receive data from external servers, and that data might arrive at any moment.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Even though it is larger and more complicated than Context API, I prefer to use Redux, because the actions mimic API calls and database syntax and is very easily set up to get information from an outside source.
