import Spinner from '@components/Spinner';
import { CloseIcon } from '@public/assets/svg';

import { memo, PropsWithChildren } from 'react';
import ReactModal from 'react-modal';

const customStyles: any = {
    content: {
        position: 'static',
        width: '600px',
        opacity: 1,
        padding: '0 !important',
        margin: '10% auto',
    },
    overlay: {
        zIndex: 999999,
        backgroundColor: 'rgb(75 75 75 / 75%)',
        overflow: 'auto',
    },
};

interface IProps extends PropsWithChildren {
    openModal: boolean;
    setOpenModal: () => void;
    title: string;
    isLoading?: boolean;
}
const Modal = ({
    openModal,
    setOpenModal,
    title,
    isLoading,
    children,
}: IProps) => {
    return (
        <ReactModal
            isOpen={openModal}
            style={customStyles}
            closeTimeoutMS={500}
            ariaHideApp={false}
            className="relative bg-white"
            onRequestClose={setOpenModal}
        >
            <div className="border-b border-gray-300">
                <div className="flex justify-between p-5">
                    <h4 className="text-xl font-semibold text-gray-700">
                        {title}
                    </h4>
                    <button
                        className="w-fit"
                        title="Close"
                        onClick={setOpenModal}
                    >
                        <CloseIcon />
                    </button>
                </div>
            </div>
            {isLoading && (
                <div className="absolute flex justify-center left-1/2 -ml-3">
                    <Spinner className="w-6 h-6 mt-[143px] text-blue-700 z-[9999]" />
                </div>
            )}
            <div className="p-5 border-b border-gray-300">{children}</div>
        </ReactModal>
    );
};

export default memo<IProps>(Modal);
