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

/* === Question 4 Object-ception === */

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 };

 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

/* === Questions 5-7 Bond Films === */

const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];

  /* === Question 5 === */

let bondTitles = bondFilms.map(function (element) {
    return element.title;
  });
  
console.log(bondTitles);

 /* === Question 6 === */

  /* === Question 7 === */