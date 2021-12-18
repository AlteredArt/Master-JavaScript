// moving an element
const list = [1,2,3,4,5,6];

function move (array, index, offset){
  const out = [...array];
  const element = out.splice(index, 1)[0];
  out.splice(index + offset, 0, element);
  return out;
}

console.log('move',  move(list, 0, 3));