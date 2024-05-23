// funtion

// // 함수선언 과 호출
// function hello() {
//     console.log(`hello, javascript===`);
// }

// hello()

// const sayHello = function(){
//     console.log(`🎨 hello===`);
// }
// const sayHello2 = () => {console.log(`🎃 hello===`);}

// sayHello()
// sayHello2()

// // 2. 매개변수 paramater
// function printMessage(message){
//     console.log(message);
// }

// printMessage(`hahaha`)
// printMessage(`hohoho`)

// // 3. 기본 매개변수
// function showInfo(title, name = `steve`) {
//     console.log(`${title} by ${name}`);
// }

// showInfo(`sora`, `lili`)
// showInfo(`fall`)

// // 4. Rest 매개변수 / spread 연산자
// function printAll(...items) {
//     for(let i =0; i < items.length; i++) {
//         console.log(items[i]);
//     }
// }

// printAll(`spring`, `summer`, `fall`, `winter`, `hello`)

// // 5. Scope
// const movie = `hahaha===` // gobal변수 (전역변수)

// function paintMovie() {
//     const myMovie = `summer` // local변수(지역변수)
//     console.log(movie);
//     console.log(myMovie);
// }

// paintMovie()

// // console.log(myMovie);
// console.log(movie);

// // 6. Return 
// function plus(a,b) {
//     return a + b
//     console.log(`end`);
// }

// const result = plus(5, 10)
// console.log(result);

// 7. Callback function 콜백함수

const call = function(myName, printPicasso, printSteve) {
    if(myName === `Picasso`) {
        printPicasso()
    } else {
        printSteve()
    }
}

const printPicasso = function() {
    console.log(`Im Picasso`);
}
const printSteve = function() {
    console.log(`Im Steve`);
}

call(`Picasso`, printPicasso, printSteve)