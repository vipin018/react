# React App

## IMPORTANT 

### React Hooks

- React Hooks are functions that allow you to use state and other React features in functional components.
#### useState

- useState is a hook that is used to create a state variable.
- useState is a function that returns an array with two elements.
- The first element is the state variable.
- The second element is the function that updates the state variable.

syntax:
```
const [state, setState] = useState(initialState);
```
example:
```
const [a, setA] = useState(0);
```
here `a` is the state variable and `setA` is the function that updates the state variable.






### form handling

- form handling is a process of handling the form data, it prevents the default behavior of the form by not refreshing the page.

- how can we handle the form?
by using the preventDefault() method.

example:
```
const handleSubmit = (e) => {
  e.preventDefault()
}