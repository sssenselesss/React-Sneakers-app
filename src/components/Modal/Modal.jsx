import { useContext, useRef } from "react"
import { ModalContext } from "../../pages/Root"

const Modal = () =>{

    const {modal,toggleModal} = useContext(ModalContext)

    const overlayRef = useRef();

    const close = (e) =>{
        if(e.target === overlayRef.current){
            toggleModal();
        }
    }
    return (   // modal && active
        <section
        onClick={(e) => close(e)}
        ref={overlayRef} className={`overlay ${modal ? "active" : ""}`}>
            <div className="modal">
                <header className="modal-header">
                    <h2>Корзина</h2>
                </header>

                <div className="modal-body">

                </div>

                <div className="modal-footer"></div>
            </div>
        </section>
    )
}

export default Modal