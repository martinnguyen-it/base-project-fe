import { ChevronIcon } from '@public/assets/svg';
import { components } from 'react-select';

const DropdownIndicator = (props: any) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <ChevronIcon />
            </components.DropdownIndicator>
        )
    );
};

export default DropdownIndicator;
