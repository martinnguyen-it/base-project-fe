import { useCallback, useEffect } from 'react';

export interface IProps {
    element: HTMLDivElement | null;
    action: (val: boolean) => void;
}
export const useClickOutSide = ({ element, action }: IProps) => {
    const handleClickOutSide = useCallback(() => {
        document.addEventListener(
            'click',
            (evt) => {
                if (element && !element?.contains(evt.target as Node)) {
                    action(false);
                }
            },
            true,
        );
    }, [action, element]);

    useEffect(() => {
        handleClickOutSide();
    }, [handleClickOutSide]);
};
