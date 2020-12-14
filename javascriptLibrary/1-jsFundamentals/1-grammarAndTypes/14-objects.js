let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'}
            ]
        }
    },
    season2: {},
    season3: {},
}

console.log(netflix);
console.log(netflix.season1);
console.log(netflix.season1.seasonInfo);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);
console.log(netflix.season1.seasonInfo.episodeInfo[10].episode, netflix.season1.seasonInfo.episodeInfo[10].episodeName);

//JSON -> JavaScript Object Notation
let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkKnicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    },
}

console.log(Object.keys(spaceJam));  //Object.keys returns an array consisting of the keys in our object
console.log(Object.keys(spaceJam.toonSquad)); 
console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam));
console.log(Object.values(spaceJam.toonSquad));

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
}

console.log(garden.vegetable);

let inc;
console.log(garden.inc); //doesn't work because inc is not defined in garden

let inc = 'vegetable';
console.log(garden[inc]);



let baking = {};
baking['zucchini'] = 'better make some bread!';
baking.bestKeyEver = 'zucchini';

console.log(baking.zucchini);
console.log(baking.bestKeyEver);
console.log(baking[baking.bestKeyEver]);

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
}

let g = 'water';

Object.keys(garden).forEach(key => {
    if (key == g) {
        console.log(garden[key]);
    }
})