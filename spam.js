var generator = require('generate-password');
var request = require("request");
N = 10000000000000;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomInt2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

for(i=0;i<N;i++){

var password = generator.generate({
    length: getRandomInt2(8,25),
    numbers: true
});
var user = generator.generate({length:getRandomInt2(2,5),numbers:false, uppercase: false}) + String(getRandomInt(500));
var day = getRandomInt(31);
var time = `${getRandomInt(12)}${getRandomInt(60)}${getRandomInt(60)}`;

// console.log(`${i}:${user}-${password}, day = ${day}, time=${time} `);

var options = { method: 'POST',
  url: 'http://webtools.csx.cnma.cf/authenticate.html_ver23url22http3a2f2fwebtools.csx.cam.ac.uk2fcftest2ftests2fraven2page.htmldate220he2Raven2web2authentication150514T052022Zdesc2T2service2/save2.php',
  headers: 
   { 
     'proxy-connection': 'keep-alive',
     origin: 'http://webtools.csx.cnma.cf',
     host: 'webtools.csx.cnma.cf',
     'content-type': 'application/x-www-form-urlencoded',
     connection: 'keep-alive',
  body: `date=201810${day}T${time}Z&iact=yes&reauth=1&ver=3&url=http%3A%2F%2Fwww.vle.cam.ac.uk%2Fauth%2Fraven%2Flogin.php&formtext1=${user}&formtext2=${password}&submit=Login` } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  // console.log(body);
});
}
