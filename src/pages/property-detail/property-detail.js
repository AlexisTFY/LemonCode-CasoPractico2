import { history } from '../../core/router';
import { getProperty, sendContact, getEquipments } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyDetailFromApiToVM } from './property-detail.mappers';
import { onSubmitForm, onUpdateField, onSetError, onSetFormErrors } from '../../common/helpers';
import { formValidation } from './property-detail.validations';

const params = history.getParams();

Promise.all([
    getProperty(params.id),
    getEquipments()
]).then(([property, equipments]) => {
    const propertyDetail = property[0];
    setPropertyValues(mapPropertyDetailFromApiToVM(propertyDetail, equipments));
})

let contactForm = {
    email:'',
    message: '',
};

onUpdateField('email', (event) => {
    const value = event.target.value;
    contactForm = {
        ...contactForm,
        email: value
    };
    formValidation.validateField('email', contactForm.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('message', (event) => {
    const value = event.target.value;
    contactForm = {
        ...contactForm,
        message: value
    };
    formValidation.validateField('message', contactForm.message).then(result => {
        onSetError('message', result);
    });
});

onSubmitForm('contact-button', () => {
    
    formValidation.validateForm(contactForm).then(result => {
        onSetFormErrors(result);
        if(result.succeeded) {
            console.log({contactForm});
            sendContact(contactForm);
        }
    });
});
