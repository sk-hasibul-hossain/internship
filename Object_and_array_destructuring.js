//Object Destructuring

const car = {
  color: "Red",
  gears: 3,
  engine: "Diesel",
};

console.log(car.color);

const { color, gears, engine } = car;

console.log(color);

// change key variable name

// const { color: carColor, gears, engine } = car;

// console.log(carColor);

//by using function
const fun1 = (obj) => {
  const { color, gears, engine } = obj;
  console.log(color);
};
fun1(car);

const fun2 = ({ color, gears, engine }) => {
  console.log(color);
};
fun2(car);

//error handling(if we not pass any argument into a function)

const fun3 = ({ color, gears, engine } = {}) => {
  console.log(color);
};
fun3();

//error handling with default value

const fun4 = ({ color = "green", gears = 4, engine } = {}) => {
  console.log(color, gears);
};
fun4();

//We can write also that way
const fun5 = (obj = {}) => {
  const { color = "green", gears = 4, engine } = obj;
  console.log(color, gears);
};
fun5();

// array Destructuring

const arr = [5, 4, 3, 2, 1];

const [first, second, third] = arr;

console.log(first);
