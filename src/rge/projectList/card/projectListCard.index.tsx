import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../../interface';
import './projectListCard.style.scss';
import { Link, useParams } from 'react-router-dom';
import imageOne from '../../../assets/images/1.jpg';

const ProjectListCard: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    return (
        <div className="rge-project-list-card">
            <img src={imageOne} alt="projects" />
            <div className="info">
                <h4>لورم ایمپسوم</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                <div className="more">توضیحات بیشتر</div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
});

const connector = connect(mapStateToProps);
export default connector(ProjectListCard);
