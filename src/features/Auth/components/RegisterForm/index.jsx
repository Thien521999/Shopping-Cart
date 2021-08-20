import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, LinearProgress, makeStyles, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import InputField from "components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import { LanguageContext } from "context/LanguageContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        paddingTop: theme.spacing(4), //1 đơn vị là 8px
    },
    avartar: {
        margin: "0 auto",
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        margin: theme.spacing(2, 0, 4, 0), //tren phai duoi trai
        textAlign: "center",
    },
    submit: {
        margin: theme.spacing(3, 0, 2, 0),
    },
    progress: {
        position: "absolute",
        top: theme.spacing(1),
        left: 0,
        right: 0,
    },
}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm({ onSubmit }) {
    const classes = useStyles();
    const { defaultLanguage } = useContext(LanguageContext);
    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required("Please enter your full name") // nhung dinh nghia(rule) co san
            .test("should has at least two words", "Please enter at least two words", (value) => {
                return value.split(" ").length >= 2;
            }), //nhung custom rule do mình tu DN ra
        email: yup.string().required("Please enter your email").email("Please enter a valid email address."),
        password: yup.string().required("Please enter your password").min(6, "Please enter at least 6 characters"),
        retypePassword: yup
            .string()
            .required("Please enter your retypePassword")
            .oneOf([yup.ref("password")], "Password does not match"),
    });

    const form = useForm({
        defaultValues: {
            fullName: "",       //
            email: "",          //cần liệt kê tất cả các field ở đây nếu không nó sẽ xãy ra TH không hiểu or  UnControl
            password: "",       //
            retypePassword: "", //
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        //console.log('TODO FORM: ', values);
        if (onSubmit) {
            await onSubmit(values);
        }
        // form.reset();
    };

    //isSubmitting trong formState(react-hook-form)
    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {/*đang submitting thi show linearProgress*/}
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avartar}>
                <LockOutlined />
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                {defaultLanguage.SIGN_UP}
            </Typography>

            {/* form.handleSubmit la cua thang form, handleSubmit la cua minh viet */}
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype Password" form={form} />

                {/* Trong luc submit disable cái nút đi. */}
                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                    {defaultLanguage.Create_an_account}
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
