import { Spinner } from '@components';
import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    isSubmitting?: boolean;
    label: string | ReactNode;
    isLoading?: boolean;
    icon?: ReactNode;
}

const ButtonAction: FC<Props> = ({
    label,
    className,
    isLoading,
    icon,
    ...rest
}) => {
    return (
        <button
            type="submit"
            className={classNames(
                className,
                'px-3 py-[6px] rounded-md text-sm flex gap-1 items-center font-medium disabled:cursor-not-allowed',
            )}
            disabled={isLoading}
            {...rest}
        >
            {isLoading ? <Spinner /> : icon}
            <span>{label}</span>
        </button>
    );
};

export default memo(ButtonAction);
