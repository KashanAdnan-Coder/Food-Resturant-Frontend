'use client'
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { store } from "@/redux/store"
import Header from "@/components/header/index";
import { ToastContainer } from "react-toastify";

export function StoreProviders({ children }) {
    return (
        <Provider store={store}>
            <Header />
            {children}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
            />
        </Provider>
    )
}