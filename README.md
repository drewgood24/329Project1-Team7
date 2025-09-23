<h1>CPRE 329: Project Expedia</h1>

<p>This project is a clone of the Expedia website, optimized by a team of 5 consisting of Adeife Fadahunsi, Thabang Pila, Andrew Gooding, Phuong Thanh Thuy Tran, and Adomale Kiobel. The purpose of this project is to showcase our skills and knowledge in HTML, CSS, JavaScript, React, Redux, and Json-Server.<p>

<h2>Folder structure</h2>

```text
329Project1-Team7/
├─ db.json
├─ firebase-debug.log
├─ firebase.json
├─ package.json
├─ README.md
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
└─ src/
	├─ App.css
	├─ App.js
	├─ App.test.js
	├─ baseurl.js
	├─ index.css
	├─ index.js
	├─ logo.svg
	├─ reportWebVitals.js
	├─ setupTests.js
	├─ 01_firebase/
	│  └─ config_firebase.js
	├─ Components/
	│  ├─ CarInput.jsx
	│  ├─ Footer.jsx
	│  ├─ Navbar.jsx
	│  └─ HomePageComponents/
	│     ├─ Banner1.jsx
	│     ├─ HelpBoxes.jsx
	│     ├─ ImageQRCodeBanner.jsx
	│     ├─ MainInputBox.jsx
	│     ├─ ManSeeBanner.jsx
	│     └─ QatarVisitBanner.jsx
	├─ Pages/
	│  ├─ AllRoutes.jsx
	│  ├─ CheckoutPage.jsx
	│  ├─ HomePage.jsx
	│  ├─ login.css
	│  ├─ Login.jsx
	│  ├─ Register.jsx
	│  ├─ Admin/
	│  │  ├─ Admin.Module.css
	│  │  ├─ AdminDashboard.jsx
	│  │  ├─ AdminDashboard.Module.css
	│  │  ├─ AdminFlight.jsx
	│  │  ├─ adminProduct.css
	│  │  ├─ AdminProducts.jsx
	│  │  ├─ AdminStay.jsx
	│  │  └─ AllHotels.jsx
	│  ├─ Flights/
	│  │  ├─ Flight.jsx
	│  │  ├─ FlightCard.jsx
	│  │  ├─ FlightData.jsx
	│  │  ├─ FlightList.jsx
	│  │  ├─ homePage.css
	│  │  └─ SideBar.jsx
	│  ├─ Stay/
	│  │  ├─ CheckInCheckOut.module.css
	│  │  ├─ city.js
	│  │  ├─ Pagination.jsx
	│  │  ├─ PriceFilter.jsx
	│  │  ├─ PriceSlider.css
	│  │  ├─ PriceSlider.jsx
	│  │  ├─ ShowCalender.jsx
	│  │  ├─ Sidebar.jsx
	│  │  ├─ Stay.jsx
	│  │  ├─ Stay.module.css
	│  │  ├─ StayData.css
	│  │  └─ StayData.jsx
	│  └─ ThingsTodo/
	│     ├─ Destination.jsx
	│     ├─ DestinationCard.jsx
	│     ├─ InputBox.jsx
	│     └─ PrivateRouteTTD.jsx
	└─ Redux/
		├─ store.js
		├─ AdminFlights/
		│  ├─ action.js
		│  ├─ actionType.js
		│  └─ reducer.js
		├─ AdminHotel/
		│  ├─ action.js
		│  ├─ actionType.js
		│  └─ reducer.js
		├─ Authantication/
		│  ├─ auth.action.js
		│  ├─ auth.actionType.js
		│  └─ auth.reducer.js
		└─ StayReducer/
			├─ action.js
			├─ actionType.js
			└─ reducer.js
```

<h2>Tech Stack</h2>

- HTML
- CSS
- JavaScript
- React
- Redux
- Json-Server
- firebase


<h2>Dependency</h2>

- axios
- redux
- react-redux
- redux thunk
- chakraUI
- firebase
- font-awesome
- json-server
- react-router-dom
- better-react-carousel

<h2>Features</h2>

- Landing Page
- Login and signup via firebase (OTP).
- View details of flights, hotels.
- Search for flights, hotels, and holiday packages
- Sorting & Filtering and Seraching
- Book flights, hotels.
- Cart Section
- Admin Panel

<h2>Installation</h2>

To run this project locally, follow the steps below:

. Clone the repository by running the following command:
git clone https://github.com/drewgood24/329Project1-Team7.git

. Navigate to the project directory:
cd 329Project1-Team7

. Install the dependencies:
npm install

. Start the server:
npm start

. Open the website in your browser:
http://localhost:3000/


<h2>Deployment</h2>

This project has not been deployed to a live server but can be run locally using Firebase emulators. Below are the steps we used to deploy the app locally with Firebase.

### Deploy locally with Firebase Hosting

1. Install the Firebase CLI (if you don't have it):

```powershell
npm install -g firebase-tools
```

2. Log in to Firebase:

```powershell
firebase login
```

3. Initialize Firebase Hosting in the project root (choose the existing Firebase project or create a new one; set `build` as the public directory if using Create React App):

```powershell
firebase init hosting
```

When prompted:
- Select the Firebase project (or create a new one)
- Set the public directory to `build`
- Configure as a single-page app? Yes (rewrite all URLs to /index.html)
- Overwrite? No (keep existing files)

4. Build the React app:

```powershell
npm run build
```

5. Serve the built site locally via Firebase Hosting:

```powershell
firebase serve --only hosting
```

This will serve the content at http://localhost:5000 by default (the CLI will print the exact URL).

### Use Firebase Emulators

1. Install/enable emulators during init (choose Emulators > Hosting and Auth). Then start the emulators:

```powershell
firebase emulators:start
```

2. The emulators UI and local endpoints will be printed in the terminal (commonly at http://localhost:4000). Use this to test Auth.


#### Testing Phone Auth with the Auth Emulator

Our Project features for sign up and login is setup using Firebase Phone Authentication which you can test locally by using the Auth emulator and adding a fake/test phone number. Here are the steps:

1. Ensure the Auth emulator is enabled in the `firebase.json` (during `firebase init` select Emulators > Auth). A minimal `firebase.json` snippet looks like:

```json
{
	"emulators": {
    "singleProjectMode": true,
    "auth": {
        "port": "9099"
    }
  }
}
```

2. Start the emulators from the project root:

```powershell
firebase emulators:start
```

3. Open the Emulator UI in your browser (the CLI prints the exact URL, commonly http://localhost:4000) and navigate to the Auth section.

4. Add a test phone number:

- Use the Emulator UI:
	- In the Auth panel click "Add user" and provide a clearly-marked test phone number (for example, +15555550000).

5. On another terminal, navigate to the project directory and run npm start.

6. Navigate the web app to test login/sign-up flows using the test phone number. 
    - Once you sign-up, the OTP will be displayed in the terminal running the emulator.

Notes & tips:
- When finished, stop the emulators with Ctrl+C in the terminal running `firebase emulators:start`.



