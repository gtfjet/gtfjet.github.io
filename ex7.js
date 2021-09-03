let mass1 = new Mass(2);
mass1.x  = 100;
mass1.y  = 200;
mass1.vy = -500;
mass1.color = 'red';

let mass2 = new Mass(2);
mass2.x  = 200;
mass2.y  = 200;
mass2.color = 'yellow';

let mass3 = new Mass(2);
mass3.x  = 300;
mass3.y  = 200;
mass3.color = 'white';

let mass4 = new Mass(2);
mass4.x  = 400;
mass4.y  = 200;
mass4.color = 'green';

let mass5 = new Mass(2);
mass5.x  = 500;
mass5.y  = 200;
mass5.color = 'blue';

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
  if(!paused) {
    var x1=mass1.x;
    var y1=mass1.y;
    var x2=mass2.x;
    var y2=mass2.y;
    var x4=mass4.x;
    var y4=mass4.y;
    var x5=mass5.x;
    var y5=mass5.y;
    solver.run();
    c.strokeStyle = mass1.color;
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(mass1.x,mass1.y);
    c.stroke();
    c.strokeStyle = mass2.color;
    c.beginPath();
    c.moveTo(x2,y2);
    c.lineTo(mass2.x,mass2.y);
    c.stroke();
    c.strokeStyle = mass4.color;
    c.beginPath();
    c.moveTo(x4,y4);
    c.lineTo(mass4.x,mass4.y);
    c.stroke();
    c.strokeStyle = mass5.color;
    c.beginPath();
    c.moveTo(x5,y5);
    c.lineTo(mass5.x,mass5.y);
    c.stroke();
  }
}
solver.maxIterations=1;
setInterval(run,solver.timeStep*1000);
