import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../interface';
import './projectList.style.scss';
import { Link, useParams } from 'react-router-dom';
import { RoutePath } from '../../data';
import ProjectListCard from './card/projectListCard.index';

const ProjectList: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    const { id } = useParams<{ id: string }>();
    return (
        <div className="rge-project-list-page">
            <div className="local-header">
                <div className="my-content">
                    <Link to={RoutePath.projectList(1)} className={`item ${id == '1' ? 'active' : ''}`}>
                        <h4>پروژه نورپرازی نما</h4>
                    </Link>
                    <Link to={RoutePath.projectList(2)} className={`item ${id == '2' ? 'active' : ''}`}>
                        <h4>پروژه نورپرازی نما</h4>
                    </Link>
                    <Link to={RoutePath.projectList(3)} className={`item ${id == '3' ? 'active' : ''}`}>
                        <h4>پروژه نورپرازی نما</h4>
                    </Link>
                    <Link to={RoutePath.projectList(4)} className={`item ${id == '4' ? 'active' : ''}`}>
                        <h4>پروژه نورپرازی نما</h4>
                    </Link>
                </div>
            </div>
            <div className="my-container">
                <div className="container-container">
                    <ProjectListCard />
                    <ProjectListCard />
                    <ProjectListCard />
                    <ProjectListCard />
                    <ProjectListCard />
                    <ProjectListCard />
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
export default connector(ProjectList);
