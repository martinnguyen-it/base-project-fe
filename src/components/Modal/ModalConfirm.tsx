import { ButtonAction, Modal } from '@components';
import { FC, ReactNode, memo, useCallback } from 'react';

interface IProps {
    isOpenModal: boolean;
    setIsOpenModal: () => void;
    onSubmit: any;
    title: string;
    label: string | ReactNode;
    isLoading?: boolean;
}

const ModalConfirm: FC<IProps> = ({
    isOpenModal,
    setIsOpenModal,
    onSubmit,
    title,
    label,
    isLoading,
}) => {
    const handleSubmit = useCallback(async () => {
        await onSubmit();
        setIsOpenModal();
    }, [onSubmit, setIsOpenModal]);

    return (
        <>
            <Modal
                openModal={isOpenModal}
                setOpenModal={setIsOpenModal}
                title={title}
            >
                <form className="flex flex-col gap-5">
                    <div> {label}</div>
                    <div className="flex justify-end">
                        <div className="flex space-x-3">
                            <ButtonAction
                                label="Yes"
                                className="bg-blue-600 text-white"
                                onClick={handleSubmit}
                                type="button"
                                isLoading={isLoading}
                            />
                            <ButtonAction
                                label="No"
                                type="button"
                                className="bg-gray-200 text-gray-800"
                                onClick={setIsOpenModal}
                            />
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default memo(ModalConfirm);
