import {useForm} from "react-hook-form";
import UserValidator from "../../validators/user.validator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import type {IFormValid} from "../../model/FormModel.ts";



const HomeForm = () => {

    const {handleSubmit, register, formState: {errors,isValid}} = useForm<IFormValid>({mode: 'all', resolver: joiResolver(UserValidator)});

    const customHandler = (formDataProps: IFormValid) => {
        console.log(formDataProps)
    }

    return (
        <section className={'form'}>
            <div className="container">
                <div className="form__wrapper">
                    <h3 className={'form__title'}>Запишись на тренування вже зараз!</h3>
                    <form onSubmit={handleSubmit(customHandler)}>
                        <input placeholder={"Ім\'я"} type="text" {...register('username')} />
                        <input placeholder={'Телефон'} type="tel" {...register('phone')}/>
                        <button disabled={!isValid}>Вислати заявку</button>
                    </form>
                    <div className={'form__error'}>
                        {errors.username && <div>{errors.username.message}</div>}
                        {errors.phone && <div>{errors.phone.message}</div>}
                    </div>
                </div>
                <hr className="accent__line"/>
            </div>
        </section>
    );
};

export default HomeForm;