// const person = {
//     name: 'John',
//     age: 26,
//     location: {
//         city: 'Toronto',
//         temperature: 92
//     }
// }
// const { name='Anonymous', age, location } = person;
// console.log(`${name} is ${age}.`)

// const { city, temperature } = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
// const { name: publisherName='Self-Published' } = book.publisher;

// console.log(`${publisherName}`) //penguin, or if no valid publisher: Self-Published

const address = ['1299 S Juniper Street', 'boop'];
const [ , city='Toronto', state="Ontario",  ] = address

console.log(`You in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [ itemName, ,mediumPrice,] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)