function rot13(str) {
    let huruf = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ]
  
    let kalimat = "";
  
  // bagain decoder 13
    for (let j = 0; j < str.length; j++){
      for (let i = 0; i < huruf.length ;i++){
        if(str[j].toUpperCase() == huruf[i]){
          if(i >= 13 && i < huruf.length){
            kalimat += huruf[i-13]
            // return `Ketemu: ${str}[${i}] ==  ${huruf[i-13]} [${i-13}]`
  
          } else if(i < 13 ){
            kalimat += huruf[i+13]
            // return `Ketemu: ${str}[${i}] ==  ${huruf[i+13]} [${i+13}]`
          }
        } 
      } 
      
      // cek apabila tidak ada di huruf
      if(!str[j].match(/[a-z]/i)){
          kalimat += str[j]
        }
    }
  
    return kalimat
  
    // console.log(str.length)
  }
  
  console.log(rot13('SERr pbqr pnzc!@#'))