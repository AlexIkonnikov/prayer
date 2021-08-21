import moment from 'moment';

export const timeFromNow= (date: string) => {
    return moment(date).fromNow();
}

export const cropText = (text: string, cropMode: boolean) => {
    const stringLimit = cropMode ? 15 : 21;
    if (text.length > stringLimit) {
        return text.split('').slice(0, stringLimit).join('') + '...';
    }
    return text;
};