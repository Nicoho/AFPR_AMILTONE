
import React from 'react';
import Modal from "react-modal"
import "./modal.style.scss"
import BodyModal from './body.modal';
import HeaderModal from './header.modal';
import FooterModal from './footer.modal';

const myModal = ({ CLOSE_MODAL, state }) => {
    return (
        <Modal
            className="inModal"
            isOpen={state.modalVisibel}
            onRequestClose={CLOSE_MODAL}>
            <div className="inModal">
                <HeaderModal test={state.detailInModal.test} user={state.detailInModal.user} />
                <BodyModal />
                <FooterModal close={() => CLOSE_MODAL()} />
            </div>
        </Modal>
    )
}

export default myModal;



