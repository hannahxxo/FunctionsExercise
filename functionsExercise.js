// FUNCTIONS EXERCISE

// 1
function fozziBear() {
    console.log("Wocka Wocka!");
   
};
fozziBear();

// 2
function beaker(speak) {
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`)
}
beaker("Meep");

// 3
function werewolf(a, b) {
    if (a === "Muppet" && b === "Show"){
        return "It's time to play the music. It's time to light the lights.";
    }
    
}
const song = werewolf("Muppet", "Show");
console.log(song);

// 4
function kermit() {
    return "Kermit The Frog"
}
const daFrog = kermit()
console.log(daFrog);

// 5
function muppetShowSeasons(seasons) {
    if(seasons === "5"){
        return `true`;
    }
    return `false`
}

const five = muppetShowSeasons("5");
console.log(five);

// 6a
const muppets = [
    "Kermit The Frog",
    "Miss Piggy",
    "Fozzie Bear",
    "The Great Gonzo"
];

// 6b
names = (n) => {
    console.log(n);
}   
muppets.forEach(names);

// 7
const manOrMuppet = function(){
    console.log("Am I a man or am I a Muppet?");
}
manOrMuppet();

// 8
rainbowConnection = () => (
    "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me"
)
const lyrics = rainbowConnection();
console.log(lyrics);

// 9
// no

// 10
// yes

// 11a
const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
];

// 11b (needs work)
// showMovies = movie => movie.movieName;
// const upperMovies = newMuppetMovies.toUpperCase.map(showMovies);
// console.log(upperMovies);

// 12a
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];

// 12b (needs work)
// const watch = function (title) {
//     return title.length === 12;
// }
// const twoMovies = oldMuppetMovies.filter(watch);
// console.log(twoMovies);