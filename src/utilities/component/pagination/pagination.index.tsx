import React from 'react';
import './pagination.style.scss';
import PaginationProps from './pagination.interface';

const PaginationComponent: React.FC<PaginationProps> = (props: PaginationProps) => {
    const currentPage = props.currentPage;
    const pageCount = props.pageCount;
    let pages: (number | string)[] = [];

    if (pageCount === 1) {
        return null;
    }

    if (pageCount > 6) {
        if (currentPage < 4) {
            pages = [1, 2, 3, '...', pageCount - 1, pageCount];
        } else if (currentPage > pageCount - 3) {
            pages = [1, 2, '...', pageCount - 2, pageCount - 1, pageCount];
        } else {
            if (pageCount - currentPage !== 3) {
                pages = [1, '...', currentPage, currentPage + 1, '...', pageCount];
            } else {
                pages = [1, '...', currentPage, currentPage + 1, currentPage + 2, pageCount];
            }
        }
    } else {
        for (let i = 1; i < pageCount + 1; i++) {
            pages[i] = i;
        }
    }

    return (
        <div className="vekalapp-pagination">
            {props.isShowArrow && (
                <i
                    onClick={() => {
                        if (currentPage !== pageCount && props.onChange) props.onChange(currentPage + 1);
                    }}
                    className={currentPage === pageCount ? 'material-icons disabled' : 'material-icons'}
                >
                    arrow_forward
                </i>
            )}
            <div className="page-numbers">
                {pages.reverse().map((item, index) => (
                    <span
                        key={index}
                        className={`${item === props.currentPage ? 'active nums' : 'nums'}`}
                        onClick={() => {
                            if (item === '...') {
                                return null;
                            }
                            if (typeof item === 'number') {
                                props.onChange!(item);
                            }
                        }}
                    >
                        {item}
                    </span>
                ))}
            </div>
            {props.isShowArrow && (
                <i
                    onClick={() => {
                        if (1 !== currentPage && props.onChange) props.onChange(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'material-icons disabled' : 'material-icons'}
                >
                    arrow_back
                </i>
            )}
        </div>
    );
};

export default PaginationComponent;
