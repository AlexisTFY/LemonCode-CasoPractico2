import { Validators, createFormValidation } from '@lemoncode/fonk';
import { isUrl } from '@lemoncode/fonk-is-url-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';

const validationShema = {
    field: {
        title: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            }
        ],
        notes: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            }
        ],
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
        phone: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: new RegExp(/[0-9]{1,}/) },
                message: 'Introduzca un valor numérico',   
            }
        ],
        price: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: new RegExp(/[0-9]{1,}/) },
                message: 'Introduzca un valor numérico',   
            }
        ],


        address: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            }
        ],
        city: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            }
        ],
        province: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            }
        ],
        squareMeter: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: new RegExp(/[0-9]{1,}/) },
                message: 'Introduzca un valor numérico',   
            }
        ],
        rooms: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: new RegExp(/[0-9]{1,}/) },
                message: 'Introduzca un valor numérico',   
            }
        ],
        bathrooms: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: new RegExp(/[0-9]{1,}/) },
                message: 'Introduzca un valor numérico',   
            }
        ],
        locationUrl: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            },
            {
                validator: isUrl.validator,
                message: 'Añada una URL válida',
              },
        ],
        mainFeatures: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            },
            {
                validator: arrayRequired.validator,
                message: 'Añada al menos una caracteristica',
                customArgs: { minLength: 1, maxLength: 15 },
            }
        ],
        equipmentIds: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            },
            {
                validator: arrayRequired.validator,
                message: 'Selecciona al menos un elemento',
                customArgs: { minLength: 1, maxLength: 6 },
            }
        ],
        saleTypes: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            },
            {
                validator: arrayRequired.validator,
                message: 'Selecciona al menos un elemento',
                customArgs: { minLength: 1, maxLength: 4 },
            }
        ],
        images: [
            {
                validator: Validators.required,
                message: 'Campo requerido',   
            },
            {
                validator: arrayRequired.validator,
                message: 'Añada al menos una fotografía',
                customArgs: { minLength: 1, maxLength: 10 },
            }
        ]
    }
};

export const formValidation = createFormValidation(validationShema);