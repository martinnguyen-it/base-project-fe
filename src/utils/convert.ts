import moment from 'moment';

export const convertDate = ({
    date,
    type = 'YYYY-MM-DD',
}: {
    date: Date;
    type?: string;
}) => {
    return moment(
        date,
        'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (Indochina Time)',
    ).format(type);
};

export const formatPrice = (number: number): string => {
    if (number)
        return `$${number.toLocaleString('en', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        })}`;

    return `$${number.toFixed(2)}`;
};

export const convertUTCTimeQuery = function (
    timeUTC: Date,
    format = 'YYYY-MM-DD',
) {
    if (timeUTC) {
        const timeZoneBrowser =
            Intl.DateTimeFormat().resolvedOptions().timeZone;
        const convertTime = timeUTC.toLocaleString('en-US', {
            timeZone: timeZoneBrowser,
        });

        return moment(new Date(convertTime)).format(format);
    }
    return '';
};

export const innerDateToText = (date: Date) => {
    const inputDate = new Date(date);
    return moment(inputDate).format('D MMM YYYY');
};
