const MOVIE_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        description: 'It is criminal movie',
        rating: 4.8,
        genre: 'drama',
        image: 'http://i.ytimg.com/vi/dwTV-8qHFvA/maxresdefault.jpg'
    },
    {
        id: '2',
        name: 'The Dark Night',
        releaseYear: 2008,
        description: 'It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie',
        rating: 4.7,
        genre: 'action, crime, drama',
        image: 'https://tse4.mm.bing.net/th?id=OIP.LTBILYNQT48AooX5B1s9ZQHaD5&pid=Api&P=0&w=293&h=155'
    },
    {
        id: '3',
        name: 'Lord of the Rings',
        releaseYear: 2004,
        description: 'It is fantastic movie about mainly magic',
        rating: 4.9,
        genre: 'adventure, drama, fantasy',
        image: 'https://tse1.mm.bing.net/th?id=OIP.GFLNhBf2AqFK7odBKRlj-wHaEK&pid=Api&P=0&w=290&h=164'
    },
];

export const getMovies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOVIE_DATA);
            reject('Cannot detch data!')
        }, 1000);
    });
};

