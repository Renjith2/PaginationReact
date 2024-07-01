

import React from 'react';

function Pagination({ total, page, setPage, product }) {
  const totalNumber = Math.ceil(total / 10);

 

  return (
    <>
    {product.length ? (
    <div>
      <div>
        <span
          onClick={() => page > 1 && setPage(page - 1)}
          style={{ color: page > 1 ? 'blueviolet' : 'gray', cursor: page > 1 ? 'pointer' : 'default', margin: '10px' }}
        >
          &#9664;
        </span>
        <span>
          {[...Array(totalNumber)].map((_, i) => (
            <span
              key={i}
              style={{
                margin: '4px',
                cursor: 'pointer',
                fontWeight: page === i + 1 ? 'bold' : 'normal',
              }}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </span>
          ))}
        </span>
        <span
          onClick={() => page < totalNumber && setPage(page + 1)}
          style={{ color: page < totalNumber ? 'blueviolet' : 'gray', cursor: page < totalNumber ? 'pointer' : 'default', margin: '10px' }}
        >
          &#9654;
        </span>
      </div>
    </div>
    ):("Loading....")}
    </>
  );
}

export default Pagination;
