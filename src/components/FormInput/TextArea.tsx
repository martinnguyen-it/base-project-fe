import React, { TextareaHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
    className?: string;
    isRequired?: boolean;
    control: Control<any>;
    name: string;
    placeholder?: string;
}

const TextArea: React.FC<Props> = ({
    label,
    error,
    className,
    isRequired,
    name,
    control,
    placeholder,
    ...rest
}) => {
    return (
        <div className={`flex w-full flex-col space-y-[6px] ${className}`}>
            <label
                className="text-xs md:text-sm font-medium text-dim-gray"
                htmlFor={label.replace(' ', '')}
            >
                {label}
            </label>
            <div className="relative">
                <div className="relative">
                    <Controller
                        name={name}
                        render={({ field: { value, onChange, ref } }) => {
                            return (
                                <textarea
                                    ref={ref}
                                    value={value}
                                    onChange={onChange}
                                    id={label.replace(' ', '')}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder={placeholder}
                                    {...rest}
                                />
                            );
                        }}
                        control={control}
                    />

                    {isRequired ? (
                        <span className="absolute top-1/2 -translate-y-1/2 text-red-800 right-3">
                            *
                        </span>
                    ) : null}
                </div>
            </div>
            {error && (
                <span className="text-xs italic text-red-700">{error}</span>
            )}
        </div>
    );
};

TextArea.displayName = 'TextArea';

export default TextArea;
