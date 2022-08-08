
function capitalizeLitter(str){
  let odlArr = str.split(" ")
  let newArr = [];
  for(let i = 0 ; i < odlArr.length; i++){
    newArr.push(odlArr[i].charAt(0).toUpperCase() + odlArr[i].slice(1))
  }
  return newArr.join(' ');
}

console.log(capitalizeLitter('my name is abdulrahman fathy'))