import {
  createSlice,
} from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './api';
import moment from 'moment';

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    // actions => action handlers
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
    bugAssignedToUser: (bugs, action) => {
      console.log(action.payload);
      const { id: bugId, userId } = action.payload;
      const index = bugs.list.findIndex(bug => bug.id === bugId);
      bugs.list[index].userId = userId;
    },
    // comment - event
    // addBug - bugAdded
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },
    // resolveBug (action) - bugResolved (event)
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    }
  }
});

export const {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;

export default slice.reducer;

// Selector

// Action Creators
const url ='/bugs';
// () => fn(dispatch, getState)

export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

  if (diffInMinutes < 10) return;

  return dispatch(apiCallBegan({
    url,
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type,
    onError: bugsRequestFailed.type,
  }));
}


export const addBug = bug =>
  apiCallBegan({
    url,
    method: 'post',
    data: bug,
    onSuccess: bugAdded.type,
  });

export const assignBugToUser = (bugId, userId) => apiCallBegan({
  url: `${url}/${bugId}`,
  method: 'patch',
  data: {
    userId,
  },
  onSuccess: bugAssignedToUser.type,
}) 

export const resolveBug = id => apiCallBegan({
  // /bugs
  // PATCH /bugs/1
  url: `${url}/${id}`,
  method: 'patch',
  data: { 
    resolved: true,
  },
  onSuccess: bugResolved.type,
});

// Memoization
// f(x) => y  { input: 1, output: 2 }
// bugs => get unresolved bugs from the cache
export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  state => state.entities.projects,
  (bugs, projects) => bugs.list.filter(bug => !bug.resolved),
)

export const getBugsByUser = userId =>
  createSelector(
    state => state.entities.bugs,
    bugs => bugs.list.filter(bug => bug.userId === userId),
  );