const price = [15, 5, 9, 10, 14, 21];
//Object.reduce(anonymous_Function_or_call_back_function(Previous_Value_or_Accumulator,Current_value,current_Index){return },Previous_Value_or_Accumulator);
//it return a single value
const sum = price.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(sum);

const obj = price.reduce(function (acc, curr, index) {
  const mappedCurrentElement = {};
  mappedCurrentElement[index] = curr;
  //console.log(mappedCurrentElement, Object.assign(mappedCurrentElement), acc);
  return Object.assign(acc, mappedCurrentElement);
}, {});

console.log(obj);
