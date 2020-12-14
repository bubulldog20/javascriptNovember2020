fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
    .then(res => res.json())
    .then(json => console.log(json))

function slowResult(){ 
    fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
        .then(res => res.json())
        .then(json => console.log(json))
    console.log('this is a message!')
}

slowResult();


async function slowResult(){ //async says we're going to call this function but it's not going to happen immediately
    await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true') //await can only be used with async, await says await whatever async promise thing needs to happen
        .then(res => res.json())
        .then(json => {json.lolProperty = 'this is a random property'; return json;})
        .then(json => console.log(json))
    console.log('this is a message!')
}

slowResult();

async function swResult() {
    await fetch('https://swapi.dev/api/people/1/')
      .then(res => res.json())
      .then(json => console.log(json));
    console.log('this should print last');
}

swResult();

