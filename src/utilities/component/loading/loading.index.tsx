import React from 'react';
import './loading.style.scss';
import { Bars } from 'react-loader-spinner';

const Loading: React.FC = function () {
    return (
        <div className="rge-loading">
            <Bars color="gold" height={100} width={100} />
        </div>
    );
};

export default Loading;
