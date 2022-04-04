import { useEffect } from 'react';
import { useLocation } from 'react-router';
import React from 'react';

const ScrollToTopLocal = (props: any) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
};

export default ScrollToTopLocal;
