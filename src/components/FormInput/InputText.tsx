import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
    label: string;
    error?: string;
    className?: string;
    isRequired?: boolean;
} & React.HTMLProps<HTMLInputElement>;

const InputText = React.forwardRef<HTMLInputElement, Props>(
    ({ label, error, className, isRequired, ...rest }, ref) => {
        const [type, setType] = useState<React.HTMLInputTypeAttribute>(
            rest.type || 'text',
        );
        const onChange = () => {
            setType((prev) => (prev === 'password' ? 'text' : 'password'));
        };

        return (
            <div className={`flex w-full flex-col space-y-[6px] ${className}`}>
                <label
                    className="text-xs md:text-sm font-medium text-dim-gray"
                    htmlFor={label.replace(' ', '')}
                >
                    {label}
                </label>
                <div className="relative">
                    <input
                        {...rest}
                        type={type}
                        ref={ref}
                        id={label.replace(' ', '')}
                        className={`bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 read-only:cursor-not-allowed ${
                            rest.disabled
                                ? 'hover:cursor-not-allowed text-dim-gray opacity-50'
                                : 'text-gray-900 '
                        }`}
                    />
                    {isRequired && !rest.disabled ? (
                        <span className="absolute top-1/2 -translate-y-1/2 text-red-800 right-3">
                            *
                        </span>
                    ) : null}

                    {rest.type && rest.type === 'password' ? (
                        <span className="cursor-pointer absolute right-3 top-[60%] -translate-y-1/2">
                            <Image
                                src="/icons/show-password.svg"
                                alt=""
                                height={16}
                                width={16}
                                onClick={onChange}
                            />
                        </span>
                    ) : (
                        <></>
                    )}
                </div>
                {error && (
                    <span className="text-xs italic text-red-700">{error}</span>
                )}
            </div>
        );
    },
);

InputText.displayName = 'InputText';

export default InputText;
