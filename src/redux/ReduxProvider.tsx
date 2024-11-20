'use client'
import { Provider as ReactReduxProvider } from 'react-redux';
import { store } from './store';


export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactReduxProvider store={store}>
            {children}
        </ReactReduxProvider>
    )
} 