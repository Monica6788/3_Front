console.log("Hello, World");

/*
    JavaScript: Dyanamic type language
    => A language that does not assign the data type when declaring a variable,
        and decides the data type according to the value that is assigned during runtime
    자바스크립트: 동적 타입 언어
    => 변수를 선언할 때 타입을 미리 지정하지 않고, 프로그램 실행 중(런타임)에 할당되는 값에 따라 타입이 결정되는 언어
*/

/*
    Variable Declaration Keywords in JavaScript
    - var: Used in Past (Allows redeclaration, lacks Block-Scope(unpredictable) => NOT recommended)
    - let: Reassignable variable (Equivalent to standard variables in Java)
    - const: Constant keyword that disallows reassignment (Equivalent to the 'final' keyword in Java)

    자바스크립트 변수 선언 키워드
    - var: 과거에 사용하던 방식 (중복 선언 허용, 블록 스코프 미지원(어디로든 튄다!) 등의 이유로 권장하지 않음)
    - let: 재할당이 가능한 변수 (자바에서의 일반적인 변수)
    - const: 재할당이 불가능한 상수를 표현하는 키워드(자바에서의 final 키워드)
*/
console.log(name);
console.log(age);
console.log("-------------");
/*
    호이스팅(Hoisting)
    : 변수 및 함수 선언문이 해당 스코프의 최상단으로 끌어올려진 것처럼 동작하는 현상
*/

var name = "Monica";
var age;

console.log(name);  // "Monica"
console.log(age);   // undefined

console.log("-------------");   // var 키워드 사용 시 동일한 이름으로 재선언 가능 (위험요소)
var name = "Leah";
console.log(name);
// ----------------------------------------------------------------------------------------------------------
/*
    In case of let, const
    : Hoisting occurs. But located before declaration zone(TDZ).
    => If accessed before variable declaration code, raise stability by occurring ReferenceError

*/

console.log("=============")
// console.log(name2);
// ReferenceError occurred

let name2 = "Monica";
console.log(name2);

name2 = "Leah";     // 재할당(값 변경) 가능
console.log(name2);

const name3 = "Elliott";
console.log(name3);

// name3 = "Maru";      // TypeError (Cannot Reassign)
const arr = [1, 2, 3];  // [1, 2, 3]
arr.push(5);            // [1, 2, 3, 5] 실제 데이터만 바뀌고 메모리 주소는 안 바뀌므로 오류 X
console.log(arr);

// arr = [5];       // 메모리 주소 자체를 재할당(불가)
// ------------------------------------------------------------------------------------------------------
console.log("=============");
/*
    Variable Naming Rules (Same as Java)

    1. Only Underscores(_) and dollar signs($) are allowed among special characters
    2. Cannot start with numbers
    3. Cannot use keywords
    4. Can only use english letters, numbers and special symbols(_, $)

    [Naming Convention]
    - variable-name, function-name: camelCase (ex. userId, productPrice)
    - class-name: PascalCase (ex. Product, UserProfile)
    - attribute-name and class-name in HTML, CSS: kebab-case (ex. user-id, item-list)

    변수 명명 규칙 (자바와 같음)

    1. 특수문자는 언더바(_), 달러($)만 사용 가능
    2. 숫자로 시작할 수 없음
    3. 예약어(키워드) 사용 불가
    4. 영문자, 숫자, 특수기호만 사용 가능

    [관례]
    - 변수명, 함수명: 카멜케이스 (ex. userId, productPrice)
    - 클래스명: 파스칼케이스 (ex. Product, UserProfile)
    - HTML, CSS 속성 및 클래스명: 케밥케이스 (ex. user-id, item-list)
*/

/*
    자료형
    - 원시타입 (기본자료형): String, Number, Boolean, undefined, null, Symbol
    - 참조타입 (객체): Object, Array, Function 등
*/
let value = "Coldbrew"; // String
// typeof valueName => Check the data type of the value
console.log(typeof value);

value = 5500;
console.log(typeof value);  // Number

const num1 = 500;
const num2 = 2.71;

console.log(typeof num1, typeof num2);
// Number type does not distinct integers and real numbers

const isTrue = true;
console.log(typeof isTrue); // boolean

let num3;
console.log(num3, typeof num3);
// undefined: Auto-assigned when not initialize after declare a variable

let data = 1000;
data = null;
console.log(typeof data);   // => object
// null: Assign when show that "there exists no value" explicitly (Initial design flaw/error of js)
// null: 명시적으로 "값이 없음"을 나타낼 때 할당 (js 초기 설계상의 오류/버그)

const s1 = Symbol("100");
const s2 = Symbol("100");
console.log(s1, s2);
console.log(s1 == s2);
// Symbol: One and Only, Unique value. Even though the inner values are same, each variable has its own unique address.
// => result: false

const arr2 = ["red", "blue", "green"];
console.log(arr2, typeof arr2);
// Array: Similar to List in Java, has a dynamic size
arr2.push("orange");

console.log(arr2[3]);
console.log(arr2[5]);
// Return 'undefined' when access to non-existent index 존재하지 않는 인덱스 접근 시 undefined 반환

const myInfo = {
    // key: value
    name: "Monica",
    age: 20,
    introduce: function() {
        console.log("I should've killed myself");
    }
};
myInfo.introduce();     // Run(Call) the method directly
// Access to keys inside the object
// [1] 점 표기법 접근: varName.key
// [2] 대괄호 표기법 접근: varName["key"]

console.log(myInfo.name);
console.log(myInfo["name"]);

console.log(typeof myInfo); // => object (key-value structure, similar to Map in Java)