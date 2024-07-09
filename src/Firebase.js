import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc,collection,getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAOjzbGkS8mkRKzgfcy_WDQ8EjyqAKzf6A",
  authDomain: "clone-43853.firebaseapp.com",
  projectId: "clone-43853",
  storageBucket: "clone-43853.appspot.com",
  messagingSenderId: "1085468768366",
  appId: "1:1085468768366:web:fb701d7d8a1853fe334e7f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const SignUp = async (name,email,password)=>{
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password)
        const user = userCredential.user
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:'local',
            email,
        })
    }
    catch(error){
        console.log(error.message)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }catch(error){
        console.log(error.message)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}
const logout = ()=>{
    signOut(auth);
}
export {auth,db,login,SignUp,logout}