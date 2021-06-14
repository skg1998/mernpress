import React from "react";

import { TextField, Button, Card, CardContent } from "@material-ui/core";

const CouponApplyForm = (props) => {
    const { handleSubmit, submitting, onSubmit, submitFailed } = props;
    return (
        <Card>
            <CardContent>
                <h3>Have Coupons ?</h3>
                <form
                    className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
                    noValidate
                >
                    <TextField
                        name="coupon"
                        type="text"
                        placeholder="Coupon code"
                        id="outlined-basic" variant="outlined"
                        style={{ marginBottom: '5px' }}
                    />
                    <Button
                        type="submit"
                        disabled={submitting}
                        variant="contained" color="primary"
                    >
                        Apply
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default CouponApplyForm;