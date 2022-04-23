interface PaginationProps {
    currentPage: number;
    pageCount: number;
    isShowArrow: boolean;
    onChange?(e: any): void;
}

export default PaginationProps;
