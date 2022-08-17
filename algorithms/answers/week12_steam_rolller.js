function steamRoller(arr){
  let newArr = [];

  function flattener(arr) {
    arr.forEach( item => {
      if(!Array.isArray(item)){
        newArr.push(item);
      } else {
        flattener(item);
      }
    });
  }

  flattener(arr);
  return newArr;
}

function steamRoller2(arr){
  let flatten = [].concat(...arr);
  return flatten.some(Array.isArray) ? steamRoller2(flatten) : flatten;
}