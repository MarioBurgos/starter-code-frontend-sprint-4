// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
    const result = array.map(item => item.director);
    // console.LOG("EXERCICE 1 ->", result);
    return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
    let result = array.filter(item => { return item.director == director });
    return result;
}

// Exercise 3: Calculate the average (score) of the films of a given director.
function moviesAverageOfDirector(array, director) {
    const movies = array.filter(item => { return item.director == director });
    return moviesAverage(movies);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
    let result = [];
    let movies = [...array]; // cloning array
    movies = movies.sort((a, b) => { // sorting alphabetically
        return a.title > b.title ? 1 : -1;
    });
    movies.forEach(m => {
        result.push(m.title); // keeping the title
    });
    return result.length > 20 ? result = result.slice(0, 20) : result; // return top 20;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
    let result = [...array]; //cloning array
    result = result.sort((a, b) => { // sort by year asc
        return a.year > b.year ? 1 : -1;
    });
    return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
    // filter by genre
    let movies = array.filter(item => { return item.genre.includes(genre) });
    movies.forEach(m => {
        //controlling whether the movie has score or not
        if (!m.score || m.score.length == 0) {
            Object.defineProperty(m, 'score', {});
            m.score = 0.0;
        } else {
            parseFloat(m.score);
        }
    })
    return moviesAverage(movies);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
    let result = array.slice();
    let minutes = result.map(item => {
        item.duration = transformToMinutes(item.duration);
        console.log(item.score + ' [type]: ' + typeof item.duration)
        return item;
    });
    console.log(array);
    console.log(minutes);
    minutes.sort((a, b) => { // sort by year asc
        return a.year > b.year ? 1 : -1;
    });
    return minutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
    let result = array.filter(item => { return item.year == year });
    let best = result.sort((a, b) => a.score > b.score ? -1 : 1).splice(0, 1);
    return best;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear,
    };
}

// My functions
/** Gets an array of numeric values and does the average. */
function moviesAverage(array) {
    let avg = 0;
    let count = 0;
    array.forEach(m => {
        if (m.score != 0) {
            avg += parseFloat(m.score);
            count++;
        }
    });
    avg /= count;
    return avg;
}
/** The function gets a string like: "0h 34min", "24h 60min" or "2h".  If get any different value ('1day 2h 42min', for example), it will crash. 
 * Transforms the string to minutes and then return the numeric value
 */
function transformToMinutes(value) {
    let valueAsArray = Array.from(value);
    let minutes = 0;

    if (valueAsArray.includes(' ')) {
        split = value.split(' ');
        hh = split[0];
        mm = split[1];
    } else {
        hh = String(value);
        mm = '0min';
    }
    // console.log(hh + ':' + mm);
    hh = hh.split('h');
    hh = hh[0];
    mm = mm.split('min');
    mm = mm[0];
    // console.log(hh + ':' + mm);
    minutes = (parseInt(hh) * 60) + parseInt(mm);
    // console.log(minutes);
    return minutes;
}