/* === Question 1 Data Types === 

- I would create properties in an object with booleans as values to represent the light switch being on or off. 
(on and off as keys and true or false as values. 
Example:  
const lightSwitch = {
    lightOn: true,
    lightOff: false,
};

- I would use an object with the key being the username and the value being the email address as a string.
Example: 
const userEmails = {
    username: "email@address.com"
};

- I would use an array with strings.
Example:
const spaceshipParts = ["hull", "laser blasters" , "tractor beam", "warp drive"];

- I would use an array with strings.
Example: 
const class = ["Jenna", "Student B", "Student C"];

- I would use an object with names as the keys and locations as strings for the values.
Example:
const studentLocations = {
    studentNameA: "Seattle",
    studentNameB: "Los Angeles",
    studentNameC: "Oakland",
};

- I would use an object that contains objects for each student. Names would be each object inside the object. 
First property would be location with a string as a value. 
The second property would have the key, "favoriteTvShows," with an array holding strings of each show. 
Example: 
const classInfo = {
    studentName: {
        Location:
        favoriteTvShows: ["favorite tv show", "another one here", "another one here"];
    }
};

*/

/* === Question 2 Take it Easy === */

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const rainbowBlue = rainbowColors[4];

const jenna = {
    favoriteFood: "Shizen's vegan sushi",
    hobby: "cycling",
    location: "Seattle",
    favoriteDatatype: "objects",
};

const jennaHobby = jenna.hobby;

/* === Question 3 Crazy Object! === */

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favoriteHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  };

let hottestSalsa = crazyObject.taco[1].salsa[5];
console.log(hottestSalsa);

let oneLarryQuote = crazyObject.larry.quotes[0];
console.log(oneLarryQuote);

let susanFavoriteHobby = crazyObject.larry.characters[2].favoriteHobby;
console.log(susanFavoriteHobby);

let oneLarryNickname = crazyObject.larry.nicknames[1];
console.log(oneLarryNickname);

let funkhauserObject = crazyObject.larry.characters[1];
console.log(funkhauserObject);
