import Spinner from '@components/Spinner';
import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    isSubmitting?: boolean;
    label: string | ReactNode;
    isLoading?: boolean;
}

const ButtonSubmit: FC<Props> = ({ label, className, isLoading, ...rest }) => {
    return (
        <button
            type="submit"
            className={classNames(
                className,
                'px-4 py-[6px] bg-blue-pacific text-white rounded-md text-sm flex items-center gap-1 disabled:cursor-not-allowed',
            )}
            disabled={isLoading}
            {...rest}
        >
            {isLoading ? (
                <span className="">
                    <Spinner className="w-4 h-4" />
                </span>
            ) : null}
            <span>{label}</span>
        </button>
    );
};

export default memo(ButtonSubmit);
