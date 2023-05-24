import React from 'react'
import { useForm } from 'react-hook-form';

const InputAuthAndRegistr = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // const onSubmit = (data) => console.log(data);onSubmit={handleSubmit(onSubmit)}
    console.log(errors)
    return (
        <form >
            <input defaultValue="test" {...register("example")} />
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form>
    )
}

export default InputAuthAndRegistr