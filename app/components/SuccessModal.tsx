import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type SuccessModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
    setTimeout(() => {
        onClose();
    }, 5000);
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0  bg-black bg-opacity-50 backdrop-blur-md z-50">
            {/* Lottie Animation */}
            <DotLottieReact
                src="https://lottie.host/cd032fc9-8fac-4efe-95a4-a2ab15d0613b/H4et1iLpdw.lottie"
                loop
                autoplay
            />
        </div>
    );
};

export default SuccessModal;
