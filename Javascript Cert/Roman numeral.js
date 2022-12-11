function convertToRoman(num) {
    let p1000, p900, p500, p400, p100;
    let p90,p50,p40,p10;
    let p9, p5, p4, p1;
    let sisa;
    let roman = "";
  
    //logic starts 1000
    p1000 = dfloor(num, 1000) > 0? dfloor(num, 1000) : 0  
    keRoman(p1000, "M")
    sisa = mfloor(num, 1000)
  
    p900 = dfloor(sisa, 900) > 0? dfloor(sisa, 900) : 0
    keRoman(p900, "CM")
    sisa = mfloor(sisa, 900)
  
    p500 = dfloor(sisa, 500) > 0? dfloor(sisa, 500) : 0
    keRoman(p500, "D")
    sisa = mfloor(sisa, 500)
  
    p400 = dfloor(sisa, 400) > 0? dfloor(sisa, 400) : 0
    keRoman(p400, "CD")
    sisa = mfloor(sisa, 400)
  
    p100 = dfloor(sisa, 100) > 0? dfloor(sisa, 100) : 0
    keRoman(p100, "C")
    sisa = mfloor(sisa, 100)
  
    // logic starts 90
    p90 = dfloor(sisa, 90) > 0? dfloor(sisa, 90) : 0
    keRoman(p90, "XC")
    sisa = mfloor(sisa, 90)
  
    p50 = dfloor(sisa, 50) > 0? dfloor(sisa, 50) : 0
    keRoman(p50, "L")
    sisa = mfloor(sisa, 50)
  
    p40 = dfloor(sisa, 40) > 0? dfloor(sisa, 40) : 0
    keRoman(p40, "XL")
    sisa = mfloor(sisa, 40)
  
    p10 = dfloor(sisa, 10) > 0? dfloor(sisa, 10) : 0
    keRoman(p10, "X")
    sisa = mfloor(sisa, 10)
  
    //logic starts 9
    p9 = dfloor(sisa, 9) > 0? dfloor(sisa, 9) : 0
    keRoman(p9, "IX")
    sisa = mfloor(sisa, 9)
  
    p5 = dfloor(sisa, 5) > 0? dfloor(sisa, 5) : 0
    keRoman(p5, "V")
    sisa = mfloor(sisa, 5)
  
    p4 = dfloor(sisa, 4) > 0? dfloor(sisa, 4) : 0
    keRoman(p4, "IV")
    sisa = mfloor(sisa, 4)
  
    p1 = dfloor(sisa, 1) > 0? dfloor(sisa, 1) : 0
    keRoman(p1, "I")
    sisa = mfloor(sisa, 1)
  
  function keRoman(pecahan, karakter){
    for(let i = pecahan; i > 0; i--){
      roman += karakter
    }
  }
  
   console.log("Roman: ", roman) 
   return roman;
  }
  
  function dfloor(korban, pelaku) {
    return Math.floor(korban/pelaku)
  }
  
  function mfloor(korban, pelaku) {
    return Math.floor(korban%pelaku)
  }
  
  
  convertToRoman(6969);