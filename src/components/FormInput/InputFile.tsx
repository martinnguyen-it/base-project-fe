import { PlusIcon, UploadIcon } from '@public/assets/svg';
import React, { ChangeEvent } from 'react';

type Props = {
    label: string;
    className?: string;
    fileName?: string;
    onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
    onClearFile: () => void;
    placeholder: string;
    disabled?: boolean;
};

const InputFile: React.FC<Props> = ({
    label,
    fileName,
    className,
    onChangeFile,
    onClearFile,
    placeholder,
    disabled,
}) => {
    return (
        <div className={`flex w-full flex-col space-y-[6px] ${className}`}>
            <label className="text-xs md:text-sm font-medium text-dim-gray">
                {label}
            </label>
            <div className="relative">
                <input
                    type="file"
                    id={label.replace(' ', '')}
                    className="hidden"
                    onChange={onChangeFile}
                    disabled={disabled}
                />
                <label
                    htmlFor={label.replace(' ', '')}
                    className={`bg-gray-50 truncate border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-7 ${
                        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                    }`}
                >
                    {fileName ? (
                        fileName
                    ) : (
                        <>
                            <span className="text-dim-gray">{placeholder}</span>
                            <div className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-3">
                                <UploadIcon className="text-dim-gray" />
                            </div>
                        </>
                    )}
                </label>
                {fileName ? (
                    <div onClick={onClearFile}>
                        <PlusIcon className="cursor-pointer rotate-45 absolute inset-y-0 my-auto right-3" />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default InputFile;
