export const Helper = (value: string) => {
    let filterValue: string = value.replace(/\D/, '');
    return filterValue
};
