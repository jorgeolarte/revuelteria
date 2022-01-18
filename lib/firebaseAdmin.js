const admin = require("firebase-admin");
const serviceAccount = require("../secrets.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (e) {}

export const firestore = admin.firestore();

export const addOrder = async ({ phoneNumber, order }) => {
  return await firestore
    .collection("orders")
    .add({
      phoneNumber,
      order,
      createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    })
    .then((docRef) => {
      return docRef.id;
    })
    .catch((error) => {
      throw { message: error.message };
    });
};

export const ifUserExist = async ({ phoneNumber }) => {
  return await firestore
    .collection("users")
    .doc(`${phoneNumber}`)
    .get()
    .then((doc) => {
      return doc.exists;
    });
};

export const pushOrderToUser = async ({ phoneNumber, uidOrder, order }) => {
  return firestore
    .collection("users")
    .doc(`${phoneNumber}`)
    .collection("orders")
    .doc(`${uidOrder}`)
    .set({
      uidOrder,
      order,
      createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    });
};

export const getEmailByPhoneNumber = async ({ phoneNumber }) => {
  return await firestore
    .collection("users")
    .doc(`${phoneNumber}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data().email;
      }
      return null;
    });
};
