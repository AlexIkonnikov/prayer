
export const composeValidators = (...validators: Array<(value: string) => undefined | any>) => (value: string) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export const require = (value: string) => value ? undefined : `Field is require`;

export const mailValidator = (value: string) => { return value.includes(`@`) ? undefined : 'Email must contain @' };

export const confirm = (value: string, allValues: Record<string, any>) => {
    if (allValues.password !== allValues.confirmPassword) {
        return 'Password mismatch';
    }
    return undefined;
}