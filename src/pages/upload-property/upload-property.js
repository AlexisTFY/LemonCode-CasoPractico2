import { onSubmitForm, onUpdateField, onSetError, onSetFormErrors, onAddFile } from '../../common/helpers';
import { formValidation } from './upload-property.validations';
import { getSalesTypeList, getProvinceTypeList, getEquipments, insertProperty } from './upload-property.api';
import { setCheckboxList, setOptionList, onRemoveFeature, onAddFeature, onAddImage} from './upload-property.helpers'

Promise.all([
    getSalesTypeList(),
    getProvinceTypeList(),
    getEquipments(),
]).then(([saleTypeList, provinceList, equipments]) => {
    setCheckboxList(saleTypeList, 'saleTypes');
    setOptionList(provinceList, 'province');
    setCheckboxList(equipments, 'equipments');
})

let generalData = {
    id: '',
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypes: [],
    address:'',
    city:'',
    province:'',
    squareMeter:'',
    rooms:'',
    bathrooms:'',
    locationUrl:'',
    mainFeatures:[],
    equipmentIds:[],
    images:[]
};

onUpdateField('title', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        title: value
    };
    formValidation.validateField('title', generalData.title).then(result => {
        onSetError('title', result);
    });
});
onUpdateField('notes', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        notes: value
    };
    formValidation.validateField('notes', generalData.notes).then(result => {
        onSetError('notes', result);
    });
});
onUpdateField('email', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        email: value
    };
    formValidation.validateField('email', generalData.email).then(result => {
        onSetError('email', result);
    });
});
onUpdateField('phone', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        phone: value
    };
    formValidation.validateField('phone', generalData.phone).then(result => {
        onSetError('phone', result);
    });
});
onUpdateField('price', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        price: value
    };
    formValidation.validateField('price', generalData.price).then(result => {
        onSetError('price', result);
    });
});
onUpdateField('address', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        address: value
    };
    formValidation.validateField('address', generalData.address).then(result => {
        onSetError('address', result);
    });
});
onUpdateField('city', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        city: value
    };
    formValidation.validateField('city', generalData.city).then(result => {
        onSetError('city', result);
    });
});
onUpdateField('province', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        province: value
    };
    formValidation.validateField('province', generalData.province).then(result => {
        onSetError('province', result);
    });
});

onUpdateField('squareMeter', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        squareMeter: value
    };
    formValidation.validateField('squareMeter', generalData.squareMeter).then(result => {
        onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        rooms: value
    };
    formValidation.validateField('rooms', generalData.rooms).then(result => {
        onSetError('rooms', result);
    });
});

onUpdateField('bathrooms', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        bathrooms: value
    };
    formValidation.validateField('bathrooms', generalData.bathrooms).then(result => {
        onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', (event) => {
    const value = event.target.value;
    generalData = {
        ...generalData,
        locationUrl: value
    };
    formValidation.validateField('locationUrl', generalData.locationUrl).then(result => {
        onSetError('locationUrl', result);
    });
});

onUpdateField('equipments', (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    isChecked ? generalData.equipmentIds.push(value) : removeItemFromArr(generalData.equipmentIds , value);
    
    formValidation.validateField('equipments', generalData.equipmentIds).then(result => {
        onSetError('equipments', result);
    });
});

onUpdateField('saleTypes', (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    
    isChecked ? generalData.saleTypes.push(value) : removeItemFromArr(generalData.saleTypes , value)
    
    formValidation.validateField('saleTypes', generalData.saleTypes).then(result => {
        onSetError('saleTypes', result);
    });
});


const element = document.getElementById('insert-feature-button');
  element.onclick = () => {
    const elementToInsert = document.getElementById('newFeature').value;
    onAddFeature(elementToInsert);
    generalData.mainFeatures.push(elementToInsert);

    const elementToDelete = document.getElementById(`delete-${elementToInsert}-button`);
    elementToDelete.onclick = () => {
        onRemoveFeature(elementToInsert);
        removeItemFromArr(generalData.mainFeatures , elementToInsert);
    }

    formValidation.validateField('newFeature', generalData.mainFeatures).then(result => {
        onSetError('newFeature', result);
    });
  };

  const  removeItemFromArr = (arr, item) => {
    var i = arr.indexOf( item );
  
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
}

onAddFile('add-image', value => {
    onAddImage(value);
    generalData.images.push(value);
})


onSubmitForm('save-button', () => {
    formValidation.validateForm(generalData).then(result => {
        onSetFormErrors(result);
        if(result.succeeded) {
            console.log({generalData});
            insertProperty(generalData);
        }
    });
});
