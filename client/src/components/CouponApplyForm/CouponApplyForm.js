import React from "react";

const CouponApplyForm = (props) => {
    const { handleSubmit, submitting, onSubmit, submitFailed } = props;
    return (
        <form
            className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
            noValidate
        >
            <input
                name="coupon"
                type="text"
                label="Have coupon?"
                placeholder="Coupon code"
            />
            <button
                type="submit"
                className="btn btn-sm btn-primary mt-3 float-right"
                disabled={submitting}
            >
                Apply
            </button>
        </form>
    );
};

export default CouponApplyForm;