// My functions
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
} //

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
    let movies = Array.from(array); // cloning array
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
    let result = Array.from(array); //cloning array
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
    let split;
    let hh = 0;
    let mm = 0;

    let result = Array.from(array); //cloning the original array

    result = result.map(item => {
        time = item.duration;
        console.log(time);
        split = time.split(' ');
        hh = split[0];
        hh = hh.split('h');
        hh = hh[0];
        mm = split[1];
        mm = mm.split('min');
        mm = mm[0];
        item.duration = (parseInt(hh) * 60) + parseInt(mm);
        // console.log(item.duration)
    });

    return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
    let result = array.filter(item => { return item.year == year });
    result = result.sort((a, b) => a.score > b.score ? -1 : 1);

    return result;
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