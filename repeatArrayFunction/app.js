// Arrayda təkrarlanan ədədləri silib yeni array yaratmaq

let arr = [23, 12, 34, 12, 30, 12, 34, 89, 1, 3, 0, 123, 453]
let newArray = [...new Set(arr)]
console.log(newArray)

// filter metodu ilə yazmaq istədim arrayda təkrarlanan elementləri silmək funksiyasın bacarmadım. Araşdırdım tapdım lakin başa düşmədim deyə yazmadım


// filter metodunu başa düşmək üçün aşagıdakı 2 problemi internetdən tapıb həll etməyə çalışdım


const person = [{
  name: "Adem",
  age: 25,
  languages: ["JavaScript", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "HTML"],
}
];

// yaşı 30dan çox olan istifadəçini göstərmək
const user = person.filter(person => person.age >= 30)
console.log(user)

// javacsript dili istifadə edən useri göstərmək
const javascriptUser = person.filter(person => person.languages.includes("JavaScript"));
const javascriptUser2 = person.filter(insan => insan.languages.includes("JavaScript"));

console.log(javascriptUser)
console.log(javascriptUser2)


// burada 2cidə niyə filter metodu daxilində person istifadə etməmək də olar. onun yerində başqa nə olsa yaza biləcəyimi anlamadım
