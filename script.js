//K1
for (let i = 1; i <= 20; i++) {
  var prob1 = document.createElement("div");
  prob1.className = "katas1output";
  prob1.style.height = 25 + "px";
  var ktext = document.createTextNode("output - " + i);
  prob1.appendChild(ktext);
  var placement = document.getElementById("d1");
  placement.appendChild(prob1);
}

//K2
for (let i = 2; i <= 20; i += 2) {
  var prob2 = document.createElement("div");
  prob2.className = "katas2output";
  prob2.style.height = 25 + "px";
  var ktext2 = document.createTextNode("output - " + i);
  prob2.appendChild(ktext2);
  var placement2 = document.getElementById("d2");
  placement2.appendChild(prob2);
}

//K3
for (let i = 1; i <= 20; i += 2) {
  var prob3 = document.createElement("div");
  prob3.className = "katas3output";
  prob3.style.height = 25 + "px";
  var ktext3 = document.createTextNode("output - " + i);
  prob3.appendChild(ktext3);
  var placement3 = document.getElementById("d3");
  placement3.appendChild(prob3);
}

//K4
for (let i = 5; i <= 100; i += 5) {
  var prob4 = document.createElement("div");
  prob4.className = "katas4output";
  prob4.style.height = 25 + "px";
  var ktext4 = document.createTextNode("output - " + i);
  prob4.appendChild(ktext4);
  var placement4 = document.getElementById("d4");
  placement4.appendChild(prob4);
}

//K5
for (let i = 0; i <= 10; i++) {
  var prob5 = document.createElement("div");
  prob5.className = "katas5output";
  prob5.style.height = 25 + "px";
  var ktext5 = document.createTextNode("output - " + i * i);
  prob5.appendChild(ktext5);
  var placement5 = document.getElementById("d5");
  placement5.appendChild(prob5);
}

//K6
for (let i = 20; i >= 0; i -= 1) {
  var prob6 = document.createElement("div");
  prob6.className = "katas6output";
  prob6.style.height = 25 + "px";
  var ktext6 = document.createTextNode("output - " + i);
  prob6.appendChild(ktext6);
  var placement6 = document.getElementById("d6");
  placement6.appendChild(prob6);
}

//K7
for (let i = 20; i >= 0; i -= 2) {
  var prob7 = document.createElement("div");
  prob7.classname = "katas7output";
  prob7.style.height = 25 + "px";
  var ktext7 = document.createTextNode("output - " + i);
  prob7.appendChild(ktext7);
  var placement7 = document.getElementById("d7");
  placement7.appendChild(prob7);
}

//K8
for (let i = 19; i >= 0; i -= 2) {
  var prob8 = document.createElement("div");
  prob8.classname = "katas8output";
  prob8.style.height = 25 + "px";
  var ktext8 = document.createTextNode("output - " + i);
  prob8.appendChild(ktext8);
  var placement8 = document.getElementById("d8");
  placement8.appendChild(prob8);
}

//K9
for (let i = 100; i >= 0; i -= 5) {
  let prob9 = document.createElement("div");
  prob9.classname = "katas9output";
  prob9.style.height = 25 + "px";
  let ktext9 = document.createTextNode("output - " + i);
  prob9.appendChild(ktext9);
  let placement9 = document.getElementById("d9");
  placement9.appendChild(prob9);
}

//K10
for (let i = 10; i >= 0; i--) {
  let prob10 = document.createElement("div");
  prob10.classname = "katas10output";
  prob10.style.height = 25 + "px";
  let ktext10 = document.createTextNode("output - " + i * i);
  prob10.appendChild(ktext10);
  let placement10 = document.getElementById("d10");
  placement10.appendChild(prob10);
}

//K11
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (let sampleArrayIndex = 0; sampleArrayIndex < sampleArray.length; sampleArrayIndex++) {
  let prob11 = document.createElement("div");
  prob11.classname = "katas11output";
  prob11.style.height = 25 + "px";
  let ktext11 = document.createTextNode(sampleArray[sampleArrayIndex]);
  prob11.appendChild(ktext11);
  let placement11 = document.getElementById("d11");
  placement11.appendChild(prob11);
}

//K12
for (let sampleArrayIndex = 0; sampleArrayIndex < sampleArray.length; sampleArrayIndex++) {
  if (sampleArray[sampleArrayIndex] % 2 === 0) {
    let prob12 = document.createElement("div");
    prob12.className = "katas12output";
    prob12.style.height = 25 + "px";
    let ktext12 = document.createTextNode(sampleArray[sampleArrayIndex]);
    prob12.appendChild(ktext12);
    let placement12 = document.getElementById("d12");
    placement12.appendChild(prob12);
  }
}

//K13
for (let sampleArrayIndex = 0; sampleArrayIndex < sampleArray.length; sampleArrayIndex++) {
  if (sampleArray[sampleArrayIndex] % 2 === 1) {
    let prob13 = document.createElement("div");
    prob13.className = "katas13output";
    prob13.style.height = 25 + "px";
    let ktext13 = document.createTextNode(sampleArray[sampleArrayIndex]);
    prob13.appendChild(ktext13);
    let placement13 = document.getElementById("d13");
    placement13.appendChild(prob13);
  }
}

//K14
for (let sampleArrayIndex = 0; sampleArrayIndex < sampleArray.length; sampleArrayIndex++) {
  let prob14 = document.createElement("div");
  prob14.classname = "katas14output";
  prob14.style.height = 25 + "px";
  let ktext14 = document.createTextNode(sampleArray[sampleArrayIndex] * sampleArray[sampleArrayIndex]);
  prob14.appendChild(ktext14);
  let placement14 = document.getElementById("d14");
  placement14.appendChild(prob14);
}

//K15
let sum = 0
for (i = 0; i <= 20; i++) {
  sum += i;
}
let prob15 = document.createElement("div");
prob15.classname = "katas15output";
prob15.style.height = 25 + "px";
let ktext15 = document.createTextNode(sum);
prob15.appendChild(ktext15);
let placement15 = document.getElementById("d15");
placement15.appendChild(prob15);

//K16
let total = 0
for (let sampleArrayIndex = 0; sampleArrayIndex < sampleArray.length; sampleArrayIndex++) {
  total += sampleArray[sampleArrayIndex];
}
let prob16 = document.createElement("div");
prob16.classname = "katas16output";
prob16.style.height = 25 + "px";
let ktext16 = document.createTextNode(total);
prob16.appendChild(ktext16);
let placement16 = document.getElementById("d16");
placement16.appendChild(prob16);

//K17
let smallest = Math.min.apply(null, sampleArray);
let prob17 = document.createElement("div");
prob17.classname = "katas17output";
prob17.style.height = 25 + "px";
let ktext17 = document.createTextNode(smallest);
prob17.appendChild(ktext17);
let placement17 = document.getElementById("d17");
placement17.appendChild(prob17);

//K18
let largest = Math.max.apply(null, sampleArray);
let prob18 = document.createElement("div");
prob18.classname = "katas18output";
prob18.style.height = 25 + "px";
let ktext18 = document.createTextNode(largest);
prob18.appendChild(ktext18);
let placement18 = document.getElementById("d18");
placement18.appendChild(prob18);

//K19
for (let grayrect = 1; grayrect <= 20; grayrect++) {
  let grayrectangle = grayrect;
  let prob19 = document.createElement("div");
  prob19.classname = "katas19output";
  prob19.style.height = 20 + "px";
  prob19.style.width = 100 + "px";
  prob19.style.backgroundColor = "gray";
  let ktext19 = document.createTextNode(grayrectangle);
  prob19.appendChild(ktext19);
  let placement19 = document.getElementById("d19");
  placement19.appendChild(prob19);
}

//K20
for (let rectangles = 0; rectangles < 20; rectangles++) {
  let prob20 = document.createElement("div");
  prob20.classname = "katas20output";
  prob20.style.height = 20 + "px";
  prob20.style.width = 105 + (rectangles * 5) + "px";
  prob20.style.backgroundColor = "gray";
  let ktext20 = document.createTextNode("Gray Rectangle");
  prob20.appendChild(ktext20);
  let placement20 = document.getElementById("d20");
  placement20.appendChild(prob20);
}

//K21
for (i=0; i < sampleArray.length; i++) {
  let prob21 = document.createElement("div");
  prob21.classname = "katas21output";
  prob21.style.height = 20 + "px";
  prob21.style.width = sampleArray[i] + "px";
  prob21.style.backgroundColor = "gray";
  let ktext21 = document.createTextNode("~");
  prob21.appendChild(ktext21);
  let placement21 = document.getElementById("d21");
  placement21.appendChild(prob21);
}

//K22
for (i=0; i < sampleArray.length; i++) {
  let prob22 = document.createElement("div");
  prob22.style.height = 20 + "px";
  prob22.style.width = sampleArray[i] + "px";
  if (i % 2 == 0) {
    prob22.className = "katas22outputred";
  }
  else {
    prob22.className = "katas22outputgray"
  }
  let ktext22 = document.createTextNode("~");
  prob22.appendChild(ktext22);
  let placement22 = document.getElementById("d22");
  placement22.appendChild(prob22);
}
//K23
for (i=0; i < sampleArray.length; i++) {
  let prob23 = document.createElement("div");
  prob23.style.height = 20 + "px";
  prob23.style.width = sampleArray[i] + "px";
  if (sampleArray[i] % 2 == 0) {
    prob23.className = "katas23outputred";
  }
  else {
    prob23.className = "katas23outputgray"
  }
  let ktext23 = document.createTextNode("~");
  prob23.appendChild(ktext23);
  let placement23 = document.getElementById("d23");
  placement23.appendChild(prob23);
}

