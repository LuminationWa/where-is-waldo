import firebase from "firebase/app";
import "firebase/firestore";
import React, { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDXclI1XAm-0FUehZS_avaCwWq5ydolohU",
  authDomain: "where-is-waldo-9fa31.firebaseapp.com",
  projectId: "where-is-waldo-9fa31",
  storageBucket: "where-is-waldo-9fa31.appspot.com",
  messagingSenderId: "875658765445",
  appId: "1:875658765445:web:660ff372bf6e11f5e8b5ec",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

const CharSelect = (props) => {
  let coordInfo = "0 0";
  useEffect(() => {
    coordInfo = props;
  }, [props]);

  const getInfo = async () => {
    var docRef = db.collection("characters").doc("RVVylJZtGldpIK2WDXfg");
    let docInfo = await docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    return docInfo;
  };

  const checkRange = (value1, value2) => {
    // Verifies that values are within the accepted area
    return (value1 <= value2 + 30 && value2 - 30 <= value1);
  };

  const verifyInfo = (dbInfo, coordInfo, character) => {
    // Compares the character coordinates from the user with the ones from the db
    let characterInfo = dbInfo[character].split(" ");
    let coordInfo2 = coordInfo.currentCoord.split(" ");
    if (
      checkRange(parseInt(characterInfo[0]), parseInt(coordInfo2[0])) &&
      checkRange(parseInt(characterInfo[1]), parseInt(coordInfo2[1]))
    ) {
      console.log("in range");
    } else console.log("not in range");
  };

  return (
    <div class="char-select">
      <button
        onClick={async () => {
          verifyInfo(await getInfo(), coordInfo, "finn");
        }}
      >
        Finn
      </button>
      <button
        onClick={async () => {
          verifyInfo(await getInfo(), coordInfo, "jake");
        }}
      >
        Jake
      </button>
      <button
        onClick={async () => {
          verifyInfo(await getInfo(), coordInfo, "marceline");
        }}
      >
        Marceline
      </button>
    </div>
  );
};

export default CharSelect;
