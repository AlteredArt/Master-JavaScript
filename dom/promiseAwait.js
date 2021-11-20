//Promises ES8
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
}).catch('oops');

// Async Await
const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users await', users)
        console.log('posts await', posts)
        console.log('albums await', albums)
    } catch (err) {
        console.log('try catch error', err)
    }
}

getData()


// Async
const urls = [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/3/',
    'https://swapi.dev/api/people/4/'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
})).then(array => {
    // throw Error;
    console.log('async', array[0])
    console.log('async', array[1])
    console.log('async', array[2])
    console.log('async', array[3])
})
    .catch(err => console.log('bad error', err))

    //new in es9
    .finally(() => console.log('extra data'))


//For Await of
const urlstype = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urlstype.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users await', users)
        console.log('posts await', posts)
        console.log('albums await', albums)
    } catch (err) {
        console.log('try catch error', err)
    }
}
getData()

const getDataForOf = url => {
    for (url of urlstype) {
        console.log('loop urls', url)
    }
}
getDataForOf()

const getData2 = async function () {
    const arrayOfPromises = urlstype.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log('get data 2', data)
    }
}
getData2()



//try / catch
try {
    '4' + bob
} catch {
    console.log("you messed up")
}

// set timeout arrow function
setTimeout(() => {
    console.log("This comes first")
}, 1000);