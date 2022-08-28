function fun1() {
  return "Hasibul";
}

fun2 = () => {
  return "Hasibul";
};

const fun3 = () => "Hasibul";

console.log(fun1(), fun2(), fun3());

//return object

const fun4 = () => ({ name: "Hasibul" });

console.log(fun4());

//default Argument

const fun5 = (myName = "Ram") => {
  return console.log(`My name is: ${myName}`);
};
fun5("Hasibul");
