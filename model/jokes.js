/**
 * Created by Cookie on 06-03-2016.
 */

var jokes = [
    "Joke 1",
    "Joke 2",
    "Joke 3"
];

function _getRandomJoke(){
    return jokes[Math.floor(Math.random()*jokes.length)];
}
function _addJoke(joke){
    jokes.push(joke);
}
//'Facade' object:
module.exports = {
    allJokes : jokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
}
