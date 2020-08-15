import React from 'react';
import {motion} from 'framer-motion';

const Modal = ({selectedImg, setSelectedImg}) => {
    const handleclick = (e) => {
        if(e.target.classList.contains('backdrop')) setSelectedImg(null);
        else return;
    }
    return(
        <motion.div className="backdrop" onClick={handleclick} initial={{opacity: 0}} animate={{ opacity:1}}>
            {selectedImg && <img src={selectedImg} alt="enlarged pic"></img>}
        </motion.div>
        
    )
}

export default Modal;