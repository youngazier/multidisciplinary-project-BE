# login-interface

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Features
- Register/ Login
- Logout
- Feed (Only for Logged-in User)
- Request Support Form (for User)
- Request Support (for Admin)
- Admin (Request List for Admin)

## More details

### main.js
- Use to config Firebase, initialize App and Firebase

### /.router/index.js
- Create Router, WebHistory
- ```getCurrentUser()```: is used to obtain the currently authenticated user in a Firebase authentication setup.
- ```router.beforeEach()```: Checking if the user is authenticated before allowing access to certain routes.

### Home
- Nothing yet

### Feed
- Nothing yet
- Only for Logged-in User

### Register
- Using Authentication Method from Firebase
- We can fill in our Email or using "Sign In With Google"

### Sign In
- Using Authentication Method from Firebase
- We can fill in our Email or using "Sign In With Google"

### Request Support Form 
- For User to request a support 
- Simple text box
- The request will be sent and stored in Firebase

### Emergency Request Form
- Nothing yet
- TODO: Send live location to Admin for Emergency Request

### Admin
- Can check Request Support List, and Emergency Request List
- Unfinished Tasks: Only access by Admin Account, Emergency Request, 


