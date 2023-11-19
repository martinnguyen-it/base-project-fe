import classNames from 'classnames';
import { useRouter } from 'next/router';
import { ButtonHTMLAttributes, FC, MouseEvent, ReactNode, memo } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: string;
    path: string;
    icon?: ReactNode;
    isBack?: boolean;
}

const ButtonRedirect: FC<Props> = ({
    label,
    path,
    className,
    icon,
    isBack,
    ...rest
}) => {
    const { push, back } = useRouter();
    const onRedirect = (evt: MouseEvent<HTMLButtonElement>) => {
        if (path || back) {
            evt.stopPropagation();
            if (isBack) back();
            else push(path);
        }
    };
    return (
        <button
            type="button"
            className={classNames(
                'px-3 py-[6px] rounded-md text-sm font-medium flex gap-1 items-center',
                className,
            )}
            onClick={onRedirect}
            {...rest}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
};

export default memo<Props>(ButtonRedirect);
