// pages/index.js などのファイル
import { Database } from "firebase/database"; // 適切なパスを指定

const addDataToFirebase = () => {
  const data = {
    key1: "value1",
    key2: "value2",
  };

  const newRef = Database.ref("your_collection").push();
  newRef.set(data, (error: any) => {
    if (error) {
      console.error("Error adding data to Firebase: ", error);
    } else {
      console.log("Data added to Firebase successfully!");
    }
  });
};

const HomePage = () => {
  return (
    <div>
      <h1>Next.js + Firebase</h1>
      <button onClick={addDataToFirebase}>Add Data to Firebase</button>
    </div>
  );
};

export default HomePage;
