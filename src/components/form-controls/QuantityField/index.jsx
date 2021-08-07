import { Box, IconButton, makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
    root: {},
    box: {
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
        maxWidth: "200px",
    },
}));

function QuantityField(props) {
    const classes = useStyles();
    const { form, name, disabled, onChange } = props;
    //Khi ma field da touch(co nghia la focus,chinh sua rui)rui thì nó tinh la touch
    const { errors } = form.formState;
    const hasError = !!errors[name];

    const handleChange = (value) => {
        console.log(value);
        if (value >= 0) {
            form.setValue(name, value);
            if (onChange) onChange(value);
        }
    }

    return (
        <FormControl error={hasError} fullWidth margin="normal" variant="outlined" size="small">
            <Controller
                name={name} //bat buoc phai co
                control={form.control} //bat buoc phai co(lay tu form.control)

                render={({ field }) => (
                    <Box className={classes.box}>
                        {" "}
                        {/**  name la ten cua control ,  setValue cua thang form o tren */}
                        <IconButton
                            // onClick={
                            //     () => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)
                            // }
                            onClick={
                                () => {
                                    handleChange(field.value - 1)
                                }
                            }
                        >
                            <RemoveCircleOutline />
                        </IconButton>
                        <OutlinedInput //ban muon su dung UI Libery nào
                            id={name}
                            type="number"
                            disabled={disabled}
                            value={field.value}
                            onBlur={field.onBlur}
                            onChange={(e) => {
                                handleChange(
                                    Number.parseInt(e.target.value)
                                );
                            }}
                        />
                        <IconButton
                            // onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}
                            onClick={() => {
                                handleChange(field.value + 1);
                            }}
                        >
                            <AddCircleOutline />
                        </IconButton>
                    </Box>
                )}
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText> {/* ?. de kiem tra TH co hay ko(ko chac có hay ko) */}
        </FormControl>
    );
}

export default QuantityField;
