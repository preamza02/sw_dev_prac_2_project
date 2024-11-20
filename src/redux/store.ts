import { configureStore } from '@reduxjs/toolkit';
import facilitiesSlice from './features/facilitiesSlide';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
    reducer: {
        facilitiesSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;