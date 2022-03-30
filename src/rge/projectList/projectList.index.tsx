import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { CategoryList, Pagination, RecentProject, ReduxState } from '../../interface';
import './projectList.style.scss';
import { Link, useParams } from 'react-router-dom';
import { API, RoutePath } from '../../data';
import ProjectListCard from './card/projectListCard.index';
import { Bars } from 'react-loader-spinner';
import { get, responseValidator } from '../../scripts/api';
import { toast } from 'react-toastify';
import Loading from '../../utilities/component/loading/loading.index';

const ProjectList: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<RecentProject[]>();
    const [category, setCategory] = useState<CategoryList[]>();

    useEffect(() => {
        setLoading(true);
        const temp = [get<any>(API.landing.categoryList), get<any>(API.categoryProjects, { id })];
        Promise.all(temp).then((res) => {
            if (responseValidator(res[0].status) && responseValidator(res[1].status)) {
                if (res[0].data) setCategory(res[0].data);
                if (res[1].data) setData(res[1].data);
                console.log(res);
                setLoading(false);
            } else toast.error('خطایی رخ داده است.');
        });
    }, [window.location.href]);

    return loading ? (
        <Loading />
    ) : (
        <div className="rge-project-list-page">
            <div className="local-header">
                <div className="my-content">
                    {category?.map((item, index) => (
                        <Link
                            key={index}
                            to={RoutePath.projectList(item.id.toString())}
                            className={`item ${id == item.id.toString() ? 'active' : ''}`}
                        >
                            <h4>{item.title}</h4>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="my-container">
                <div className="container-container">
                    {data?.map((item, index) => (
                        <ProjectListCard data={item} key={index} />
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
export default connector(ProjectList);
