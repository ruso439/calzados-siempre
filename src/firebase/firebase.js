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
        "img": "src/firebase/img/adultos/zapatillasadulto1.jpg",
        "category": "adultos"
    },
    {
        "title": "WEMBLY SIN CORDONES",
        "size": "Small",
        "price": 22000,
        "stock": 15,
        "img": "src/firebase/img/adultos/zapatillasadulto2.jpg",
        "category": "adultos"
    },
    {
        "title": "WEMBLY CON CORDONES",
        "size": "Medium",
        "price": 21000,
        "stock": 9,
        "img": "src/firebase/img/adultos/zapatillasadulto3.jpg",
        "category": "adultos"
    },
    {
        "title": "WEMBLY CON CORDONES",
        "size": "Medium",
        "price": 21000,
        "stock": 9,
        "img": "src/firebase/img/adultos/zapatillasadulto4.jpg",
        "category": "adultos"
    },
    {
        "title": "ADIDAS SUPERSTAR",
        "size": "Medium",
        "price": 21000,
        "stock": 9,
        "img": "src/firebase/img/adultos/zapatillasadulto5.jpg",
        "category": "adultos"
    },
    {
        "title": "ADIDAS SUPERSTAR",
        "size": "Medium",
        "price": 21000,
        "stock": 9,
        "img": "src/firebase/img/adultos/zapatillasadulto6.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTA LONA LISO ART.900",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto7.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTA LONA LISO ART.900",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto8.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTA LONA LISO ART.900",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto9.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto10.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto11.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto12.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto13.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto14.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto15.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto16.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto17.jpg",
        "category": "adultos"
    },
    {
        "title": "PANCHAS GOWELL",
        "size": "27-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto18.jpg",
        "category": "adultos"
    },
    {
        "title": "VANS BAJA ART.400",
        "size": "35-45",
        "price": 25000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto19.jpg",
        "category": "adultos"
    },
    {
        "title": "VANS BAJA ART.400",
        "size": "35-45",
        "price": 25000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto20.jpg",
        "category": "adultos"
    },
    {
        "title": "VANS BAJA ART.400",
        "size": "35-45",
        "price": 25000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto21.jpg",
        "category": "adultos"
    },
    {
        "title": "VANS BAJA ART.400",
        "size": "35-45",
        "price": 25000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto22.jpg",
        "category": "adultos"
    },
    {
        "title": "NIKE AIR ART.2026",
        "size": "27-34",
        "price": 25000,
        "stock": 50,
        "img": "src/firebase/img/adultos/zapatillasadulto22.jpg",
        "category": "adultos"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/bendi/bendi17.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/bendi/bendi18.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/bendi/bendi19.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/bendi/bendi20.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/bendi/bendi21.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/bendi/bendi22.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/bendi/bendi23.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/bendi/bendi24.jpg",
        "category": "niños"
    },
    {
        "title": "BENDI",
        "size": "17-34",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/bendi/bendi17.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos1.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos1.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos2.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos3.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos4.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos5.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos6.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos7.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos8.jpg",
        "category": "niños"
    },
    {
        "title": "BOTA BRILLO ART.910",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos9.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos10.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos11.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos12.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos13.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos14.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos15.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA BRILLO ART.810",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos16.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA ABROJO ART.300",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos17.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA ABROJO ART.320",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos18.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA ABROJO ART.300",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos19.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos20.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos21.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos22.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos23.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos24.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos25.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA LONA ART.800/801",
        "size": "17-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos26.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA ECO-CUERO ART.921",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos27.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA ECO-CUERO ART.921",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos28.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA UNICORNIO ART.310",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos29.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos38.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos39.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos40.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos41.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos42.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos43.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA DEPORTIVA ART.145",
        "size": "21-26",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos44.jpg",
        "category": "niños"
    },
    {
        "title": "ZAPATILLA MODA ART.2050 ",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos44.jpg",
        "category": "adultos"
    },
    {
        "title": "ZAPATILLA MODA ART.2050 ",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos46.jpg",
        "category": "adultos"
    },
    {
        "title": "ZAPATILLA MODA TACHAS ART.2020",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos47.jpg",
        "category": "adultos"
    },
    {
        "title": "ZAPATILLA MODA TACHAS ART.2020",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos48.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos53.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos54.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos55.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos56.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos57.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos58.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos59.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos60.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos61.jpg",
        "category": "adultos"
    },
    {
        "title": "CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/chicos/zapatillaschicos62.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota1.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota2.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota3.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota4.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota5.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota6.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota7.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota8.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota9.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota10.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota11.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota12.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota13.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota14.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota15.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota16.jpg",
        "category": "adultos"
    },
    {
        "title": "OJOTA CAMBIAR NOMBRE",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/ojotas/ojota17.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTINES FUTBOL",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/varios/botines1.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTINES FUTBOL",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/varios/botines2.jpg",
        "category": "adultos"
    },
    {
        "title": "BOTINES FUTBOL",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/varios/botines3.jpg",
        "category": "adultos"
    },
    {
        "title": "PANTUFLAS",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/varios/pantufla1.jpg",
        "category": "adultos"
    },
    {
        "title": "PANTUFLAS",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/varios/pantufla2.jpg",
        "category": "adultos"
    },
    {
        "title": "PANTUFLAS",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/varios/pantufla3.jpg",
        "category": "adultos"
    },
    {
        "title": "ZAPATOS",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/varios/zapatos1.jpg",
        "category": "adultos"
    },
    {
        "title": "PANTUFLAS",
        "size": "35-40",
        "price": 15000,
        "stock": 50,
        "img": "src/firebase/img/varios/zapatos2.jpg",
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