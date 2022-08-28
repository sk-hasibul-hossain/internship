const price = [15, 5, 9, 10, 14, 21];

//Object.map(anonymous_Function_or_call_back_function(Current_Value,Index,array){ return });

price.map(function (val, index, arr) {
  console.log(`\nCurreint Value ${val}\nIndex ${index}\nArray ${arr}\n`);
});

const result = price.map(function (val, index, arr) {
  return 4 * val;
});

console.log(result);
