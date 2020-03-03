// ОБЬЕКТЫ
let car = {
    color: 'green',
    maxSped: 250,
    audio: {//обьект в обьекте
        brand: 'Sony',
        speaker: 12
    }
        
};

if(car.color == 'red') {
    console.log('Автомобиль красныЙ');
}else if(car.color == 'green') {
    console.log('Автомобиль зелёный');
}else{
    console.log('цвет не определён');
}
// изменить green на red

//car.color = 'red';

//или

//let carProp = 'color';
//car[carProp] = 'red';

console.log(typeof car);
console.log(car);



console.log(typeof car.color);
console.log(car.color);

console.log(typeof car.audio.brand);// Выести обратится к свойству
console.log(car.audio.brand);

console.log(typeof car.audio);// Выести вложенный обьект целиком
console.log(car.audio);