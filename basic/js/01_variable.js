// 대화상자 alert(경고창), prompt, confirm(확인)
{
    // {} scope 블록 , 독립시행
    // const name = prompt('create name', 'Mr.');
    // alert(`hello ${name} welcome`)
    // const isCheck = confirm(`check`)
    // console.log(isCheck)
    // document.write(name)
}

// variable 변수
// var, let, const
// var 이름(class) = value (값,함수,문자)

// 1. var
// 읽기, 쓰기 가능
// 블럭을 무시한다.
{
    var username = `Alice`
    console.log(username)

    username = "Picasso"
    console.log(username)
}

console.log(username)

// 2. let
// 읽기, 쓰기 가능
// 블럭 무시 불가능
// 선언만 해도됨
{
    let title = `let html`
    console.log(title)

    title = `css`
    console.log(title)
}

// console.log(title);

//  3.const 상수
// 읽기만 가능, 변하지 않는다.
// 변수는 문자와 숫자, $와 _만 사용 가능
// 첫글자 숫자는 사용 불가
// 예약어는 사용 불가
// 무조건 할당해야함
{
    const subject = `const html`
    console.log(subject);

    // subject = `css`
}



// 4. 변수의 데이터 타입 - 자료형
// 원시데이터(premitive) : String, Number, Boolean, null, undefined
// Object : 싱글데이터를 묶어놓은 데이터
// function : 1급객체(frist class object)
/// 변수에 담을 수 있다.
/// 함수나 메서드의 인자로 넘길 수 있다.
/// 함수나 메서드에서 리턴 할 수 있다.

// 5. 문자형 String
{
    const name1 = `Alice`
    const name2 = `Alice`
    const name3 = `Alice`

    const firstName = `Pablo`
    const lastName = `Picaso`
    const fullName = firstName + ` ` + lastName
    console.log(fullName);
    console.log(`${firstName} ${lastName}`);
}

// 6. 숫자형 Number
{
    const num = 10
    // ' '는 문자 없으면 숫자
    const num1 = `10`
    const PI = 3.14
    console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`);

    const a = 1 / 0
    console.log(a);
    const b = -1 / 0
    console.log(b);
    const c = `html` / 10
    console.log(c);
}

// 7. 불린 Boolean
{
    const a = true
    const b = false

    const name = `Kim`
    const age = 16

    console.log(name == `Kim`);
    console.log(age > 10);
}

// 8. null / undefined
// null - 존재하지 않는 값
// undefined = 값이 할당되지 않음
{
    const box = null
    console.log(`값은 ${box}이고, 타입은 ${typeof box}입니다.`);
    
    let box2
    console.log(`값은 ${box2}이고, 타입은 ${typeof box2}입니다.`);

}

// 9. 동적 타입 
// 자바스크립트의 타입은 runtime(브라우저에서 실행될 때) 상태에서 타입이 정해진다.
//  typescript 
{
    let word = `winter`
    console.log(`값은 ${word}, 타입은 ${typeof word}`);
    word = 100
    console.log(`값은 ${word}, 타입은 ${typeof word}`);
    word = `100` + 10
    console.log(`값은 ${word}, 타입은 ${typeof word}`);
    word = `100` / 10
    console.log(`값은 ${word}, 타입은 ${typeof word}`);
}
{
    // 형변환
    // const mathScore = prompt(`your mathscore?`)
    // const engScore = prompt(`your engscore?`)
    // const average = (Number(mathScore) + Number(engScore)) / 2
    // alert(`average is $(average)`)
}

{
    console.log(
        String(1234),
        String(true),
        String(false),
        String(null),
        String(undefined),
    )
    
    console.log(
        Number(`1234`),
        Number(`1234abc`),
        Number(true),
        Number(false),
        Number(null),
        Number(undefined),
    );
    console.log(
        Boolean(0),
        Boolean(`0`),
        Boolean(``),
        Boolean(` `),
        Boolean(null),
        Boolean(undefined),
        Boolean(NaN),
    );
    
}