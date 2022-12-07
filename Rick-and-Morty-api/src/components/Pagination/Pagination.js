import React from "react";
import ReactPaginate from "react-paginate";

import { ContainerPag } from './pageStyle';

const Pagination = ({infoPage, page, setPage}) => {
    

    return (
    <ContainerPag>
    
    <ReactPaginate
    pageLinkClassName="page-link"
    pageClassName="page-item"
    previousClassName="btn btn-primary"
    nextClassName="btn btn-primary"
    previousLabel="Prev"
    nextLabel="Next"
    activeClassName="active"
    onPageChange={(data) => {
        setPage(data.selected + 1)
    }}
    pageCount={infoPage?.pages}/>
    </ContainerPag>
    );
}

export default Pagination;