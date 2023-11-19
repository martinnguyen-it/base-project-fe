import * as yup from 'yup';

export const SignInSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .required('Email is required')
            .email('Invalid email'),
        password: yup
            .string()
            .required('Password is required')
            .min(8, 'Password has at least 8 characters'),
    })
    .required();

export type SignInSchemaType = yup.InferType<typeof SignInSchema>;

export const SignUpSchema = yup
    .object()
    .shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        email: yup
            .string()
            .required('Email is required')
            .email('Invalid email'),
        password: yup
            .string()
            .required('Password is required')
            .min(8, 'Password has at least 8 characters'),
        passwordConfirm: yup
            .string()
            .required('Password confirm is required')
            .min(8, 'Password has at least 8 characters')
            .oneOf([yup.ref('password')], 'Passwords do not match'),
    })
    .required();

export type SignUpSchemaType = yup.InferType<typeof SignUpSchema>;
