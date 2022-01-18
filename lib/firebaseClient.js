import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXhsdju5ms2OzW2LORwkBMjyvhjhrFkaA",
  authDomain: "revuelteria-pro.firebaseapp.com",
  projectId: "revuelteria-pro",
  storageBucket: "revuelteria-pro.appspot.com",
  messagingSenderId: "302067500246",
  appId: "1:302067500246:web:2616bf1bd2ef0069da3577",
  measurementId: "G-7ZMH1CPW02",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().languageCode = "es";
}

const db = firebase.firestore();
export const app = firebase.app();

const customErrors = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "Para ingresar deber regístrarte primero";
    case "auth/email-already-in-use":
      return "Tu correo electrónico ya está registrado";
    case "auth/wrong-password":
      return "Email y/o contraseña invalida";
    case "auth/too-many-requests":
      return "Haz intentado muchas veces, prueba de nuevo más tarde";

    default:
      return "Error no identificado";
  }
};

const mapErrorCode = (error) => {
  throw {
    ...error,
    message: customErrors(error.code),
  };
};

const mapUserFromFirebaseAuthToUser = async (user) => {
  if (user) {
    const { displayName, email, photoURL, phoneNumber } = user;

    const exist = await isPhoneNumberExist({ phoneNumber });

    return {
      loggedIn: true,
      avatar: photoURL,
      username: displayName,
      phoneNumber,
      email,
      exist,
    };
  }

  return { loggedIn: false, exist: false };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged(async (user) => {
    const normalizedUser = await mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

export const loginWithEmail = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log("error: ", error);
      mapErrorCode(error);
    });
};

export const signUpUser = async (email, password) => {
  return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      mapErrorCode(error);
    });
};

export const createUser = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
}) => {
  const docRef = db.collection("users").doc(`${phoneNumber}`);

  await docRef.set({
    firstName,
    lastName,
    email,
    phoneNumber,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

export const logout = () => {
  firebase.auth().signOut();
};

export const addOrder = async ({ phone, order }) => {
  const docRef = db.collection("orders").doc(`${phone}`);

  await docRef.set({
    ...order,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

const mapMyOrder = (doc) => {
  const order = doc.data();
  const id = doc.id;
  const { createdAt } = order;

  return {
    ...order,
    id,
    createdAt: +createdAt.toDate(),
  };
};

export const getMyOrders = async ({ email, callback }) => {
  return db
    .collection("users")
    .doc(email)
    .collection("orders")
    .onSnapshot(({ docs }) => {
      const newOrder = docs.map(mapMyOrder);
      callback(newOrder);
    });
};

export const signInWithPhoneNumber = async ({ phoneNumber, appVerifier }) => {
  return await firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      return confirmationResult.verificationId;
    })
    .catch((error) => {
      console.log("el error: ", error);
      // mapErrorCode(error);
    });
};

export const isPhoneNumberExist = async ({ phoneNumber }) => {
  console.log("el phoneNumber: ", phoneNumber);

  return await db
    .collection("users")
    .doc(`${phoneNumber}`)
    .get()
    .then((doc) => {
      return doc.exists;
    })
    .catch((error) => {
      console.log("isPhoneNumberExist error: ", error);
    });
};
