// start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2)
age = 200
console.log(age, age2)

let name = 'colin'
let name2 = 'luca'
console.log(name, name2)
name = 'duy'
console.log(name, name2)

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
const team = players
console.log(players, team)

// however what happens when we update that array?
team[3] = 'lux'

// now here is the problem!
console.log(players, team)

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = team.slice()
console.log(team2)
team2[3] = 'hello'
console.log(team, team2)

// or create a new array and concat the old one in
const team3 = [].concat(players)
team3[3] = 'ohai'
console.log(team, team3)

// or use the new ES6 Spread
const team4 = [...players]

// now when we update it, the original one isn't changed
team4[3] = 'cucumber'
console.log(team, team4)

// or
const team5 = Array.from(players)
team5[3] = 'gherkin'
console.log(team, team5)

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person
captain.number = 99

console.log(person, captain)

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {number: 50})

console.log(person, captain, captain2)

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
