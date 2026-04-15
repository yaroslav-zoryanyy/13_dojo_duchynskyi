import * as Joi from "joi";

const UserValidator = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z0-9а-яА-ЯіїєґІЇЄҐąćęłńóśźżĄĆĘŁŃÓŚŹŻ_-]+$/).min(3).max(10).required().messages({
        "string.pattern.base": "Ім'я має бути Українською або Польською мовами",
        "string.min": "Ім'я має мати більше 3 символів",
        "string.max": "Ім'я має мати не більше 10 символів",
    }),
    phone: Joi.string().pattern(/^(?:\+?(380|48)[\s-]?)?\(?\d{2,3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/).max(13).required().messages({
        "string.pattern.base": "Номер телефону має бути від Польського або Українського оператора",
        "string.max": "Номер телефону має мати не більше 13 символів",
    }),
})
export default UserValidator