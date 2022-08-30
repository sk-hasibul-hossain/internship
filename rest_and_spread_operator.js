//rest operator on object
function fun1(arg1, arg2, ...restArgs) {
  console.log(arg1, arg2, restArgs);
}
fun1("Hello", "Hasibul", 45, () => {}, 5);

const person = {
  name: "Hasibul",
  age: 26,
  hobby: "coding",
};

const { name, ...restOfPortion } = person;

console.log(name, restOfPortion);

//resr operstor on array

const arr = [1, 2, 3, 4];

const [first, ...restOfArrayElement] = arr;
console.log(first, restOfArrayElement);

//spread Opearor n object

const obj1 = {
  name: "Sk Hasibul Hossain",
  age: 26,
  hobby: "Playing Games",
};

const obj2 = {
  college: "UIT",
  dept: "CSE",
  deg: "BE",
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

//another way

const obj4 = {
  name: "Sk Hasibul Hossain",
  age: 26,
  hobby: "Playing Games",
};

const obj5 = {
  college: "UIT",
  dept: "CSE",
  deg: "BE",
  ...obj4,
};

console.log(obj5);
