for (let i = 1; i <= 20; i++) {

  var prob1 = document.createElement("div");

  prob1.className = "katas1output";

  prob1.style.height = 25 + "px";



  var ktext = document.createTextNode("output - " + i);

  prob1.appendChild(ktext);


  var placement = document.getElementById("d1");

  placement.appendChild(prob1);
}
for (let i = 2; i <= 20; i += 2) {
  var prob2 = document.createElement("div");

  prob2.className = "katas2output";

  prob2.style.height = 25 + "px";

  var ktext2 = document.createTextNode("output - " + i);

  prob2.appendChild(ktext2);

  var placement2 = document.getElementById("d2");

  placement2.appendChild(prob2);
}
for (let i = 1; i <= 20; i += 2) {
  var prob3 = document.createElement("div");

  prob3.className = "katas3output";

  prob3.style.height = 25 + "px";

  var ktext3 = document.createTextNode("output - " + i);

  prob3.appendChild(ktext3);

  var placement3 = document.getElementById("d3");

  placement3.appendChild(prob3);

}
for (let i = 5; i <= 100; i += 5) {
  var prob4 = document.createElement("div");

  prob4.className = "katas4output";

  prob4.style.height = 25 + "px";

  var ktext4 = document.createTextNode("output - " + i);

  prob4.appendChild(ktext4);

  var placement4 = document.getElementById("d4");

  placement4.appendChild(prob4);
}
for (let i = 0; i <= 10; i++) {
  var prob5 = document.createElement("div");
  
  prob5.className = "katas5output";

  prob5.style.height = 25 + "px";

  var ktext5 = document.createTextNode("output - " + i*i);

  prob5.appendChild(ktext5);

  var placement5 = document.getElementById("d5");

  placement5.appendChild(prob5);
}
