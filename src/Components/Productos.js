
const restOfDayMenu = {
    types: [
        {
            id: 1,
            name: "Meat Simple",
            price: 1500,
            image: require("../Assets/Chicken.png").default,
            add: [{
                name1: "Egg",
                price1: 300,
            },
            {   
                name2: "Cheese",
                price2: 300,
            }]
        },
        {
            id: 2,
            name: "Meat Doble",
            price: 3000,
            add: [{
                name1: "Egg",
                price1: 300,
            },
            {   
                name2: "Cheese",
                price2: 300,
            }]
        },
        {   
            id: 3,
            name: "Chicken Simple",
            price: 1500,
            image: require("../Assets/Cow.png").default,
            add: [{
                name1: "Egg"
            },
            {   
                name2: "Cheese"
            }]
        },
        {   
            id: 4,
            name: "Chicken Doble",
            price: 3000,
            add: [{
                name1: "Egg"
            },
            {   
                name2: "Cheese"
            }]
        },
        {   
            id: 5,
            name: "Veggie Simple",
            price: 1500,
            image: require("../Assets/Veggie.png").default,
            add: [{
                name1: "Egg"
            },
            {   
                name2: "Cheese"
            }]
        },
        {   
            id: 6,
            name: "Veggie Doble",
            price: 3000,
            add: [{
                name1: "Egg"
            },
            {   
                name2: "Cheese"
            }]
        }
    ],
    accompaniments: [{
        id: 7,
        name: "Agua 650ml",
        price: 500,
        image: require("../Assets/Water6.png").default,
    },
    {
        id: 8,
        name: "Agua 1lt",
        price: 700,
        image: require("../Assets/Water1.png").default,
    },
    {
        id: 9,
        name: "Aros de cebolla",
        price: 500,
        image: require("../Assets/Onionrings.png").default,
    },
    {
        id: 10,
        name: "Papas fritas",
        price: 700,
        image: require("../Assets/Fries.png").default,
    },
    {
        id: 11,
        name: "Bebida 500ml",
        price: 700,
        image: require("../Assets/Soda5.png").default,
    },
    {
        id: 12,
        name: "Bebida 1lt",
        price: 1000,
        image: require("../Assets/Soda1.png").default,
    }]
}

//   const restOfDayMenu = [
//     { id: 1,
//     name: "Burguer Simple",
//     price: 1500,
//     image: "icon-burguersimple.png",
//     type:[{
//         name: "meat",
//         image: "icon-cow.png"},
//         {name: "chicken",
//         image: "icon-chicken.png"},
//         {name:"veggie",
//         image: "icon-veggie.png"
//         }], 
//     add:[{
//         name: "egg"},
//         {name: "cheese"
//         }]
//     },
//     { id: 2, 
//     name: "Burguer Doble",
//     price: 3000, 
//     image: "icon-burguerdoble.png", 
//     type:[{
//         name: "meat",
//         image: "https://i.ibb.co/fp5pTXz/cow.png"},
//         {name: "chicken",
//         image: "https://i.ibb.co/fnQ82VH/chicken.png"},
//         {name:"veggie",
//         image: "https://i.ibb.co/NSk2XMq/veggie.png"
//         }], 
//     add:[{
//         name: "egg"},
//         {name: "cheese"
//         }] 
//     },
//    { id: 3, 
//     name: "Agua 500ml",
//     price: 500,
//     image: "https://i.ibb.co/Fz2mC2y/water6.png" },
//    { id: 4, 
//     name: "Agua 750ml",
//     price: 700,
//     image: "https://i.ibb.co/Gp3ZV03/water1.png" },
//    { 
//    id: 5, 
//    name: "Aros de cebolla", 
//    price: 500, 
//    image: "https://i.ibb.co/YRGQKXR/onionrings.png"},
//    { 
//    id: 6, 
//    name: "Papas fritas", 
//    price: 700, 
//    image: "https://i.ibb.co/6gjn7DS/Untitled.png" 
//    },
//    { id: 7,
//    name: "Bebida 500ml", 
//    price: 700, 
//    image: "https://i.ibb.co/JQwkRcm/soda5.png"
//     },
//    { 
//    id: 8,
//     name: "Bebida 750ml",
//     price: 1000,
//     image: "https://i.ibb.co/ZWLvfsG/soda1.png" 
//    },]
//    export default restOfDayMenu;
// //   export const breakFastMenu = [
// //    { id: 9, 
// //     name: "Café americano",
// //     price: 500,
// //     image: "icon-coffe.png" },
// //    { id: 10, 
// //     name: "Café con leche",
// //     price: 700,
// //     image: "icon-milkcoffe.png" },
// //    { 
// //    id: 11, 
// //    name: "Sandwich de jamón y queso", 
// //    price: 1000, 
// //    image: "cheese-ham.png"},
// //    { 
// //    id: 12, 
// //    name: "Jugo de frutas natural", 
// //    price: 700, 
// //    image: "icon-fruitjuice.png" 
// //    },]

export default restOfDayMenu;