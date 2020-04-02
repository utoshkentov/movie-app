import MovieCreateForm from "./MovieCreateForm";

const Modal = (props) => {

    let closeButton = null;

    const submitModal = () => {
        alert('Submitting Modal');
        closeButton.click()
    };

    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                Create Movie
            </button>

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog"
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Create Movie</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button ref={element => closeButton = element} type="button" className="btn btn-secondary"
                                    data-dismiss="modal">Close
                            </button>
                            { props.hasSubmit &&
                                <button
                                    onClick={submitModal}
                                    type="button"
                                    className="btn btn-primary">
                                    Save Changes
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;