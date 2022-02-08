// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAHkgOxon7dVPDSblZCI4BxRTVNbxoTfuM",
    authDomain: "chatapp-9af82.firebaseapp.com",
    databaseURL: "https://chatapp-9af82-default-rtdb.firebaseio.com",
    projectId: "chatapp-9af82",
    storageBucket: "chatapp-9af82.appspot.com",
    messagingSenderId: "386059738680",
    appId: "1:386059738680:web:90f7bd6ac272ca39b910cd",
    measurementId: "G-E1YN7ZVZNC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding room"
      });
  }