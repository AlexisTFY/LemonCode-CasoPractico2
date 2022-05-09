export const mapPropertyDetailFromApiToVM = (property, equipments) => {
    return {
        mainImage: property.images[0],
        title: property.title,
        price: property.price,
        city: property.city,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m2`,
        bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
        notes: property.notes,
        mainFeatures: property.mainFeatures,
        equipments: mapEquipments(property, equipments),
        images: property.images,
        locationUrl: property.locationUrl,
        }
    };

    const getRoomWord = rooms => {
        return rooms > 1 ? 'habitaciones' : 'habitación';
    };

    const getBathroomWord = bathrooms => {
        return bathrooms > 1 ? 'baños' : 'baño';
    };

    const mapEquipments = (property, equipments) => {
        console.log(property);
        console.log(equipments);
        const map = property.equipmentIds.map( obj => {
            
            const find2 = equipments.find(element => element.id === obj);
            console.log(obj);
            return find2.name;
        });
        return map;
    }

    

    