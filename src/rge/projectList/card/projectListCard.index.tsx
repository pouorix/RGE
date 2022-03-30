import React from 'react';
import { RecentProject, ReduxState } from '../../../interface';
import './projectListCard.style.scss';
import { Link, useParams } from 'react-router-dom';
import { RoutePath } from '../../../data';

const ProjectListCard: React.FC<{ data: RecentProject }> = function (props: { data: RecentProject }) {
    return (
        <div className="rge-project-list-card">
            <img src={props.data.thumbnailimg} alt="projects" />
            <div className="info">
                <h4>{props.data.title}</h4>
                <p>{props.data.firsttxt}</p>
                <Link to={RoutePath.projectDetail(props.data.id)} className="more">
                    توضیحات بیشتر
                </Link>
            </div>
        </div>
    );
};

export default ProjectListCard;
