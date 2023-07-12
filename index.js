window.addEventListener("load", function () {
  /**@type{HTMLCanvasElement} */
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;
  let yy = 0.15;
  let rr = -0.1;
  let gg = -0.32;
  let gr = -0.17;
  let rg = -0.34;
  let gy = 0.34;
  let yg = -0.2;
  let yr = 0;
  let ry = 0;
  const yellowToYellow = document.getElementById("yellowYellow");
  const yellowToYellowLabel = document.getElementById("yellowYellowLabel");

  const redToRed = document.getElementById("redRed");
  const redToRedLabel = document.getElementById("redRedLabel");

  const greenToGreen = document.getElementById("greenGreen");
  const greenToGreenLabel = document.getElementById("greenGreenLabel");

  const greenToRed = document.getElementById("greenRed");
  const greenToRedLabel = document.getElementById("greenRedLabel");

  const redToGreen = document.getElementById("redGreen");
  const redToGreenLabel = document.getElementById("redGreenLabel");

  const greenToYellow = document.getElementById("greenYellow");
  const greenToYellowLabel = document.getElementById("greenYellowLabel");

  const yellowToGreen = document.getElementById("yellowGreen");
  const yellowToGreenLabel = document.getElementById("yellowGreenLabel");

  const yellowToRed = document.getElementById("yellowRed");
  const yellowToRedLabel = document.getElementById("yellowRedLabel");

  const redToYellow = document.getElementById("redYellow");
  const redToYellowLabel = document.getElementById("redYellowLabel");

  const resetBtn = document.getElementById("resetBtn");
  const zeroBtn = document.getElementById("zeroBtn");
  const randomBtn = document.getElementById("randomBtn");

  yellowToYellow.addEventListener("change", (e) => {
    yy = e.target.value;

    updateLabels();
  });

  redToRed.addEventListener("change", (e) => {
    rr = e.target.value;
    updateLabels();
  });

  greenToGreen.addEventListener("change", (e) => {
    gg = e.target.value;
    updateLabels();
  });

  greenToRed.addEventListener("change", (e) => {
    gr = e.target.value;
    updateLabels();
  });

  redToGreen.addEventListener("change", (e) => {
    rg = e.target.value;
    updateLabels();
  });

  greenToYellow.addEventListener("change", (e) => {
    gy = e.target.value;
    updateLabels();
  });

  yellowToGreen.addEventListener("change", (e) => {
    yg = e.target.value;
    updateLabels();
  });

  yellowToRed.addEventListener("change", (e) => {
    yr = e.target.value;
    updateLabels();
  });

  redToYellow.addEventListener("change", (e) => {
    ry = e.target.value;
    updateLabels();
  });

  resetBtn.addEventListener("click", () => {
    this.location.reload();
  });

  zeroBtn.addEventListener("click", () => {
    yellowToYellow.value = 0;
    yellowToGreen.value = 0;
    greenToYellow.value = 0;
    yellowToRed.value = 0;
    redToYellow.value = 0;
    greenToGreen.value = 0;
    greenToRed.value = 0;
    redToGreen.value = 0;
    redToRed.value = 0;
    yy = 0;
    rr = 0;
    gg = 0;
    gr = 0;
    rg = 0;
    gy = 0;
    yg = 0;
    yr = 0;
    ry = 0;
  });


 randomBtn.addEventListener("click", () => {
   yellowToYellow.value = yy;
   yellowToGreen.value = yg;
   greenToYellow.value = gy;
   yellowToRed.value = yr;
   redToYellow.value = ry;
   greenToGreen.value = gg;
   greenToRed.value = gr;
   redToGreen.value = rg;
   redToRed.value = rr;
   yy = (Math.random() * (1 - -1) + -1).toFixed(2);
   rr = (Math.random() * (1 - -1) + -1).toFixed(2);
   gg = (Math.random() * (1 - -1) + -1).toFixed(2);
   gr = (Math.random() * (1 - -1) + -1).toFixed(2);
   rg = (Math.random() * (1 - -1) + -1).toFixed();
   gy = (Math.random() * (1 - -1) + -1).toFixed(2);
   yg = (Math.random() * (1 - -1) + -1).toFixed(2);
   yr = (Math.random() * (1 - -1) + -1).toFixed(2);
   ry = (Math.random() * (1 - -1) + -1).toFixed(2);
 });

  draw = (x, y, c, s) => {
    ctx.fillStyle = c;
    ctx.fillRect(x, y, s, s);
  };
  let particles = [];
  particle = (x, y, c) => {
    return { x: x, y: y, vx: 0, vy: 0, color: c };
  };
  random = () => {
    return Math.random() * 400 + 50;
  };

  create = (number, color) => {
    group = [];
    for (let i = 0; i < number; i++) {
      group.push(particle(random(), random(), color));
      particles.push(group[i]);
    }
    return group;
  };
  rule = (particles1, particles2, g) => {
    for (let i = 0; i < particles1.length; i++) {
      fx = 0;
      fy = 0;
      for (let j = 0; j < particles2.length; j++) {
        a = particles1[i];
        b = particles2[j];
        dx = a.x - b.x;
        dy = a.y - b.y;
        d = Math.sqrt(dx * dx + dy * dy);
        if (d > 0 && d < 80) {
          F = g * (1 / d);
          fx += F * dx;
          fy += F * dy;
        }
      }
      a.vx = (a.vx + fx) * 0.4;
      a.vy = (a.vy + fy) * 0.4;
      a.x += a.vx;
      a.y += a.vy;
      if (a.x <= 0 || a.x >= canvas.width) {
        a.vx *= -1;
      }
      if (a.y <= 0 || a.y >= canvas.height) {
        a.vy *= -1;
      }
    }
  };

  yellow = create(300, "yellow");
  red = create(300, "red");
  green = create(300, "green");

  animate = () => {
    // model 1
    // rule(red, red, -0.1)
    // rule(yellow, red, 0.15);
    // rule(green, green, -0.7)
    // rule(green, red -0.2)
    // rule(red, green, -0.1)

    // model 2
    rule(yellow, yellow, yy);
    rule(green, green, gg);
    rule(green, red, gr);
    rule(red, green, rg);
    rule(green, yellow, gy);
    rule(yellow, green, yg);
    rule(red, red, rr);
    rule(red, yellow, ry);
    rule(yellow, red, yr);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      draw(particles[i].x, particles[i].y, particles[i].color, 7);
    }
    requestAnimationFrame(animate);
  };
  animate();
  updateLabels = () => {
    yellowToYellowLabel.innerText = `Yellow to Yellow G   ${yy}`;
    redToRedLabel.innerText = `Red to Red G   ${rr}`;
    greenToGreenLabel.innerText = `Green to Green G   ${gg}`;
    greenToRedLabel.innerText = `Green to Red G   ${gr}`;
    redToGreenLabel.innerText = `Red to Green G   ${rg}`;
    greenToYellowLabel.innerText = `Green to Yellow G   ${gy}`;
    yellowToGreenLabel.innerText = `Yellow to Green G   ${yg}`;
    yellowToRedLabel.innerText = `Yellow to Red G   ${yr}`;
    redToYellowLabel.innerText = `Red to Yellow G   ${ry}`;
  };

  //load function end
});
