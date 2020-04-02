const MOVIE_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        description: 'It is criminal movie',
        longDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        rating: 4.8,
        genre: 'drama',
        image: 'https://images.unsplash.com/photo-1547269098-bff6017b750c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        cover: 'https://i.ytimg.com/vi/XrdbD7fF8m8/maxresdefault.jpg'
    },
    {
        id: '2',
        name: 'The Dark Night',
        releaseYear: 2008,
        description: 'It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie It is fantastic hero movie',
        longDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        rating: 4.7,
        genre: 'action, crime, drama',
        image: 'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        cover: 'https://i.ytimg.com/vi/2cqAd0ZJjKk/maxresdefault.jpg'
    },
    {
        id: '3',
        name: 'Lord of the Rings',
        releaseYear: 2004,
        description: 'It is fantastic movie about mainly magic',
        longDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        rating: 4.9,
        genre: 'adventure, drama, fantasy',
        image: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=888&q=80',
        cover: 'https://i.ytimg.com/vi/pU5rE9J-yKM/maxresdefault.jpg'
    },
];

export const getMovies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOVIE_DATA)
            // reject('Cannot fetch data!')
        }, 1000);
    });
};

export const getMovieById = (id) => {

    return new Promise((resolve, reject) => {
        const movieIndex = MOVIE_DATA.findIndex(movie => movie.id === id);
        const movie = MOVIE_DATA[movieIndex];

        setTimeout(() => resolve(movie), 100)
    })
};
