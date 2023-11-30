// firebase.js
import firebase from "firebase/app";
import "firebase/database"; // Realtime Databaseを使う場合は追加

//Firebaseの設定情報を格納するためのオブジェクトです。Firebase SDKを使用するためには、Firebaseプロジェクトの設定情報が必要であり、その情報をこのオブジェクトに提供します。各プロパティにはFirebaseプロジェクトの特定の設定が含まれます。

// 具体的には以下のようになります：

// apiKey: FirebaseプロジェクトにアクセスするためのAPIキー
// authDomain: Firebase Authenticationを使用する場合の認証ドメイン
// databaseURL: Firebase Realtime Databaseを使用する場合のデータベースのURL
// projectId: FirebaseプロジェクトのID
// storageBucket: Firebase Storageを使用する場合のストレージバケット
// messagingSenderId: Firebase Cloud Messagingを使用する場合のメッセージング送信者ID
// appId: Firebaseプロジェクトに関連付けられたアプリケーションのID
// これらの情報はFirebaseコンソールでプロジェクトを作成すると、そのプロジェクトの設定ページで確認できます。Firebase SDKはこれらの情報を使用して、Firebaseプロジェクトに接続し、データベースや認証などの機能を利用できるようになります。
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
export { database };
