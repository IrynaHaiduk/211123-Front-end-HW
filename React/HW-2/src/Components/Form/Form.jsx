import React from 'react'
import { useForm } from 'react-hook-form';
import "./Form.scss";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
    } = useForm();


    const onSubmit = (formData) => {
        console.log(formData);
        reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__block" >
                <label 
                className="form__label" 
                htmlFor="user_name"
                >
                    UserName:
                </label>
                <input
                    {...register("user_name",
                        {
                            required: "This field is required!",
                            maxLength: { value: 10, message: "Maximum length shound be 10 characters!" },
                            minLength: { value: 3, message: "Minimum length shound be 3 characters!" }
                        })}
                    id="user_name"
                    className="form__input"
                    type="text"
                />
            </div>
            {errors?.user_name && <p className='error'>{errors.user_name.message}</p>}

            <div className="form__block" >
                <label 
                className="form__label" 
                htmlFor="user_email"
                >
                    Email:
                </label>
                <input
                    {...register("user_email",
                        {
                            required: "This field is required!",
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: "Please, write correct email!"
                            }
                        })}
                    id="user_email"
                    className="form__input"
                    type="email"
                />
            </div>
            {errors?.user_email && <p className='error'>{errors.user_email.message}</p>}

            <div className="form__block" >
                <label 
                className="form__label" 
                htmlFor="user_password"
                >
                    Password:
                </label>
                <input
                    {...register("user_password",
                        {
                            required: "This field is required!",
                            pattern: {
                                value: /[0-9a-zA-Z]{6,}/,
                                message: "Password should have minimum 6 symbols!"
                            }
                        })}
                    id="user_password"
                    className="form__input"
                    type="password"
                />
            </div>
            {errors?.user_password && <p className='error'>{errors.user_password.message}</p>}

            <div className="form__block" >
                <label className="form__label"
                    htmlFor="repeat_password">
                    Repeat password:
                </label>
                <input
                    {...register("repeat_password",
                        {
                            required: "This field is required!",
                            validate: (value) => {
                                return getValues("user_password") === value || "Password must be the same" 
                            }

                        })}
                    id="repeat_password"
                    className="form__input"
                    type="password"
                />
            </div>
            {errors?.repeat_password && <p className='error'>{errors.repeat_password.message}</p>}
            
            <button className="form__btn btn" type="submit">Submit</button>

        </form>
    )
}

export default Form
