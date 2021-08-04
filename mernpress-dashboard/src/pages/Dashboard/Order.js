import React, { useState } from "react";
import DataTables from '../../components/DataTables/Tables';
import globalStyles from "../../styles/styles";

/**
 * Order data
 * orderId
 * product {productId, quantity, status}
 * customer_name
 * customer_phone
 * delevery_address { street, city, state, zipcode }
 * user
 * payment
 * created
 * updated
 */

const OrderPage = () => {
    const [color, setColor] = useState('#bb33ff');
    const [toggle, setToggle] = useState(true);
    const [Status, setStatus] = React.useState();

    const styles = {
        backgroundColor: color,
        color: 'white',
        padding: '8px',
        borderRadius: '25px',
        margin: 'auto'
    }

    const checkStatus = (status) => {
        if (status === "Not processed") {
            setColor('#bb33ff');
        } else if (status == "Processing") {
            setColor('#00ace6')
        } else if (status == "Shipped") {
            setColor('#ff8000')
        } else if (status === 'Delivered') {
            setColor('#2eb82e');
        } else if (status === "Cancelled") {
            setColor('#e60000')
        }
        return status;
    }

    const columns = ["OrderId", "productId", "Price", "Created_At", "customer_name", "customer_phone", "delevery_address", "payment", {
        name: "status",
        label: "Status",
        options: {
            customBodyRender: (value, tableMeta, updateValue) => (
                <div>
                    {toggle ?
                        <div style={styles} onDoubleClick={() => { setToggle(false) }} >{checkStatus(value)}</div> :
                        <input
                            type="text"
                            value={Status}
                            onChange={(event) => {
                                setStatus(Status)
                            }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === 'Escape') {
                                    setToggle(true)
                                    event.preventDefault()
                                    event.stopPropagation()
                                }
                            }}
                        />
                    }
                </div>
            )
        }
    }];

    const data = [
        ["user1", "product1", "4500", "12-04-2020", "Joe James", "9999999999", "Yonkers", "COD", "Not processed"],
        ["user1", "product1", "4500", "12-04-2020", "Joe James", "9999999999", "Yonkers", "COD", "Processing"],
        ["user1", "product1", "4500", "12-04-2020", "Joe James", "9999999999", "Yonkers", "COD", "Shipped"],
        ["user1", "product1", "4500", "12-04-2020", "Joe James", "9999999999", "Yonkers", "COD", "Delivered"],
        ["user1", "product1", "4500", "12-04-2020", "Joe James", "9999999999", "Yonkers", "COD", "Cancelled"]
    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <>
            <div>
                <h3 style={globalStyles.navigation}>Application / Order</h3>
            </div>
            <DataTables
                title={"Recent Orders"}
                data={data}
                columns={columns}
                options={options}
            />
        </>
    );
};

export default OrderPage;