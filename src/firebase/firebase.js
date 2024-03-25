import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import productos from './productos.json';

const firebaseConfig = {
    apiKey: "AIzaSyA2nt4B20Khsdrzi__z0R9jxKYzUNN2gYQ",
    authDomain: "calzados-siempre.firebaseapp.com",
    projectId: "calzados-siempre",
    storageBucket: "calzados-siempre.appspot.com",
    messagingSenderId: "1096726095652",
    appId: "1:1096726095652:web:7f254f1ed79213e8c7f5b1"
  };

const app = initializeApp(firebaseConfig);


//Consultar a la BDD
const bdd = firebase.database();

db.ref('productos').set(productos)
  .then(() => console.log('Data uploaded.'))
  .catch((error) => console.error('Error uploading data:', error));

/*
    Create
    Read
    Update
    Delete
*/

//Crear productos



export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            size: prod.size,
            price: prod.price,
            stock: prod.stock,
            category: prod.category,
            img: prod.img
        })
    })

}

// Consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

// Actualizar Producto
export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto
export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//CREATE AND READ Ordenes de Compra
export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}