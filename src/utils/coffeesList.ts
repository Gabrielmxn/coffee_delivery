import { v4 as uuidv4 } from 'uuid';

export const coffeeList = [
  {
    id: uuidv4(),
    img:"http://localhost:5173/expressotradicional.svg",
    title:"Expresso Tradicional",
    description:"O tradicional café feito com água quente e grãos moídos",
    ingredientes: ['Tradicional'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/expressoamericano.svg",
    title:"Expresso Americano",
    description:"Expresso diluído, menos intenso que o tradicional",
    ingredientes: ['Tradicional'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/expressocremoso.svg",
    title:"Expresso Cremoso",
    description:"Café expresso tradicional com espuma cremosa",
    ingredientes: ['Tradicional'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/expressogelado.svg",
    title:"Expresso Gelado",
    description:"Bebida preparada com café expresso e cubos de gelo",
    ingredientes: ['Tradicional', 'Gelado'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/coffeeandmilk.svg",
    title:"Café com Leite",
    description:"Meio a meio de expresso tradicional com leite vaporizado",
    ingredientes: ['Tradicional', 'com leite'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/latte.svg",
    title:"Latte",
    description:"Uma dose de café expresso com o dobro de leite e espuma cremosa",
    ingredientes: ['Tradicional', 'com leite'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/capuccino.svg",
    title:"Capuccino",
    description:"Bebida com canela feita de doses iguais de café, leite e espuma",
    ingredientes: ['Tradicional', 'com leite'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/macchiato.svg",
    title:"Macchiato",
    description:"Café expresso misturado com um pouco de leite quente e espuma",
    ingredientes: ['Tradicional', 'com leite'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/macchiato.svg",
    title:"Mocaccino",
    description:"Café expresso com calda de chocolate, pouco leite e espuma",
    ingredientes: ['Tradicional', 'com leite'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/chocolatequente.svg",
    title:"Chocolate Quente",
    description:"Bebida feita com chocolate dissolvido no leite quente e café",
    ingredientes: ['especial', 'com leite'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/cubano.svg",
    title:"Cubano",
    description:"Drink gelado de café expresso com rum, creme de leite e hortelã",
    ingredientes: ['especial', 'alcoólico', 'gelado'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/havaiano.svg",
    title:"Havaiano",
    description:"Bebida adocicada preparada com café e leite de coco",
    ingredientes: ['especial'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/arabe.svg",
    title:"Árabe",
    description:"Bebida preparada com grãos de café árabe e especiarias",
    ingredientes: ['especial'],
    price: 9.90
  },
  {
    id: uuidv4(),
    img:"http://localhost:5173/irlandes.svg",
    title:"Irlandês",
    description:"Bebida a base de café, uísque irlandês, açúcar e chantilly",
    ingredientes: ['especial', 'alcoólico'],
    price: 9.90
  }

]


