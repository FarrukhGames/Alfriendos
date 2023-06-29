import modal from "./modal.css";
import {createPortal} from "react-dom";

const ModalContent = (props) => {
    return (
        <>
            <section className="modal">
                <button className="modal__button" onClick={props.hideModalFunction}>❌</button>
                {props.children}
            </section>
            <div className="overlay"></div>
        </>
    )
}

const Modal = (props) => {
    return createPortal(<ModalContent children={props.children}/>, document.getElementById("modal-root"));
}

export default Modal;