import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAagydYAEaAUjk8bUFzvXi17bAwWQMh5G4",
    authDomain: "test-720bb.firebaseapp.com",
    databaseURL: "https://test-720bb.firebaseio.com",
    projectId: "test-720bb",
    storageBucket: "test-720bb.appspot.com",
    messagingSenderId: "32361078111",
    appId: "1:32361078111:web:8b8ba8912c3b2f3c"
  };
const fire = firebase.initializeApp(config);
export default fire;