
// Movies
const movies = [
    {
      title: 'cool',
      year: 2018,
      rating: 4.3
    },
    {
      title: 'best',
      year: 2018,
      rating: 5
    },
    {
      title: 'amazing',
      year: 2018,
      rating: 4.7
    },
    {
      title: 'dabest',
      year: 2017,
      rating: 4.5
    },
  ]

  console.log('movies:', movies)
  // all movies in 2018 with rating > 4
  // sort them by their rating
  // descending order
  // pick their title
  const titles = movies
    .filter(m=> m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
  
    console.log(titles)

// string properties
const movie = {
    title: 'also me',
    releaseDate: 2016,
    rating: 4.5,
    director: 'best director'
  }
  
   function showProperties(obj) {
     for (let key in obj)
    //  if ( typeof obj[key] === 'string')
     console.log("key:", key, "value:", obj[key])
   }
  showProperties(movie);