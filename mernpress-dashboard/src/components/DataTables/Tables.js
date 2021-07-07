import React from 'react';
import MUIDataTable from "mui-datatables";

const Tables = (props) => {
    const { title, data, columns, options } = props;
    return (
        <>
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
                options={options}
            />
        </>
    )
}

export default Tables;
