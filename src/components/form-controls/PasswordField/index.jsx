import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    //Khi ma field da touch(co nghia la focus,chinh sua rui)rui thì nó tinh la touch
    const { errors } = form;
    const hasError = !!errors[name];
    //console.log(errors[name], formState.touched[name]);

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(x => !x) //x la  gia tri trc do, !x:giá tri phu dinh
    };

    return (
        <FormControl error={hasError} fullWidth margin="normal" variant="outlined" >
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name} //bat buoc phai co
                control={form.control} //bat buoc phai co(lay tu form.control)
                as={OutlinedInput} //ban muon su dung UI Libery nào

                id={name}
                type={showPassword ? 'text' : 'password'}
                label={label}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }

                disabled={disabled}
            //error={!!hasError} //!phu dinh tra ve true false
            />
            <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText> {/*?. de kiem tra TH co hay ko(ko chac có hay ko) */}
        </ FormControl>

        // <div>
        //     {/* //de de dang lam viec voi cac thu vien ben ngoai va tu dong binding cac ham nhu onchange, onblur, ....
        //     //thi su dung controller cua React-hook-form. 
        //     <Controller
        //         name={name} //bat buoc phai co
        //         control={form.control} //bat buoc phai co(lay tu form.control)
        //         as={TextField} //ban muon su dung UI Libery nào

        //         margin="normal"
        //         variant = "outlined"
        //         fullWidth //duoc truyen vao trong TextField luon
        //         label={label} //duoc truyen vao trong TextField luon
        //         disabled={disabled} //duoc truyen vao trong TextField luon

        //         error={!hasError} //!phu dinh tra ve true false
        //         helperText={errors[name]?.message} //?. de kiem tra co (loi) hay ko
        //     /> */}

        //     <FormControl fullWidth margin="normal" variant="outlined" >
        //         <InputLabel htmlFor={name}>{label}</InputLabel>
        //         <Controller
        //             name={name} //bat buoc phai co
        //             control={form.control} //bat buoc phai co(lay tu form.control)
        //             as={OutlinedInput} //ban muon su dung UI Libery nào

        //             id={name}
        //             type={showPassword ? 'text' : 'password'}
        //             label={label}
        //             endAdornment={
        //                 <InputAdornment position="end">
        //                     <IconButton
        //                         aria-label="toggle password visibility"
        //                         onClick={toggleShowPassword}

        //                         edge="end"
        //                     >
        //                         {showPassword ? <Visibility /> : <VisibilityOff />}
        //                     </IconButton>
        //                 </InputAdornment>
        //             }

        //             disabled={disabled}
        //             error={!!hasError} //!phu dinh tra ve true false
        //             helperText={errors[name]?.message} //?. de kiem tra co (loi) hay ko
        //         />
        //     </ FormControl>
        // </div>
    );
}

export default PasswordField;