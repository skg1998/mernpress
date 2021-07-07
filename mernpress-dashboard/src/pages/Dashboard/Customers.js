import React from "react";
import DataTables from '../../components/DataTables/Tables';
import globalStyles from "../../styles/styles";

const CustomerPage = () => {
    const columns = ["Name", "Company", "City", "State"];

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <>
            <div>
                <h3 style={globalStyles.navigation}>Application / Customer</h3>
            </div>
            <DataTables
                title={"Customers"}
                data={data}
                columns={columns}
                options={options}

            />
        </>
    );
};

export default CustomerPage;