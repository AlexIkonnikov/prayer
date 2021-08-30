import * as column from './column';
import * as user from './user';
import * as prayer from './prayer';
import * as comment from './comment';

export const actions = {
  column: column.actions,
  user: user.actions,
  prayer: prayer.actions,
  comment: comment.actions,
};

export const selectors = {
  column: column.selectors,
  user: user.selectors,
  prayer: prayer.selectors,
  comment: comment.selectors,
};
