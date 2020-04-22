## About the App
This app is used to send files directly from one user to another using WebRTC.  
Unfortunately because of NAT in some cases connection can't be established without TURN server. I've decided not to use it, but you can add one in [configuration](https://github.com/axylen/file-share/blob/master/src/lib/webrtc/WebRTCConnection.ts).

## Run app

### Configuration

Before starting the app you should create `.env.local` file in root directory with [configuration](https://firebase.google.com/docs/web/setup#config-object):

```javascript
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
```
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
