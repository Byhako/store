import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the createAccount state domain
 */

const selectCreateAccountDomain = state => state.createAccount || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateAccount
 */

const makeSelectCreateAccount = () =>
  createSelector(
    selectCreateAccountDomain,
    substate => substate,
  );

export default makeSelectCreateAccount;
export { selectCreateAccountDomain };
