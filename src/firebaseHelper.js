import { firestore } from './firebase'; // Import your firestore instance from firebase.js

// Function to add an object to the database
export const addObjectToDatabase = async (name, phone, gender) => {
	try {
		const prevData = await getAllObjects();
		const existingInfo = prevData.find(info => info.phone === phone);
    console.log(existingInfo);
		if (existingInfo) {
			firestore
				.collection('objects')
				.doc(existingInfo.id)
				.update({ name: name, lastUpdated: new Date().getTime() });
		} else {
			await firestore.collection('objects').add({
				name: name,
				phone: phone,
				gender: gender,
				lastUpdated: new Date().getTime(),
			});
		}
		console.log('Object added to database successfully!');
	} catch (error) {
		console.log('Error adding object to database: ', error);
	}
};

// Function to get all objects from the database and return as a list
export const getAllObjects = async () => {
	try {
		const objectsSnapshot = await firestore.collection('objects').get();
		const objectsList = [];
		objectsSnapshot.forEach(doc => {
			const objectData = doc.data();
			objectsList.push({...objectData, id: doc.id});
		});
		return objectsList;
	} catch (error) {
		console.error('Error getting objects from database: ', error);
		return [];
	}
};
