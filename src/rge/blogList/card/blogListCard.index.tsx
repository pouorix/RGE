import React from 'react';
import { BlogListType } from '../../../interface';
import './blogListCard.style.scss';
import { Link, useParams } from 'react-router-dom';
import { RoutePath } from '../../../data';

const BlogListCard: React.FC<{ data: BlogListType }> = function (props: { data: BlogListType }) {
    return (
        <Link to={RoutePath.blogDetail(props.data.id)} className="rge-blog-list-card">
            <div className="left-side">
                {/*<img src="https://hs.sbcounty.gov/cn/Photo%20Gallery/Sample%20Picture%20-%20Koala.jpg" alt="blogs" />*/}
                <img src={props.data.thumbnailimg} alt="blogs" />
                <div className="sub-info">
                    <h4>{props.data.title}</h4>
                    <h6>{props.data.firstPreviewText}</h6>
                    <h6>{props.data.secondPreviewText}</h6>
                </div>
            </div>

            <p>{props.data.firsttxt}</p>
        </Link>
    );
};

export default BlogListCard;
