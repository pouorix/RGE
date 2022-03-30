import React from 'react';
import { BlogListType } from '../../../interface';
import './blogListCard.style.scss';
import { Link, useParams } from 'react-router-dom';
import { RoutePath } from '../../../data';

const BlogListCard: React.FC<{ data: BlogListType }> = function (props: { data: BlogListType }) {
    return (
        <div className="rge-project-list-card">
            <img src={props.data.thumbnailimg} alt="projects" />
            <div className="info">
                <h4>{props.data.title}</h4>
                <p>{props.data.firsttxt}</p>
                <Link to={RoutePath.blogDetail(props.data.id)} className="more">
                    توضیحات بیشتر
                </Link>
            </div>
        </div>
    );
};

export default BlogListCard;
