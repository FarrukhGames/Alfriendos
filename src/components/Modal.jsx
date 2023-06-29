import modal from "./modal.css";

const Modal = (props) => {
    return (
        <>
            <section className="modal">
                <button className="modal__button" onClick={props.hideModalFunction}>❌</button>
            </section>
            <div className="overlay"></div>
        </>
    )
}

export default Modal;