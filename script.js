// variables that will be changing
let xp = 0;
let health = 100;
let money = 50;
let currentWeaponIndex = 0;
let fighting;
let masterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const masterStats = document.querySelector("#masterStats");
const masterName = document.querySelector("#masterName");
const masterHealthText = document.querySelector("#masterHealth");
const locations = [
  {
    name: "training camp square",
    "button text": ["Go to store", "Go to train", "Fight master"],
    "button functions": [goStore, goRing, fightMaster],
    text: "You are in training camp square. You see a sign that says \"Training camp\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTrain],
    text: "You have entered the store."
  },
  {
    name: "fight master",
    "button text": ["Fight slim", "Fight beast", "Go to town square"],
    "button functions": [fightSlim, fightBeast, goTrain],
    text: "You have now entered the ring. who do you want to fight?"
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goRing;
button3.onclick = fightMaster;

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goTrain() {
  update(locations[0]);
  console.log("Welcome to training camp.")
}

function goStore() {
  update(locations[1]);
  console.log("Browsing through the store")
}

function goRing() {
  update(locations[2]);
  console.log("Pick your opponent.")
}

function fightMaster() {
  console.log("Fighting master.");
}

// function to check if character has enough gold to buy health.
function buyHealth() {
    if (gold >= 10) {
      gold -= 10;
      health += 10;
      goldText.innerText = gold;
      healthText.innerText = health;
    } else {
      text.innerText = "You do not have enough gold to buy health.";
      }
  }

// function to check if character has enough gold to buy weapon.
function buyWeapon() {
  // once player has best weapon they can not buy another one.
  if (currentWeaponIndex < 3) {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  }
}


function fightSlim() {

}

function fightBeast() {

}