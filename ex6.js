let svgNS = "http://www.w3.org/2000/svg";
let diagram = document.createElementNS(svgNS, 'svg');
diagram.setAttribute('width', 600);
diagram.setAttribute('height', 900);
diagram.setAttribute('viewBox', "0 0 600 900");
document.body.appendChild(diagram);
var solver = new Solver();

let mass1 = new Mass(2);
mass1.x  = 100;
mass1.y  = 200;
mass1.vy = -300;

let mass2 = new Mass(2);
mass2.x  = 200;
mass2.y  = 200;

let mass3 = new Mass(2);
mass3.x  = 300;
mass3.y  = 200;

let mass4 = new Mass(2);
mass4.x  = 400;
mass4.y  = 200;

let mass5 = new Mass(2);
mass5.x  = 500;
mass5.y  = 200;

let mount1 = new Mount();
mount1.flange.x = 300;
mount1.flange.y = 200;

let mount2 = new Mount();
mount2.flange.x = 300;
mount2.flange.y = 500;

let spring1 = new Spring();
let spring2 = new Spring();
let spring3 = new Spring();
let spring4 = new Spring();
let spring5 = new Spring();
let spring6 = new Spring();

spring1.flange_a = mount1.flange;
spring1.flange_b = mass1.flange[0];
spring2.flange_a = mass1.flange[1];
spring2.flange_b = mass2.flange[0];
spring3.flange_a = mass2.flange[1];
spring3.flange_b = mass3.flange[0];
spring4.flange_a = mass3.flange[1];
spring4.flange_b = mass4.flange[0];
spring5.flange_a = mass4.flange[1];
spring5.flange_b = mass5.flange[0];
spring6.flange_a = mass5.flange[1];
spring6.flange_b = mount2.flange;

function run() {
  solver.maxIterations=1;
  solver.run();
}
// run();
setInterval(run,solver.timeStep*1000);
