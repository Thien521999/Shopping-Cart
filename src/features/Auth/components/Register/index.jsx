import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register({ closeDialog }) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        // console.log("Form submit:", values);

        try {
            //auto set username = email
            values.username = values.email;

            const action = register(values);//values : là những giá trị trên form 
            const resultAction = await dispatch(action); //resultAction:là action object
            const user = unwrapResult(resultAction); //unwrapResult : tra ve kết quả payload nếu success là fullfiled ,throw error nếu rejected
            console.log('New user:', user);


            //sau khi dang ky xong có the lam tiep cac buoc nhu :dong cửa sổ ,hiển thị message success... có thể làm tiếp dưới này

            //close dialog khi dang ky thanh cong
            if (closeDialog) closeDialog();

            //show thong báo khi dang ky thanh cong
            enqueueSnackbar('Success register', { variant: 'success' });

        } catch (error) {
            // console.log('Failed to register:', error);

            //show thong báo khi dang ky thất bại
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;