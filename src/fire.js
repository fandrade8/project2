import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyC_G3GeqpVlmGROdU3-tRlzTE0XnNq9blA",
    authDomain: "musicloud-97eec.firebaseapp.com",
    databaseURL: "https://musicloud-97eec.firebaseio.com",
    projectId: "musicloud-97eec",
    storageBucket: "musicloud-97eec.appspot.com",
    messagingSenderId: "5804285435",
    appId: "1:5804285435:web:152d00fa6835dd97a1ff5e"
  };
 var fire = firebase.initializeApp(firebaseConfig);
 export default fire;