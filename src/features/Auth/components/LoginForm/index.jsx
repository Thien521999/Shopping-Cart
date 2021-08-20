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

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm({ onSubmit }) {
    const classes = useStyles();
    const { defaultLanguage } = useContext(LanguageContext);
    const schema = yup.object().shape({
        identifier: yup.string().required("Please enter your email").email("Please enter a valid email address."),
        password: yup.string().required("Please enter your password"),
    });

    const form = useForm({
        defaultValues: {
            identifier: "", //cần liệt kê tất cả các field ở đây nếu không nó sẽ xãy ra TH không hiểu or  UnControl
            password: "", //cần liệt kê tất cả các field ở đây nếu không nó sẽ xãy ra TH không hiểu or  UnControl
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

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />} {/*dang submitting thi show linearProgress*/}
            <Avatar className={classes.avartar}>
                <LockOutlined />
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                {defaultLanguage.SIGN_IN}
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                    {defaultLanguage.SIGN_IN}
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
