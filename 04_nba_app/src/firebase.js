import * as firebase from 'firebase'

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyCVZ8PFTqgLvrzlBn3YSdf3hRZzgxXJoV8",
    authDomain: "nba-fullstack-e2f1a.firebaseapp.com",
    databaseURL: "https://nba-fullstack-e2f1a.firebaseio.com",
    projectId: "nba-fullstack-e2f1a",
    storageBucket: "nba-fullstack-e2f1a.appspot.com",
    messagingSenderId: "501497024959"
  };
  
  
  firebase.initializeApp(config);
  
  const firebaseDB = firebase.database()
  const firebaseArticles = firebaseDB.ref('articles')
  const firebaseTeams = firebaseDB.ref('teams')
  const firebaseVideos = firebaseDB.ref('videos')
  
  const firebaseLooper = snapshot => {
    const data = []
    snapshot.forEach(childSnapshot => {
      data.push({
        ...childSnapshot.val(),
        id: childSnapshot.key
      })
    })
    return data
  }
  
  export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
  }