function checkCashRegister(price, cash, cid) {
    const kembalian = {
      status: "",
      change: []
    } 
  
      // deklarasi tiap cid mata uang
      const laci = {
        hundred: {
          name: cid[8][0],
          value: cid[8][1],
          lembar: cid[8][1] / 100
        },
        twenty: {
          name: cid[7][0],
          value: cid[7][1],
          lembar: cid[7][1] / 20
        },
        ten: {
          name: cid[6][0],
          value: cid[6][1],
          lembar: cid[6][1] / 10
        },
        five: {
          name: cid[5][0],
          value: cid[5][1],
          lembar: cid[5][1] / 5
        },
        one: {
          name: cid[4][0],
          value: cid[4][1],
          lembar: cid[4][1] / 1
        },
        quart: {
          name: cid[3][0],
          value: cid[3][1],
          lembar: cid[3][1] / 0.25
        },
        dime: {
          name: cid[2][0],
          value: cid[2][1],
          lembar: cid[2][1] / 0.1
        },
        nickel: {
          name: cid[1][0],
          value: cid[1][1],
          lembar: cid[1][1] / 0.05
        },
        penny: {
          name: cid[0][0],
          value: cid[0][1],
          lembar: cid[0][1] / 0.01
        },
      }
      //akhir deklarasi
  
    // deret variabel
    let sisa = (cash-price).toFixed(3);
    kembalian.status = "OPEN"
    kembalian.change = []
    // kembalian.change = [cid[0][0], sisa]
  
  // Menyortir pecahan x100 mod 100
    /*
    penny 0,  0.01
    nickel 1,   0.05
    dime 2,  0.1
    quart 3,   0.25
    one 4,   1
    five 5,  5
    ten 6,  10
    twenty 7,  20
    hundred 8,   100
     
     ngitungSisa(nilai, isBulat)
     */
    let pSisa = 0
  
    let pHundred = ngitungSisa(sisa, true, 100)
    // pSisa = sisa % 100
    if(pHundred > laci.hundred.lembar){ //hundred
        let sisaLembar = pHundred - laci.hundred.lembar
        pSisa -= laci.hundred.lembar*100
        pHundred -= sisaLembar
      } else {
        pSisa = sisa % 100
      }
  
    let pTwenty = ngitungSisa(pSisa, true, 20)
      if(pTwenty > laci.twenty.lembar){ //twenty
        let sisaLembar = pTwenty - laci.twenty.lembar
        pSisa -= laci.twenty.lembar*20
        pTwenty -= sisaLembar
      } else {
        pSisa %= 20
      }
    
    let pTen = ngitungSisa(pSisa, true, 10)
      if(pTen > laci.ten.lembar){ //ten
          let sisaLembar = pTen - laci.ten.lembar
          pSisa -= laci.ten.lembar*10
          pTen -= sisaLembar
          // pSisa %= 20
        } else {
          pSisa %= 10
        }
  
    let pFive = ngitungSisa(pSisa, true, 5)
      if(pFive > laci.five.lembar){ //five
          let sisaLembar = pFive - laci.five.lembar
          pSisa -= laci.five.lembar*5
          pFive -= sisaLembar
          // pSisa %= 20
        } else {
          pSisa %= 5
        }
  
    let pOne = ngitungSisa(pSisa, true, 1)
      if(pOne > laci.one.lembar){ //one
          let sisaLembar = pOne - laci.one.lembar
          pSisa -= laci.one.lembar*1
          pOne -= sisaLembar
          // pSisa %= 20
        } else {
          pSisa %= 1
        }
  
    let pQuart = ngitungSisa(pSisa, false, 0.25)
    // pSisa = (pSisa - (pQuart*0.25)).toFixed(2)
    if(pQuart > laci.quart.lembar){ //quart
          let sisaLembar = pQuart - laci.quart.lembar
          pSisa -= laci.quart.lembar*0.25
          pQuart -= sisaLembar
          // pSisa %= 20
        } else {
          pSisa = (pSisa - (pQuart*0.25)).toFixed(2)
        }
  
    let pDime = ngitungSisa(pSisa, false, 0.1)
      if(pDime > laci.dime.lembar){ //dime
          let sisaLembar = pDime - laci.dime.lembar
          pSisa -= laci.dime.lembar*0.1
          pDime -= sisaLembar
          // pSisa %= 20
        } else {
          pSisa = (pSisa - (pDime*0.1)).toFixed(2)
        }
  
    let pNickel = ngitungSisa(pSisa, false, 0.05)
    if(pNickel > laci.nickel.lembar){ //nickel
          let sisaLembar = pNickel - laci.nickel.lembar
          pSisa -= laci.nickel.lembar*0.5
          pNickel -= sisaLembar
          // pSisa %= 20
        } else {
          pSisa = (pSisa - (pNickel*0.05)).toFixed(2)
        }
  
    let pPenny = ngitungSisa(pSisa, false, 0.01)
    if(pPenny >= laci.penny.lembar){ //penny
          let sisaLembar = pPenny - laci.penny.lembar
          pSisa -= laci.penny.lembar*0.01
          pPenny -= sisaLembar
          // pSisa %= 20
        } else {
          pSisa = (pSisa - (pPenny*0.01)).toFixed(2)
        }
    // End of menyortir pecahan
  
    // Begin memuat output
    if(pSisa > 0){
      kembalian.status = "INSUFFICIENT_FUNDS"
    } else if(pSisa == 0) {
        if(pHundred == laci.hundred.lembar &&
          pTwenty == laci.twenty.lembar && 
          pTen == laci.ten.lembar &&
          pFive == laci.five.lembar &&
          pOne == laci.one.lembar &&
          pQuart == laci.quart.lembar &&
          pDime == laci.dime.lembar &&
          pNickel == laci.nickel.lembar &&
          pPenny == laci.penny.lembar
        ){
        kembalian.status = "CLOSED"
      } else {
        kembalian.status = "OPEN"
      }
    }
    let hasil = []
  
    if(kembalian.status == "OPEN") {
      if(pHundred > 0){
        hasil.push([laci.hundred.name, pHundred*100])
      }
      if(pTwenty > 0){
        hasil.push([laci.twenty.name, pTwenty*20])
      }
      if(pTen > 0){
        hasil.push([laci.ten.name, pTen*10])
      }
      if(pFive > 0){
        hasil.push([laci.five.name, pFive*5])
      }
      if(pOne > 0){
        hasil.push([laci.one.name, pOne*1])
      }
      if(pQuart > 0){
        hasil.push([laci.quart.name, pQuart*0.25])
      }
      if(pDime > 0){
        hasil.push([laci.dime.name, pDime*0.1])
      }
      if(pNickel > 0){
        hasil.push([laci.nickel.name, pNickel*0.05])
      }
      if(pPenny > 0){
        hasil.push([laci.penny.name, pPenny*0.01])
      }
    } else if(kembalian.status == "CLOSED"){
      if(pPenny >= 0){
        hasil.push([laci.penny.name, pPenny*0.01])
      }
      if(pNickel >= 0){
        hasil.push([laci.nickel.name, pNickel*0.05])
      }
      if(pDime >= 0){
        hasil.push([laci.dime.name, pDime*0.1])
      }
      if(pQuart >= 0){
        hasil.push([laci.quart.name, pQuart*0.25])
      }
      if(pOne >= 0){
        hasil.push([laci.one.name, pOne*1])
      }
      if(pFive >= 0){
        hasil.push([laci.five.name, pFive*5])
      }
      if(pTen >= 0){
        hasil.push([laci.ten.name, pTen*10])
      }
      if(pTwenty >= 0){
        hasil.push([laci.twenty.name, pTwenty*20])
      }
      if(pHundred >= 0){
        hasil.push([laci.hundred.name, pHundred*100])
      }
    }
  
    console.log(hasil)
    kembalian.change = hasil
    // End of memuat output
  
   // Testing below
    // console.log(laci.hundred.lembar)
    // console.log("sisa: ", sisa)
    console.log("p Sisa: ", pSisa)
    console.log(`hundred 100: ${pHundred}`)
    console.log(`twenty 20: ${pTwenty}`)
    console.log(`Ten 10: ${pTen}`)
    console.log(`five 5: ${pFive}`)
    console.log(`one 1: ${pOne}`)
    console.log(`quart 0.25: ${pQuart}`)
    console.log(`dime 0.1: ${pDime}`)
    console.log(`nickel 0.05: ${pNickel}`)
    console.log(`penny 0.01: ${pPenny}`)
    console.log("p Sisa: ", pSisa)
    console.log("status: ", kembalian.status)
  
    console.log(kembalian)
  
  
    return kembalian
  }
  
  function ngitungSisa(nilai, isBulat, tipe) {
    if(!isBulat){
      if(tipe == 0.25){ //bagian yg dikomentari salah, harusnya dibaca nilai per 0.25 nya
        if(nilai >= 0.25 && nilai < 1){
          return Math.floor(nilai/0.25)
        } else {
          return 0
        }
      } else if(tipe == 0.1) {
        if(nilai >= 0.1){
          // let biju = Math.floor(((nilai*10000)%10000)/10000)
          return Math.floor(nilai/0.1)
        } else {
          return 0
        }
      } else if(tipe == 0.05) {
        if(nilai >= 0.05){
          return Math.floor(nilai/0.05)
        } else {
          return 0
        }
      } else if(tipe == 0.01) {
        if(nilai >= 0.01){
          return Math.floor(nilai/0.01)
        } else {
          return 0
        }
      }
    } else if(isBulat){
      if(tipe == 100){
        if(nilai >= 100){
          return Math.floor(nilai/100)
        } else {
          return 0
        }
      } else if(tipe == 20) {
        if(nilai >= 20){
          return Math.floor(nilai/20)
        } else {
          return 0
        }
      } else if(tipe == 10){
        if(nilai >= 10){
          return Math.floor(nilai/10)
        } else {
          return 0
        }
      } else if(tipe == 5){
        if(nilai >= 5){
          return Math.floor(nilai/5)
        } else {
          return 0
        }
      } else if(tipe == 1){
        if(nilai >= 1){
          return Math.floor(nilai/1)
        } else {
          return 0
        }
      } else if(tipe == 1){
        if(nilai >= 1){
          return Math.floor(nilai/1)
        } else {
          return 0
        }
      }
    }
  }
  // function ngitungSisa(nilai, isBulat) {
  //   if(!isBulat){
  //     return ((nilai*10000)%10000)/10000
  //   } else if(isBulat){
  //     if(nilai >= 1 && nilai <10){
  //       return nilai
  //     } else if(nilai >=10 && nilai < 100) {
  //       return nilai % 100
  //     }else {
  //       return 0
  //     }
  //   }
  // }
  
  // checkCashRegister(9.35, 10, [["PENNY", 1.99], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  
  // checkCashRegister(3.26, 400, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  
  // checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  
  // checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  /*
  
    penny 0
    nickel 1
    dime 2
    quart 3
    one 4
    five 5
    ten 6
    twenty 7
    hundred 8
  
    logicnya:
    mencari pecahan = bilangan dikali 100 dan dimodulo 100
    dipecah lagi berdasarkan modulo pecahan yang tersedia
    setelah sudah dapat sekian lembar/koin dan nilainya
    tinggal dimasukkan ke return
   */
  
  /*
    note 1
    logic pOne dan pPenny udah ketemu
    tinggal kembangkan buat logic pecahan lainnya, 
    jangan lupa dummy return 0 nya di fix nanti
    function ngitungSisa
  */
  
  /*
    Logic menentukan status dan change
  */