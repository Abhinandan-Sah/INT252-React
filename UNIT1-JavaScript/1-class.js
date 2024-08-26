// class Movie {
//   constructor(name, actor) {
//     const Name = name;
//     const Actor = actor;

//     this.favorite = function () {
//       console.log(`My favourite movie is ${name} and actor is ${Actor}`);
//     };
//   }
// }

// const p1 = new Movie("Maze Runner", "Thomas",);
// p1.favorite();

// const movie = (movieName, actorName, years) => {
//   return {
//     name: movieName,
//     actor: actorName,
//     release: years,
//     entertainment: function () {
//       console.log(
//         `My favourite movie is ${movieName} and actor is ${actorName} release in ${this.release}`
//       );
//     },
//   };
// };

// let money = movie("Avengers", "Tony Stark", "2024");
// money.entertainment();
// let money1 = movie("Avengers", "Tony Stark", "2011");
// money1.entertainment();

// *******Array*********
const sports = ["swimming", "Shooting", "jawline"];

// for(const sport of sports){
//   console.log(sport);
// }

console.log(sports.map(sport=>'game: '+sport));

for(const sport of sports){
  console.log(sport);
}


