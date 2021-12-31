const productos = [
    {
        "id": 1,
        "nombre": "Producto 1",
        "tipo": "Parafernalia",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde quibusdam ratione rerum quia, odio quidem eveniet officiis aliquam",
        "precio": 1200,
        "img": "./imagenes/productos/accesorios1.png"
    },
    {
        "id": 2,
        "nombre": "Producto 2",
        "tipo": "Aditivos",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde quibusdam ratione rerum quia, odio quidem eveniet officiis aliquam",
        "precio": 1100,
        "img": "./imagenes/productos/aditivo1.jpg"
    },
    {
        "id": 3,
        "nombre": "Producto 3",
        "tipo": "Iluminacion",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde quibusdam ratione rerum quia, odio quidem eveniet officiis aliquam",
        "precio": 1200,
        "img": "./imagenes/productos/iluminacion1.jpg"
    },
    {
        "id": 4,
        "nombre": "Producto 4",
        "tipo": "Combos",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde quibusdam ratione rerum quia, odio quidem eveniet officiis aliquam",
        "precio": 1400,
        "img": "./imagenes/productos/combo1.jpg"
    }]


export const getFetch = new Promise((resolve , reject)=>{
    let condicion = true
    if(condicion){
        setTimeout(()=>{
            resolve(productos)}
            , 3000)
    }else{
        reject('Eror al cargar productos')
    }
})
