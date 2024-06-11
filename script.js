// variables
let xp = 0;
let health = 100;
let money = 250;
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
const moneyText = document.querySelector("#moneyText");
const masterStats = document.querySelector("#masterStats");
const masterName = document.querySelector("#masterName");
const masterHealthText = document.querySelector("#masterHealth");
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const locations = [
  {
    name: "training camp square",
    "button text": ["Go to store", "Go to train", "Fight master"],
    "button functions": [goStore, goRing, fightMaster],
    text: "You are in training camp. You see a sign the sign says \"Training camp\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 money)", "Buy weapon (30 money)", "Go to training camp"],
    "button functions": [buyHealth, buyWeapon, goTrain],
    text: "You have entered the store."
  },
  {
    name: "fight master",
    "button text": ["Fight slim", "Fight beast", "Go to training camp"],
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

// function to check if character has enough money to buy health.
function buyHealth() {
    if (money >= 10) {
      money -= 10;
      health += 10;
      moneyText.innerText = money;
      healthText.innerText = health;
    } else {
      text.innerText = "You do not have enough money to buy health.";
      }
  }

// function to check if character has enough money to buy weapon.
function buyWeapon() {
  // once player has best weapon they can not buy another one.
  if (currentWeaponIndex < weapons.length - 1) {
    if (money >= 30) {
      money -= 30;
      currentWeaponIndex++;
      moneyText.innerText = money;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough money to buy a weapon.";
    }
  }
}


function fightSlim() {


}

function fightBeast() {

}