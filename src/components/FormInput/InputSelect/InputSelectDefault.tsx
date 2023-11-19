import React, { CSSProperties } from 'react';
import Select, {
    type OptionTypeBase,
    type OptionsType,
    type StylesConfig,
} from 'react-select';
import DropdownIndicator from './DropdownIndicator';
import { IOption } from '@types';

interface ISelectBoxProps {
    headerSelectStyles?: Record<string, any>;
    options: OptionsType<OptionTypeBase>;
    placeholder?: string;
    customSelectStyles?: any;
    rules?: any;
    onChange?: any;
    isSearchable?: boolean;
    value?: IOption;
    id?: string;
    formatCreateLabel?: any;
    createOptionPosition?: 'first' | 'last' | undefined;
    name: string;
    disabled?: boolean;
}

interface Props extends ISelectBoxProps {
    error?: string;
    className?: string;
    label?: string;
}

const SelectStyles: StylesConfig<any, boolean> = {
    control: (base: CSSProperties, { isFocused, isDisabled }: any) => ({
        ...base,
        minHeight: '42px',
        backgroundColor: '#F9FAFB',
        boxShadow: 'none',
        padding: '0 8px 0 8px',
        borderRadius: '.5rem',
        minWidth: '69px',
        ':hover': {
            cursor: 'text',
        },
        border: isFocused ? '#1C64F2 1px solid' : '#D1D5DB 1px solid',
        fontSize: '14px',
        color: '#0F172A',
        ...(isDisabled && {
            pointerEvents: 'none',
            cursor: 'not-allowed',
        }),
    }),
    option: (styles) => {
        return {
            ...styles,
            paddingLeft: '15px',
            fontSize: '14px',
            zIndex: 999999,
        };
    },
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles) => ({
        ...styles,
        margin: 0,
        fontSize: '14px',
        fontWeight: 'normal',
    }),
    indicatorSeparator: (base: CSSProperties) => ({
        ...base,
        backgroundColor: 'white',
        width: '0',
        zIndex: 999999,
    }),
    valueContainer: (base: CSSProperties): CSSProperties => ({
        ...base,
        padding: 0,
    }),
    dropdownIndicator: (base: CSSProperties) => ({
        ...base,
        paddingRight: '0',
    }),
    menuList: (base: CSSProperties): CSSProperties => ({
        ...base,
        zIndex: 999999,
    }),
    menu: (base: CSSProperties): CSSProperties => ({
        ...base,
        zIndex: 999999,
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};
const InputSelectDefault = React.forwardRef<HTMLInputElement, Props>(
    (
        {
            error,
            className,
            label,
            onChange,
            name,
            options,
            value,
            disabled,
            ...rest
        },
        ref,
    ) => {
        return (
            <div className={`flex w-full flex-col space-y-1 ${className}`}>
                <label className="mb-[2px] text-xs md:text-sm font-medium text-dim-gray">
                    {label}
                </label>
                <Select
                    inputRef={ref}
                    onChange={onChange}
                    value={value}
                    components={{ DropdownIndicator }}
                    styles={SelectStyles}
                    options={options}
                    instanceId={name}
                    id={name}
                    name={name}
                    menuPosition={'fixed'}
                    isDisabled={disabled}
                    {...rest}
                />
                {error && (
                    <span className="text-xs italic text-red-700">{error}</span>
                )}
            </div>
        );
    },
);

InputSelectDefault.displayName = 'InputSelectDefault';

export default InputSelectDefault;
