import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import Rge from './rge/rge.index';
import './utilities/styles/index.scss';
function App() {
    return (
        <Provider store={store}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                style={{ zIndex: 1000000000000 }}
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Rge />
        </Provider>
    );
}

export default App;
