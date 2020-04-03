import {useState} from "react";
import Modal from "./Modal";
import MovieCreateForm from "./MovieCreateForm";
import {createMovie} from "../actions";
import {useRouter} from "next/router";

//Containment
const SideMenu = (props) => {
    const {appName, categories} = props;
    const router = useRouter();
    let modal = null;

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal();
            router.push('/')
        })
    };


    return (
        <div>
            <Modal ref={element => modal = element} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
            </Modal>
            <h1 className="my-4">{appName}</h1>
            <div className="list-group">
                {
                    categories.map((category) => (
                        <a
                            onClick={() => props.changeCategory(category.name)}
                            key={category.id}
                            href="#"
                            className={`list-group-item ${props.activeCategory === category.name ? 'active' : ''}`}>
                            {category.name}
                        </a>
                    ))
                }
            </div>
        </div>
    )
};

export default SideMenu