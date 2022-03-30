import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RecentProject, ReduxState } from '../../interface';
import './projectDetail.style.scss';
import { Link, useParams } from 'react-router-dom';
import ImageOne from '../../assets/images/1.jpg';
import { Bars } from 'react-loader-spinner';
import { get, responseValidator } from '../../scripts/api';
import { API } from '../../data';
import { toast } from 'react-toastify';
const ProjectDetail: React.FC<ConnectedProps<typeof connector>> = function (props: ConnectedProps<typeof connector>) {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<RecentProject>();
    const [loading, setLoading] = useState<boolean>(true);
    const [items, setItems] = useState<{ image: string; text: string }[]>([]);
    function checkNull(text1: string, text2: string) {
        if (text1 && text1 !== '' && text2 && text2 !== '') return true;
        else return false;
    }
    useEffect(() => {
        get<RecentProject>(API.projectDetail, { id }).then((res) => {
            if (responseValidator(res.status) && res.data) {
                const localData = res.data;
                setData(localData);
                setLoading(false);
                const temp: { image: string; text: string }[] = [];
                if (checkNull(localData?.secondtxt, localData?.secondimg))
                    temp.push({ image: localData?.secondimg, text: localData?.secondtxt });
                if (checkNull(localData?.thirdtxt, localData?.thirdimg))
                    temp.push({ image: localData?.thirdimg, text: localData?.thirdtxt });
                if (checkNull(localData?.fourthtxt, localData?.fourthimg))
                    temp.push({ image: localData?.fourthimg, text: localData?.fourthtxt });
                if (checkNull(localData?.fifthtxt, localData?.fifthimg))
                    temp.push({ image: localData?.fifthimg, text: localData?.fifthtxt });
                if (checkNull(localData?.sixthtxt, localData?.sixthimg))
                    temp.push({ image: localData?.sixthimg, text: localData?.sixthtxt });
                if (checkNull(localData?.seventhtxt, localData?.seventhimg))
                    temp.push({ image: localData?.seventhimg, text: localData?.seventhtxt });
                if (checkNull(localData?.eighthtxt, localData?.eighthimg))
                    temp.push({ image: localData?.eighthimg, text: localData?.eighthtxt });
                if (checkNull(localData?.ninthtxt, localData?.ninthimg))
                    temp.push({ image: localData?.ninthimg, text: localData?.ninthtxt });
                if (checkNull(localData?.tenthtxt, localData?.tenthimg))
                    temp.push({ image: localData?.tenthimg, text: localData?.tenthtxt });
                setItems(temp);
            } else toast.error('خطایی رخ داده است.');
        });
    });
    return loading ? (
        <div className="rge-landing-loading">
            <Bars color="gold" height={100} width={100} />
        </div>
    ) : (
        <div className="rge-project-detail-page">
            <div className="my-header">
                <img src={data?.firstimg} alt="projectDetail" />
                <div className="text">
                    <h3>{data?.title}</h3>
                    <p>{data?.firsttxt}</p>
                </div>
            </div>
            <div className="my-content">
                {items.map((item, index) => (
                    <div key={index} className="item">
                        <p>{item.text}</p>
                        <img src={item.image} alt="projectDetail" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state: ReduxState) => ({
    isAuth: state.authStatus,
    userData: state.userData,
});

const connector = connect(mapStateToProps);
export default connector(ProjectDetail);
