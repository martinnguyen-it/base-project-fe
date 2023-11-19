import { CSSProperties, FC, memo } from 'react';
import { Control, Controller } from 'react-hook-form';
import Select, {
    type OptionTypeBase,
    type OptionsType,
    type StylesConfig,
} from 'react-select';
import DropdownIndicator from './DropdownIndicator';

interface ISelectBoxProps {
    headerSelectStyles?: Record<string, any>;
    options: OptionsType<OptionTypeBase>;
    placeholder?: string;
    customSelectStyles?: any;
    rules?: any;
    onChange?: any;
    isSearchable?: boolean;
    value?: string | null;
    id?: string;
    formatCreateLabel?: any;
    createOptionPosition?: 'first' | 'last' | undefined;
    name: string;
    control: Control<any>;
}

interface Props extends ISelectBoxProps {
    label: string;
    error?: string;
    className?: string;
    disabled?: boolean;
}

const SelectStyles: StylesConfig<any, boolean> = {
    control: (base: CSSProperties, { isFocused }: any) => ({
        ...base,
        minHeight: '42px',
        backgroundColor: '#F9FAFB',
        boxShadow: 'none',
        padding: '0 8px 0 8px',
        borderRadius: '.5rem',
        minWidth: '69px',
        ':hover': !isFocused && {
            border: '#D1D5DB 1px solid',
        },
        border: isFocused ? '#1C64F2 1px solid' : '#D1D5DB 1px solid',

        fontSize: '14px',
        color: '#0F172A',
    }),
    option: (styles) => {
        return { ...styles, paddingLeft: '15px', fontSize: '14px' };
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
};

const InputSelectDefault: FC<Props> = ({
    label,
    error,
    className,
    options,
    name,
    isSearchable,
    placeholder,
    control,
    disabled,
    ...props
}) => {
    const rest = { isSearchable, placeholder };

    return (
        <div className={`flex w-full flex-col space-y-1 ${className}`}>
            <label className="mb-[2px] text-xs md:text-sm font-medium text-dim-gray">
                {label}
            </label>
            <div className="relative">
                <Controller
                    name={name}
                    render={({ field: { value, onChange, ref } }) => {
                        return (
                            <Select
                                inputRef={ref}
                                onChange={onChange}
                                value={value}
                                components={{ DropdownIndicator }}
                                styles={SelectStyles}
                                options={options}
                                instanceId={name}
                                id={name}
                                isDisabled={disabled}
                                {...rest}
                                placeholder={placeholder}
                            />
                        );
                    }}
                    {...props}
                    control={control}
                />
            </div>
            {error && (
                <span className="text-xs italic text-red-700">{error}</span>
            )}
        </div>
    );
};

export default memo(InputSelectDefault);
