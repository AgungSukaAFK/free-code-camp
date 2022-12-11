function palindrome(str) {
    let hasil;
    let trimmedString = str.replace(/[^a-zA-Z0-9]/g, '')
    let newString = "";
    for (let i = 0; i < trimmedString.length ; i++) {
      if(trimmedString[i].toUpperCase() == trimmedString[trimmedString.length - i - 1].toUpperCase()){
        newString += trimmedString[i] 
        }
      // if awal.localcompare(akhir) { lanjut iterasi return true }
      // console.log(trimmedString[i] + " : " + trimmedString[trimmedString.length - i - 1]);
    }
    if(trimmedString === newString) {
      hasil = true
      console.log(str + " is Palindrome")
    } else {
      console.log(str + " is NOT Palindrome")
      hasil = false
    }
    return hasil
  }
  
  // palindrome("kasur rusak")
  palindrome("kodok");
  // ignore whitespace,comma,dot,underscore,dash, except letter