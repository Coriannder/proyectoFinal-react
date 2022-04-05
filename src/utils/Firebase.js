
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, where, getDocs, query, updateDoc, getDoc, doc} from "firebase/firestore"
import Swal from "sweetalert2";


const firebaseConfig = {
  apiKey: "AIzaSyDa2lvBwdSA4ilNWcmnUK53PVFPoBSSuBs",
  authDomain: "islagourmet-b6e99.firebaseapp.com",
  projectId: "islagourmet-b6e99",
  storageBucket: "islagourmet-b6e99.appspot.com",
  messagingSenderId: "620957636374",
  appId: "1:620957636374:web:9b3e44535a8405e981a237"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



export const generateOrder = async (order) => {

  const docRef = await addDoc(collection(db, 'orders'),{
  
    ...order

  })
  Swal.fire({
    icon: 'success',
    title: 'Felicitaciones',
    text: `El id de tu orden de compra es: ${docRef.id}` ,

  }).then((result) => {
    if (result.value) {
      window.location.href = `/`
    }
  });
}

export const updateStock = async (cartItems) =>{

  const q = query(collection(db, 'items'), where('id', 'in', cartItems.map(i => i.item.id)))
  const response = await getDocs(q) 
  const itemsToUpdate = response.docs.map(i => i.id)

   for(let i=0; i< itemsToUpdate.length; i++ ){
    const item = await getDoc(doc(db, 'items', itemsToUpdate[i]))
    await updateDoc(doc(db, 'items', itemsToUpdate[i]),{
      stock: item.data().stock - cartItems[i].cantidad
    })
  }
}
