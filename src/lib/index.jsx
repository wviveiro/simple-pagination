import React from 'react';

/**
 *  Simple Pagination
 * @props page - current page number
 * @props total - number of rows in total
 * @props limit - limit of rows per page
 * @props changePage - trigger the page that has to be called
 *
 * @author Wellington Viveiro <wviveiro@gmail.com>
 **/

const Pagination = (props) => {
    let {page, total, limit, disabled, changePage} = props;

    let total_pages = Math.ceil(total / limit);

    
    return (
        <div className={`simple-pagination${props.className ? ` ${props.className}` : ''}`} >
            <button 
                disabled={disabled || page === 1}
                className="btn-edge"
                onClick={() => changePage(page - 1)}
            >
                Previous
            </button>
            {Array(total_pages).fill().map((_, i) => {
                let num = i+1;
                return (
                    <button
                        key={num}
                        className={`btn-number${num === page ? ' active' : ''}`}
                        disabled={disabled}
                        onClick={() => changePage(num)}
                    >
                        {num}
                    </button>
                );
            })}
            <button 
                disabled={disabled || page === total_pages}
                className="btn-edge"
                onClick={() => changePage(page + 1)}
            >
                    Next
            </button>
        </div>
    );
}

export default Pagination;