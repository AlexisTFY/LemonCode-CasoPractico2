import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationShema = {
    field: {
        email: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            }, 
            {
                validator: Validators.email,
                message: 'Por favor introduzca una cuenta de correo válida'
            }
        ],
        message: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            }
        ]
    }
};

export const formValidation = createFormValidation(validationShema);