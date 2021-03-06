import { createSelector } from 'reselect';

const selectUser = state => state.user; 

export const selectCurrentUser = createSelector (
   [selectUser],
   user => user.currentUser
);

export const selectDeadlines = createSelector (
   [selectUser],
   user => user.deadlines
);

export const selectIsUserFetching = createSelector (
   [selectUser],
   user => user.isUserFetching
)

export const selectError = createSelector (
   [selectUser],
   user => user.error
)