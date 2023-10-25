# QR Code Generator 

Using React and eventually DALL-E integration to auto generate cute QR codes like dis: 

<img width="333" alt="image" src="https://github.com/margaretjgu/QRCodeGenerator/assets/136839162/8b5ad2b3-48d1-4ae7-b149-6aaf59ef33b4">


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### adding extension to chrome

1. `npm run build`
2. navigate to `chrome://extensions/` on chrome
3. enable developer mode (top right corner)
4. select `load unpacked` on top left corner
5. upload only the `build` folder that was generated when executing step 1

### To do
- [X] persist existing QR codes when navigating between tabs
  - [X] display URL link of prev QA code
- [ ] new ACTION to generate QR for current tab (without pasting URL)
- [ ] new ACTION to generate shortened URL - bitly integration
  - [ ] use `chrome.storage`/`chrome.sync` instead of `localStorage`
  - [ ] integrate bitly accounts/users
- [ ] UI/UX redesign 
