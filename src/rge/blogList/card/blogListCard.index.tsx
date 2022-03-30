import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../../interface';
import './blogListCard.style.scss';
import { Link, useParams } from 'react-router-dom';
import imageOne from '../../../assets/images/1.jpg';
import { RoutePath } from '../../../data';

const BlogListCard: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    return (
        <div className="rge-blog-list-card">
            <img src={imageOne} alt="projects" />
            <div className="info">
                <h4>لورم ایمپسوم</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                <Link to={RoutePath.blogDetail(1)} className="more">
                    توضیحات بیشتر
                </Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
});

const connector = connect(mapStateToProps);
export default connector(BlogListCard);