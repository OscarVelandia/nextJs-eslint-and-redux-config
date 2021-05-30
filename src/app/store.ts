import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  // Add here your reducers
  reducer: {},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
