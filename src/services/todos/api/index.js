import * as firebase from 'firebase';

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAFjm2XoVJ14HUbKhVsfCNQhZZE18k21-I",
    authDomain: "todomvc-b69b8.firebaseapp.com",
    databaseURL: "https://todomvc-b69b8.firebaseio.com",
    projectId: "todomvc-b69b8",
    storageBucket: "todomvc-b69b8.appspot.com",
    messagingSenderId: "866883233219"
});

const database = firebaseApp.database();
const todosRef = database.ref('/todos');

const get = () => {
    return todosRef.once('value').then(function(snapshot) {
        return snapshot.val();
    });
}

const update = todos => {
    return todosRef.update(todos);
}

export default {
    get,
    update,
}
