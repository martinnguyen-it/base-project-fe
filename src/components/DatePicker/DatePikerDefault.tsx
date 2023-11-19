import { isValid, parse } from 'date-fns';
import { FC, FocusEvent, SyntheticEvent, memo, useCallback } from 'react';
import ReactDatePicker from 'react-datepicker';
import MaskedInput from 'react-text-mask';
interface IProps {
    label?: string;
    required?: boolean;
    value: Date | null;
    onChange: (
        date: Date | null,
        event?: SyntheticEvent<any, Event> | undefined,
    ) => void;
    disabled?: boolean;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
}

const DatePickerDefault: FC<IProps> = ({
    label,
    required,
    onChange,
    value,
    disabled,
    placeholder,
    minDate,
    maxDate,
}) => {
    const onChangeRaw = useCallback(
        (date: FocusEvent<HTMLInputElement, Element>) => {
            if (date?.currentTarget) {
                const inputText = date.currentTarget.value;
                const parsedDate = parse(inputText, 'dd/MM/yyyy', new Date());
                if (isValid(parsedDate)) {
                    onChange(parsedDate);
                }
            }
        },
        [onChange],
    );

    console.log({ value });

    return (
        <div className="flex flex-col">
            {label ? (
                <span className="text-xs mb-[6px] md:text-sm font-medium text-dim-gray">
                    {label}
                </span>
            ) : null}
            <ReactDatePicker
                dateFormat="dd/MM/yyyy"
                selected={value}
                onChange={onChange}
                customInput={
                    <div>
                        <MaskedInput
                            className="!bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 input-calendar"
                            mask={[
                                /\d/,
                                /\d/,
                                '/',
                                /\d/,
                                /\d/,
                                '/',
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/,
                            ]}
                            value={String(
                                value?.toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                }),
                            )}
                            style={{
                                background: `url('/assets/images/${
                                    disabled ? 'calendar-disable' : 'calendar'
                                }.svg') no-repeat right -12px top 10px`,
                            }}
                        />
                    </div>
                }
                required={required}
                disabled={disabled}
                placeholderText={placeholder || 'dd/MM/yyyy'}
                onChangeRaw={onChangeRaw}
                showYearDropdown
                showMonthDropdown
                useShortMonthInDropdown
                minDate={minDate}
                maxDate={maxDate}
            />
        </div>
    );
};

export default memo<IProps>(DatePickerDefault);
