import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import QuantityField from "components/form-controls/QuantityField";
import { LanguageContext } from "context/LanguageContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
    const { defaultLanguage } = useContext(LanguageContext);
    const schema = yup.object().shape({
        quantity: yup.number().required('Please enter quantity')
            .min(1, 'Minimum value is 1')
            .typeError('Please enter a number'),
    });

    const form = useForm({
        defaultValues: {
            quantity: 1, //cần liệt kê tất cả các field ở đây nếu không nó sẽ xãy ra TH không hiểu or  UnControl
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        //console.log('TODO FORM: ', values);
        if (onSubmit) {
            await onSubmit(values);
        }
        //form.reset();
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className="add__cart">
            <QuantityField name="quantity" label="Quantity" form={form} />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                style={{ width: '200px' }}
            >
                {defaultLanguage.Add_to_card}
            </Button>
        </form>
    );
}

export default AddToCartForm;