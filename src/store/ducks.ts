import * as column from './ducks/column';
import * as user from './ducks/user';
import * as prayer from './ducks/prayer';

export const actions = {
    column: column.actions,
    user: user.actions,
    prayer: prayer.actions
};

export const selectors = {
    column: column.selectors,
    user: user.selectors,
    prayer: prayer.selectors
}