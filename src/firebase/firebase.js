import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { addDoc, collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2nt4B20Khsdrzi__z0R9jxKYzUNN2gYQ",
    authDomain: "calzados-siempre.firebaseapp.com",
    projectId: "calzados-siempre",
    storageBucket: "calzados-siempre.appspot.com",
    messagingSenderId: "1096726095652",
    appId: "1:1096726095652:web:7f254f1ed79213e8c7f5b1"
};

firebase.initializeApp(firebaseConfig);

const productos = [
    {
        "title": "WEMBLY SIN CORDONES",
        "size": "40-42",
        "price": 15000,
        "stock": 10,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto1.jpg",
        "category": "adultos"
    },
    {
        "title": "WEMBLY SIN CORDONES",
        "size": "Small",
        "price": 22000,
        "stock": 15,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto2.jpg",
        "category": "adultos"
    },
    {
        "title": "WEMBLY CON CORDONES",
        "size": "Medium",
        "price": 21000,
        "stock": 9,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto3.jpg",
        "category": "adultos"
    },
    {
        "title": "WEMBLY CON CORDONES",
        "size": "Medium",
        "price": 21000,
        "stock": 9,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto4.jpg",
        "category": "adultos"
    },
    {
        "title": "ADIDAS SUPERSTAR",
        "size": "Medium",
        "price": 21000,
        "stock": 9,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto5.jpg",
        "category": "adultos"
    },
    {
        "title": "ADIDAS SUPERSTAR",
        "size": "Medium",
        "price": 21000,
        "stock": 9,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto6.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTA LONA LISO ART.900",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto7.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTA LONA LISO ART.900",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto8.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTA LONA LISO ART.900",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto9.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto10.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto11.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto12.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto13.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto14.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto15.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto16.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto17.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto18.jpg",
        "category": "adultos"
    },
    {
        "title": "VANS BAJA ART.400",
        "size": "35-45",
        "price": 25000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto19.jpg",
        "category": "adultos"
    },
    {
        "title": "VANS BAJA ART.400",
        "size": "35-45",
        "price": 25000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto20.jpg",
        "category": "adultos"
    },
    {
        "title": "VANS BAJA ART.400",
        "size": "35-45",
        "price": 25000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto21.jpg",
        "category": "adultos"
    },
    {
        "title": "VANS BAJA ART.400",
        "size": "35-45",
        "price": 25000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto22.jpg",
        "category": "adultos"
    },
    {
        "title": "NIKE AIR ART.2026",
        "size": "27-34",
        "price": 25000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/adultos/zapatillasadulto23.jpg",
        "category": "adultos"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/bendi/bendi17.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/bendi/bendi18.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/bendi/bendi19.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/bendi/bendi20.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/bendi/bendi21.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/bendi/bendi22.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/bendi/bendi23.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/bendi/bendi24.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos1.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos2.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos3.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos4.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos5.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos6.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos7.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos8.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos9.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos10.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos11.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos12.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos13.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos14.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos15.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos16.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos17.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA ABROJO ART.300",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos18.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA ABROJO ART.320",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos19.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA ABROJO ART.300",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos20.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos21.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos22.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos23.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos24.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos25.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos26.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos27.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA ECO-CUERO ART.921",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos28.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA ECO-CUERO ART.921",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos29.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA UNICORNIO ART.310",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos30.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos31.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos32.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos33.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos34.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos35.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos36.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos37.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA MODA ART.2050 ",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos38.jpg",
        "category": "adultos"
    },
    {
        "title": "ZAPATILLA MODA ART.2050 ",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos39.jpg",
        "category": "adultos"
    },
    {
        "title": "ZAPATILLA MODA TACHAS ART.2020",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos40.jpg",
        "category": "adultos"
    },
    {
        "title": "ZAPATILLA MODA TACHAS ART.2020",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos41.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos42.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos43.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos44.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos45.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos46.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos47.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos48.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos53.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos54.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos55.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos56.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos57.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos58.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos59.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos60.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos61.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/chicos/zapatillaschicos62.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas1.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas2.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas3.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas4.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas5.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas6.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas7.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas8.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas9.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas10.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas11.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas12.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas13.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas14.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas15.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas16.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/ojotas/ojotas17.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTINES FUTBOL",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/varios/botines1.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTINES FUTBOL",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/varios/botines2.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTINES FUTBOL",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/varios/botines3.jpg",
        "category": "adultos"
    },
    {
        "title": "PANTUFLAS",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/varios/pantufla1.jpg",
        "category": "adultos"
    },
    {
        "title": "PANTUFLAS",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/varios/pantufla2.jpg",
        "category": "adultos"
    },
    {
        "title": "PANTUFLAS",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/varios/pantufla3.jpg",
        "category": "adultos"
    },
    {
        "title": "ZAPATOS",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/varios/zapatos1.jpg",
        "category": "adultos"
    },
    {
        "title": "PANTUFLAS",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "gs://calzados-siempre.appspot.com/varios/zapatos2.jpg",
        "category": "adultos"
    }
]

// Consultar a la BDD
const bdd = firebase.firestore();

//Crear productos
export const createProducts = async () => {
    productos.forEach(async (prod) => {
        console.log(`Agregando producto: ${prod.title}`);
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
createProducts();


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