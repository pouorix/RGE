import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../interface';
import './blogList.style.scss';
import { Link, useParams } from 'react-router-dom';
import { RoutePath } from '../../data';
import BlogListCard from './card/blogListCard.index';

const BlogList: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    const { id } = useParams<{ id: string }>();
    return (
        <div className="rge-project-list-page">
            <div className="my-container">
                <div className="container-container">
                    <BlogListCard />
                    <BlogListCard />
                    <BlogListCard />
                    <BlogListCard />
                    <BlogListCard />
                    <BlogListCard />
                    <div className="grid-guard" />
                    <div className="grid-guard" />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
});

const connector = connect(mapStateToProps);
export default connector(BlogList);
