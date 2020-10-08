class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(newlyCheckedOut) {
      this._isCheckedOut = newlyCheckedOut;
    }
    toggleCheckoutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      return ratingsSum / this._ratings.length;
    }
    addRating(newRating) {
      if (newRating < 1 || newRating > 5) {
        console.log('Please enter a rating between 1 and 5!');
      } else {
        return this._ratings.push(newRating);
      }
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages, bookGenre) {
      super(title);
      this._author = author;
      this._pages = pages;
      this._bookGenre = [];
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime, movieCast) {
      super(title)
      this._director = director;
      this._runTime = runTime;
      this._movieCast = [];
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
    get movieCast() {
      return this._movieCast;
    }
  }
  
  class CD extends Media {
    constructor(title, artist, musicGenre, songs) {
      super(title)
      this._artist = artist;
      this._musicGenre = musicGenre;
      this._songs = [];
    }
    get artist() {
      return this._artist;
    }
    get musicGenre() {
      return this._musicGenre;
    }
    get songs() {
      return this._songs
    }
   
     addSong(newSong) {
      return this._songs.push(newSong);
    }
  
    shuffle() {
      return this._songs.sort(() => Math.floor(Math.random() * this._songs.length));
    }
  }
  
  class Catalog  {
  constructor(books, movies, cds) {
  
    this._books = [];
    this._movies = [];
    this._cds = [];
  }
  get books() {
    return this._books;
  }
  get movies() {
    return this._movies;
  }
  get cds() {
    return this._cds;
  }
  set books(newBook) {
    this._books.push({
      'author' : newBook.author,
      'title' : newBook.title,
      'pages' : newBook.pages
    });
      }
    set movies(movie) {
      this._movies.push({
        'title': movie.title,
        'director': movie.director,
        'runtime': movie.runTime
      });
  }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  
  historyOfEverything.toggleCheckoutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4,5,5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  
  speed.toggleCheckoutStatus();
  
  console.log(speed.isCheckedOut);
  
  speed.addRating(10);
  speed.addRating(4);
  speed.addRating(-6);
  speed.addRating(3);
  speed.addRating(2);
  
  
  console.log(speed.getAverageRating());
  
  const blueprint = new CD ('Blueprint', 'Jay-Z', 'Hip-Hop', ['U Dont Know', 'Takeover', 'The Rulers Back']);
  const randomaccess = new CD ('Random Access Memories', 'Daft Punk', 'EDM');
  const Whitney = new CD ('Whitney', 'Whitney Houston', 'Pop');
  
  Whitney.addSong('Whitney');
  
  Whitney.addSong('I Wanna Dance with Somebody (Who Loves Me)');
  
  Whitney.addSong('Just the Lonely Talking Again');
  
  Whitney.addSong('Love Will Save the Day');
  
  Whitney.addSong('Didnt We Almost Have It All');
  
  Whitney.addSong('So Emotional');
  
  console.log(Whitney.songs);
  
  console.log(Whitney.shuffle());
  
  
  
  const location = new Catalog();
  location.movies = new Movie('El Camino', 'Vince Gilligan', 122);
  console.log(location.movies);
  speed.movies = new Movie('Speed', 'Jan de Bont', 116);
  console.log(speed.movies);