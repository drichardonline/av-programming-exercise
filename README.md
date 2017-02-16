# Start Here

To run the project:

1. Clone into local directory. 
- git clone --depth 1 https://github.com/drichardonline/av-programming-exercise <local_dir_name>
- cd <local_dir_name>
2. npm install
3. npm start

The script will start the app and automatically open the browser and load the application in dev mode. If the browser does not open automatically, you can manually navigate to http://localhost:5555/, which is the default url config for the app.

The project follows the angular-seed project mentioned below, which has far more capabilities than needed for this demo. We can ignore all of those for the demo exercise.

Reference to starter seed project used here: https://github.com/mgechev/angular-seed.

# Application Details

This app uses Angular 2, Typescript, and Bootstrap. Only the css from Bootstrap is used as that is sufficient for this project without needing Bootstrap's js dependencies.

## Application Flow

1. User logs in using Facebook credentials.
2. Upon successful login, user is redirected to a geolocation page. This page will show the user's location on a Google Map display.
3. The geolocation page is protected under an auth-guard. It cannot be accessed before signing in, so any attempt to access the page will redirect the user to the login view.
4. The about page is viewable without signing in.
5. The user can click the 'Switch Theme' button on the top right corner to switch the view between 2 themes.

## Application Organization

The source code of the application is located in the src/client/app/ folder displayed below. All other files and folders outside come from the angular seed starter project and can be ignored.

### Directory Structure

├── src                         
│   └── client  
│       ├── app  
│       │   ├── about  
│       │   │   ├── ... The about component's files are in this folder. Similarly for each component folder below.  
│       │   ├── geolocation  
│       │   ├── login  
│       │   ├── notfound  
│       │   ├── shared Components that are commonly shared go under this folder.  
│       │   │   ├── footer  
│       │   │   ├── header  
│       │   │   ├── sidenav  
│       │   ├── index.html  
│       │   ├── ... The root app component and services it uses directly are placed here directly under the /app root.  


### Note on Directory Structure

Files specific to each component go into a folder representing that component. The html files as well the component's css file are also co-located into the same folder. This follows the seed project's architecture so every component can be built as a unit as the project grows in size.

### Additional Notes

A rudimentary ability to apply themes is provided. The 'Switch Theme' button in the top right header area simply rotates the user between two themes.

The app applies theme by attaching a css class to the root span tag that encloses everything. The theme styles are kept in the root css/main.css file instead of individual component files since only minimal style changes are required. This is merely to demonstrate theming in the exercise app. In a more robust app, these can be designed in a better way.
