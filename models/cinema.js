const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function(){
  return this.films.map(film => film.title)
}

Cinema.prototype.findByTitle= function(title){
  return this.films.find(film => film.title === title);
}

Cinema.prototype.findFilmsByGenre = function(genre){
  return this.films.filter(film => film.genre === genre);
};

Cinema.prototype.areThereFilmsForYear = function(year){
  return this.films.some(film => film.year === year);
}

Cinema.prototype.areThereNotFilmsForYear = function(year){
  return this.films.some(film => film.year !== year);
}

Cinema.prototype.checkLengthOver = function(runningTime){
  return this.films.filter(film => film.length > runningTime);
}

Cinema.prototype.calculateRunningTime = function(){
  var initialValue = 0;
  return this.films.reduce((accumulator, film) => accumulator += film.length, initialValue);

}

// Cinema.prototype.calculateRunningTime = function(){
//   return this.films.reduce(film => accumulator + film.length);
// }

module.exports = Cinema;
