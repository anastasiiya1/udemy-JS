const objectA = {
    isOnline: true,
    age: null,
    userName: null
}


objectA.age = 20;
objectA.userName = 'Alice';

const objectB = objectA;

objectB.userName = 10;
console.table(objectA)

const currentLocation = 'Kyiv'

const myCity = {
     currentLocation,
    country: 'Ukraine',
    population: 42,

    cityGreeting(){
        console.log('Greetings!')
    }
}

console.log(myCity);

delete myCity.population
console.log(myCity);

myCity['capital'] = true  
console.table(myCity);

console.log(myCity.currentLocation);

myCity.cityGreeting()

const post ={
    title: 'My post',
    likes: 6
}

console.log(post);

const stringify = JSON.stringify(post);
console.log(stringify);

const parse = JSON.parse(stringify);
console.log(parse);