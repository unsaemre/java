//  array
// 1. 배열 만들기
{
    // const arr1 = new Array()
    // console.log(arr1);
    // arr1[0] = 10
    // arr1[1] = `hello`
    // console.log(arr1);

    // const arr2 = [1, 3, 5, 7, 9]
    // console.log(arr2);

    // const arr3 = [`what`, `are`, `you`, `doing`, 100, true]
    // console.log(arr3);

    // const arr4 = [
    //     `a`,
    //     {model: `apple`, price: 1000},
    //     {model: `galaxy`, price: 2000}
    // ]
    // console.log(arr4);
    // console.log(arr4[1].model);
    // console.log(arr4[3]); // undefined
}

// 2. 배열 출력
{
    // const books = [`html`, `css`, `javascript`, `react`]
    // console.log(books);
    // console.log(books.length);
    // console.log(books[0]); // 배열의 첫번째 요소를 반환
    // console.log(books[books.length - 1]); // 배열의 마지막 요소를 반환

    // // for 
    // for(let i=0; i < books.length; i++) {
    //     console.log(books[i]);
    // }

    // // for of
    // for(let book of books) {
    //     console.log(book);
    // }

    // //  for in
    // for(let key in books) {
    //     console.log(books[key]);
    // }

    // //  foreach
    // // function(){
    // //     // 실행문
    // // }
    // // () => {
    // //     // 실행문
    // // }

    // books.forEach(function(book){
    //     console.log(book + ` is good`); 
    // })

    // books.forEach(book => {
    //     console.log(`📕 ` + book);
    // });

    // // map : 새로운 배열을 리턴
    // const newBooks = books.map(function(book) {
    //     return `👓 ${book}`
    // })
    // console.log(newBooks);

    // const newBooks2 = books.map(item => `${item} 🎇`)
    // console.log(newBooks2);
}

//  3. 배열 메서드
{
    // const books = [`html`, `css`, `javascript`, `jquery`, `react`]

    // 배열을 문자열로 만드는 방법
    // console.log(books.join(`-`));
    // console.log(books.reverse());
    // console.log(books.sort());

    // // 앞에 추가
    // books.unshift(`jsp`)
    // console.log(books);

    // // 뒤에 추가
    // books.push(`php`)
    // console.log(books);
    
    // // 앞에서 삭제
    // books.shift()
    // console.log(books);

    // // 뒤에서 삭제
    // books.pop()
    // console.log(books);
    
    // // splice : 지정한 위치에서 삭제, 추가
    // books.splice(2, 1, `hahaha`, `hohoho`)
    // console.log(books);

    // // 두개의 배열을 합침
    // const books2 = [`git`, `nodejs`]
    // const newBooks = books.concat(books2)
    // console.log(newBooks);

    // // 원하는 구간만큼 잘라서 새로운 배열을 리턴함
    // const anotherBooks = newBooks.slice(2, 4)
    // console.log(anotherBooks);

    // // 검색
    // console.log(books);
    // console.log(books.indexOf(`react`)); // 검색
    // console.log(books.includes(`css`)); // 포함이 되어있니
    // console.log(books.includes(`github`));
}

// 4. 활용
const sojus = [
    {name: `daesun`, price: 1200, sale: true, score: 86},
    {name: `c1`, price: 1100, sale: false, score: 92},
    {name: `goodday`, price: 1150, sale: true, score: 80},
    {name: `charm`, price: 960, sale: false, score: 60},
    {name: `saero`, price: 1250, sale: true, score: 46},
]

//  score가 80점인 소주를 찾는다
{
    const result = sojus.find(soju => soju.score === 80)
    console.log(result);
}

// 판매중인 소주를 찾아서 새로운 배열로 만들기
{
    const result = sojus.filter(item => !item.sale)
    console.log(result);
}

// 점수만 있는 새로운 배열 만들기
{
    const result = sojus.map(item => item.score)
    console.log(result);
}

// 점수가 50보다 작은 소주가 있는지 확인
{
    const result = sojus.some(item => item.score < 50)
    console.log(result);
    
    const result2 = sojus.find(item => item.score < 50)
    console.log(result2);
}

// 소주들의 평균 가격 구하기
{
    // const result = sojus.reduce((prev, next) => {
    //     // return
    // }, 초기값)
    
    const result = sojus.reduce((prev, current) => {
        return prev + current.price // 1200 , 2300
    }, 0)


    console.log(result / sojus.length);
}

// 점수를 문자로 만들기
{
    const result = sojus //
        .map(item => item.score)
        .join(`-`)
    console.log(result);
}

// 점수가 낮은 순으로 문자열로 정리하기
{
    const result = sojus //
        .map(item => item.score)
        .sort((a,b)=>a-b)
        .join()
    console.log(result);
}