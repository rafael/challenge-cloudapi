# CloudApi Challenge

This app is created in React and the propose is connect with my-user-manager api and list the info from users in a view.

### First Time Setup

- Summary of set up
  - Run `npm install`
  - Set up the environments variables. (Should create .env file in project root)

## 🎓 How to use?

​
In the `package.json` you will see these scripts:
​

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
```

1.  **`start`**: Runs the app in the development mode.
    ​
2.  **`build`**: Create a production build.

### Environment Variables ###

Variables                          | Usage
-----------------------------------| -------------------------------------------------------------------------
REACT_APP_USERS_API(*)             | https://my-user-manager.herokuapp.com/users, URL of api to fetch users.



(*) = required variable.

## Dependencies

- @material-ui/core: Styles.
- @material-ui/icons: Styles.
- axios: Promise based HTTP client.
- react: Front End library.
- react-dom: Rendering the components in the DOM.
- react-scripts: Read scripts.

