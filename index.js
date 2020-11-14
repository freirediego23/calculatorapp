const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/getData', handleMail)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


//Function handling the email 

function handleMail(req, res) {
  const operation = req.query.operation;
  const operand1 = Number(req.query.operand1);


  calculateRate(res, operation, operand1);

}


//Calculation function

function calculateRate(res, op, left) {

  let result = 0;

  if (op == "stamp" && left == 1) {
    result = left * 0.55;
  }
  else if (op == "stamp" && left == 2){
    result = left * 0.70;
  }
  else if (op == "stamp" && left == 3){
    result = left * 0.85;
  }
  else if(op == "stamp" && left == 3.5){
    result = left * 1.00;
  } else{
    "Value is not valid for this type of postage"
  }

  //Metered Envelopes

  if (op == "metered" && left == 1) {
    result = left * 0.50;
  }
  else if (op == "metered" && left == 2){
    result = left * 0.65;
  }
  else if (op == "metered" && left == 3){
    result = left * 0.80;
  }
  else if(op == "metered" && left == 3.5){
    result = left * 0.95;
  } else{
    "Value is not valid for this type of postage"
  }

  //Flat Envelopes

  if (op == "flats" && left == 1) {
    result = left * 1.00;
  }
  else if (op == "flats" && left == 2){
    result = left * 1.20;
  }
  else if (op == "flats" && left == 3){
    result = left * 1.40;
  }
  else if(op == "flats" && left == 4){
    result = left * 1.60;
  } 
  else if (op == "flats" && left == 5) {
    result = left * 1.80;
  }
  else if (op == "flats" && left == 6){
    result = left * 2.00;
  }
  else if (op == "flats" && left == 7){
    result = left * 2.20;
  }
  else if(op == "flats" && left == 8){
    result = left * 2.40;
  } 
  else if (op == "flats" && left == 9){
    result = left * 2.60;
  }
  else if(op == "flats" && left == 10){
    result = left * 2.80;
  }
  else if(op == "flats" && left == 11){
    result = left * 3.00;
  }
  else if(op == "flats" && left == 12){
    result = left * 3.20;
  }
  else if(op == "flats" && left == 13){
    result = left * 3.40;
  } else{
    "Value is not valid for this type of postage"
  }


  // Retail Section

  //Flat Envelopes

  if (op == "retail" && left == 1) {
    result = left * 3.80;
  }
  else if (op == "retail" && left == 2){
    result = left * 3.80;
  }
  else if (op == "retail" && left == 3){
    result = left * 3.80;
  }
  else if(op == "retail" && left == 4){
    result = left * 3.80;
  } 
  else if (op == "retail" && left == 5) {
    result = left * 4.60;
  }
  else if (op == "retail" && left == 6){
    result = left * 4.60;
  }
  else if (op == "retail" && left == 7){
    result = left * 4.60;
  }
  else if(op == "retail" && left == 8){
    result = left * 4.60;
  } 
  else if (op == "retail" && left == 9){
    result = left * 5.30;
  }
  else if(op == "retail" && left == 10){
    result = left * 5.30;
  }
  else if(op == "retail" && left == 11){
    result = left * 5.30;
  }
  else if(op == "retail" && left == 12){
    result = left * 5.30;
  }
  else if(op == "retail" && left == 13){
    result = left * 3.90;
  } else{
    "Value is not valid for this type of postage, You hear me?"
  }

 

  const params = {operation: op, left: left, result: result};

res.render('pages/result', params);

}

