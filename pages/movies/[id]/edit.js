import React, {Component} from 'react';
import Router from "next/router";
import MovieCreateForm from "../../../components/MovieCreateForm";
import {getMovieById, updateMovie} from "../../../actions";

class Edit extends Component {


    static async getInitialProps({query}) {
        const movie = await getMovieById(query.id);

        return {movie}
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {
            Router.push( '/movies/[id]', `/movies/${movie.id}`)
        })
    };


    render() {
        const {movie} = this.props;
        return (
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm
                    submitButton="Update"
                    initialData={movie}
                    handleFormSubmit={this.handleUpdateMovie}
                />
            </div>
        );
    }
}

export default Edit;


