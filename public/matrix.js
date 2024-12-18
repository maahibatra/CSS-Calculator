const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let cw = window.innerWidth;
let ch = window.innerHeight;

let charArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "A",
    "B",
    "Г",
    "Д",
    "Є",
    "S",
    "3",
    "И",
    "Ѳ",
    "I",
    "K",
    "Л",
    "M",
    "H",
    "Ѯ",
    "Ѻ",
    "П",
    "Ч",
    "P",
    "C",
    "T",
    "V",
    "Ф",
    "X",
    "Ѱ",
    "Ѿ",
    "Ц",
]

let maxCharCount = 100;
let fallingCharArr = [];
let fontSize = 10;
let maxColumns = cw/fontSize + 50;
canvas.width = cw;
canvas.height = ch;

let frames = 0;

class FallingChar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
        this.speed = Math.random() * 3/4 + fontSize * 3/4;

        ctx.font = fontSize + "px sans-serif";

        ctx.fillStyle = "rgba(0, 255, 0)";
        ctx.fillText(this.value, this.x, this.y);

        this.y += this.speed;

        if(this.y > ch) {
            this.y = Math.random() * ch/2 - 50;
            this.x = Math.floor(Math.random() * maxColumns) * fontSize * 3/4;
        }
    }
}

let update = () => {
    if(fallingCharArr.length < maxCharCount) {
        let fallingChar = new FallingChar(Math.floor(Math.random * maxColumns) * fontSize, Math.random() * ch/2 - 50);
        fallingCharArr.push(fallingChar);
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, cw, ch);

    for(let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
        fallingCharArr[i].draw(ctx);
    }

    requestAnimationFrame(update);
    frames++;
}

update();
