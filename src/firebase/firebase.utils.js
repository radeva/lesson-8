
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const config = {
//     apiKey: "AIzaSyDVPZGuMrggCpNhy43TMrTd9OnvJnJ2o88",
//     authDomain: "crwn-db-1f358.firebaseapp.com",
//     databaseURL: "https://crwn-db-1f358.firebaseio.com",
//     projectId: "crwn-db-1f358",
//     storageBucket: "crwn-db-1f358.appspot.com",
//     messagingSenderId: "539713738476",
//     appId: "1:539713738476:web:c9b2560fa7a56ed26fb7c9"
// };

// firebase.initializeApp(config);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       });
//     } catch (error) {
//       console.log('error creating user', error.message);
//     }
//   }

//   return userRef;
// };

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;


import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDVPZGuMrggCpNhy43TMrTd9OnvJnJ2o88",
    authDomain: "crwn-db-1f358.firebaseapp.com",
    databaseURL: "https://crwn-db-1f358.firebaseio.com",
    projectId: "crwn-db-1f358",
    storageBucket: "crwn-db-1f358.appspot.com",
    messagingSenderId: "539713738476",
    appId: "1:539713738476:web:c9b2560fa7a56ed26fb7c9"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = await userRef.get();

    if(!userSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

