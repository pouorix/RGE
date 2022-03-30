import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../../interface';
import './blogList.style.scss';
import { Link, useParams } from 'react-router-dom';
import { API, RoutePath } from '../../data';
import BlogListCard from './card/blogListCard.index';
import { get, responseValidator } from '../../scripts/api';
import { toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner';
import { BlogListType } from '../../interface';
import Loading from '../../utilities/component/loading/loading.index';
import ProjectListCard from '../projectList/card/projectListCard.index';

const BlogList: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<BlogListType[]>([]);
    useEffect(() => {
        setLoading(true);
        get<any>(API.landing.blog).then((res) => {
            if (responseValidator(res.status)) {
                setLoading(false);
                setData(res.data);
            } else toast.error('خطایی رخ داده است.');
        });
    }, []);
    return loading ? (
        <Loading />
    ) : (
        <div className="rge-project-list-page">
            <div className="my-container">
                <div className="container-container">
                    {data?.map((item, index) => (
                        <BlogListCard data={item} key={index} />
                    ))}
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
