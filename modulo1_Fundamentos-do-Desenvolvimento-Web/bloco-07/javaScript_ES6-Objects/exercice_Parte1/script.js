// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       margherita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.

// }

// customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.

// }

// orderModifier(order);


const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const params = (obj, chave, valor) => {
  let newKay = chave;
  obj[newKay] = valor;
  // console.table(Object.keys(obj));
  // console.table(Object.values(obj));
  // console.table(Object.entries(obj));
  console.table(obj);
}
params(customer, 'lastName', 'Alves');

// Object.assign(objeto, objeto que quero fazer merge com o primeiro);
// let objTudo = Object.assign(obj1, obj2, obj3);
