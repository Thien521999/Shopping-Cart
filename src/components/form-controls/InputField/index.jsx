import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

InputField.propTypes = {
    form: PropTypes.object.isRequired, //bat buoc phai co
    name: PropTypes.string.isRequired, //bat buoc phai co

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField({ form, name, label, disabled }) {
    //Lấy thông tin error
    //Khi ma field da touch(co nghia la focus,chinh sua rui)rui thì nó tinh la touch
    const { errors } = form.formState;
    const hasError = errors[name];

    // const {errors, formState} = form;
    // const hasError = formState.touched[name] && errors[name];
    //console.log(errors[name], formState.touched[name]);

    return (
        //de de dang lam viec voi cac thu vien ben ngoai va tu dong binding cac ham nhu onchange, onblur,value ....
        //thi su dung controller cua React-hook-form.

        //dùng Controller nó sẽ tự động bind vào TextField này những sự kiện như onChange, onBlur, value,...Controller sẽ tự làm giúp mình
        <Controller
            name={name} //bat buoc phai co
            control={form.control} //bat buoc phai co(lay tu form.control)
            //as={TextField} //ban muon su dung UI Libery nào.bat buoc phai co
            //dung as thi ko can phai bind onChange, onblur, value,
            //con render thi phai truyen vao
            render={({ field }) => (
                <TextField //ban muon su dung UI Libery nào.bat buoc phai co
                    {...field}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    label={label}
                    disabled={disabled}
                    //de show error
                    error={!!hasError} //!phu dinh tra ve true false
                    helperText={errors[name]?.message} //?. de kiem tra th có hay ko(optional)
                />
            )}
        />
    );
}

export default InputField;
