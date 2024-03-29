import React, { useState } from "react";
import Add from "../img/addImage.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //USER CREATION
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //UNIQUE NAME CREATION
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //CREATION ON FIRESTORE DATABSE
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //AUTO CREATE empty
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1 className="mint">CHATIFY</h1>
        <span className="title">REGISTER</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add your profile picture</span>
          </label>
          <button className="register"disabled={loading}>SIGN UP </button>
          {loading && <span style={{color:"white"}}>Uploading and compressing the image please wait...</span>}
          {err && <span className="error">🛑🚫⚠️Something went wrong here, please try again!⚠️🚫🛑</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login Here</Link>
        </p>
        <Marquee pauseOnHover={true} className="marquee"> <span>------CHATIFY®</span>&nbsp;&nbsp;&nbsp;<span>by</span>&nbsp;&nbsp;&nbsp;<span>Jay------</span></Marquee>
      </div>
    </div>
  );
};

export default Register;
