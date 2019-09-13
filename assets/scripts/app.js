//console.log("This is loaded!")

var firebaseConfig = {
    apiKey: "AIzaSyDF8DPZGKN7sh4b2swcXwlJxl56CqsxOTE",
    authDomain: "train-scheduler-1e844.firebaseapp.com",
    databaseURL: "https://train-scheduler-1e844.firebaseio.com",
    projectId: "train-scheduler-1e844",
    storageBucket: "train-scheduler-1e844.appspot.com",
    messagingSenderId: "12266883096",
    appId: "1:12266883096:web:25a77eab95199cca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()

//Listener for the form
    //event.prevent stop page from reloading
    //retreive users input from the form
    //validate every field is filled in, all have value
    //add new train to database 
//Listener for the database
    //retreive all of the data
    //calculate the next train time and the minutes away
    //create a table row to hold the data with jquery 
    //create a table data for each item (train name, dest, frequency, next train, minutes to)
    //append all of table data to the table row
    //append to table body