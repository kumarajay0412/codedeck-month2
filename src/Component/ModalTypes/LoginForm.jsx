import React, { useContext, useState } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FormInputComponent from '../FormInputComponent';
import { auth } from '../../firebaseConfig';
import { ModalContext } from '../../Context/ModalContext'

function LoginForm() {
    const { closeModal } = useContext(ModalContext);

    const validationSchema = yup.object().shape({
        email: yup.string().email("Invalid Email").required("Email is required "),
        password: yup.string().required("Password is mandatory "),
    });

    const {
        register,
        trigger,
        control,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
        watch,
        reset,
        setValue: setValuesFieldForm,
        getValues,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {

        auth.signInWithEmailAndPassword(data.email, data.password).then((response) => {
            console.log("loged in", response);
            closeModal();
        }).catch((err) => {
            console.log("error", err);
        });
    }
    return (
        <div className='flex flex-col w-full p-4'>
            <form id="hook-form-contact" onSubmit={handleSubmit(onSubmit)}>
                <FormInputComponent
                    label="Email"
                    name="email"
                    placeholder="Please enter your email here"
                    control={control}
                    error={errors.email?.message}
                    type="email"
                    required
                />
                <FormInputComponent
                    label="Password"
                    name="password"
                    placeholder="Enter a secure password "
                    control={control}
                    error={errors.password?.message}
                    type="password"
                    required
                />
                <button type="submit" form="hook-form-contact"
                    className="p-3 w-full mt-8 text-black bg-white rounded-lg font-semibold  bg-darkBlue border-[1px] border-darkBlue shadow-lg"
                >
                    Login
                </button>
            </form>

        </div>
    )
}

export default LoginForm