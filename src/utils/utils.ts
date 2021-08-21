import moment from 'moment';

export const timeFromNow= (date: string) => {
    const parseDate = moment(date);
    return parseDate.fromNow();
}