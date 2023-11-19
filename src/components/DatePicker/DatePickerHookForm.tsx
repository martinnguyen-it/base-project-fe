import { FC, forwardRef, LegacyRef, memo } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

interface IProps {
    label?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    control: any;
    name: string;
}

const CustomDatePicker = forwardRef(
    (props: any, ref: LegacyRef<HTMLInputElement>) => {
        return (
            <>
                <input
                    {...props}
                    ref={ref}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 input-calendar ${
                        props.disabled
                            ? 'hover:cursor-not-allowed opacity-50'
                            : 'hover:cursor-pointer'
                    }`}
                    style={{
                        background: `url('/assets/images/${
                            props.disabled || !props.require
                                ? 'calendar-disable'
                                : 'calendar'
                        }.svg') no-repeat right -12px top 10px`,
                    }}
                />
            </>
        );
    },
);

CustomDatePicker.displayName = 'CustomDatePicker';

const DatePickerHookForm: FC<IProps> = ({
    label,
    required,
    disabled,
    placeholder,
    minDate,
    maxDate,
    control,
    name,
}) => {
    return (
        <div className="flex w-full flex-col space-y-1">
            {label ? (
                <span className="text-xs mb-[2px] md:text-sm font-medium text-dim-gray">
                    {label}
                </span>
            ) : null}

            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <ReactDatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        customInput={
                            <CustomDatePicker
                                disabled
                                require={required && 'false'}
                            />
                        }
                        required={required}
                        disabled={disabled}
                        placeholderText={placeholder}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                )}
            />
        </div>
    );
};

export default memo<IProps>(DatePickerHookForm);
