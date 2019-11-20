var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = window.innerWidth,
  cx = cw / 2;
var ch = canvas.height = window.innerHeight,
  cy = ch / 2;

ctx.fillStyle = "#000";
var linesNum = 16;
var linesRy = [];
var requestId = null;

function Line(flag) {
  this.flag = flag;
  this.a = {};
  this.b = {};
  if (flag == "v") {
    this.a.y = 0;
    this.b.y = ch;
    this.a.x = randomIntFromInterval(0, ch);
    this.b.x = randomIntFromInterval(0, ch);
  } else if (flag == "h") {
    this.a.x = 0;
    this.b.x = cw;
    this.a.y = randomIntFromInterval(0, cw);
    this.b.y = randomIntFromInterval(0, cw);
  }
  this.va = randomIntFromInterval(25, 100) / 100;
  this.vb = randomIntFromInterval(25, 100) / 100;

  this.draw = function() {
    ctx.strokeStyle = "#ccc";
    ctx.beginPath();
    ctx.moveTo(this.a.x, this.a.y);
    ctx.lineTo(this.b.x, this.b.y);
    ctx.stroke();
  }

  this.update = function() {
    if (this.flag == "v") {
    
