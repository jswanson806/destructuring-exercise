//Object Destructuring 1
    //console.log(numPlanets) returns 8
    //console.log(yearNeptuneDiscovered) returns 1846

//Object Destructuring 2
    //the code returns {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object Destructuring 3
    //the code returns
        //'Your name is Alejandro and you like purple'
        //'Your name is Melissa and you like green'
        //'Your name is undefined and you like green'

//Array Destructuring 1
    //the code returns
        //'Maya'
        //'Marisa'
        //'Chi'

//Array Destructuring 2
    //the code returns
        //"Raindrops on roses"
        //"whiskers on kittens"
        //["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Array Destructuring 3
    //the code returns
        // [10, 30, 20]

//ES2015 Refactoring

    //ES5 Assigning Variables to Object Properties
        const {numbers: {a,b}} = obj;

    //ES5 Array Swap
        const arr = [1,2];
        [arr[0], arr[1]] = [arr[1], arr[0]];

    //raceResults()
        const raceResults = (arr) => {
            return {
                first,
                second,
                third,
                ...rest
            };
        
        }

