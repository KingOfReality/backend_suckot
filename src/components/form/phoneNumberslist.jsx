import React, { useEffect, useState } from 'react';
import { getAllObjects } from '../../firebaseHelper';

const femaleSymbol = (
	<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
		<path
			fill="EC09B0"
			d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z"
		/>
	</svg>
);

const maleSymbol = (
	<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
		<path
			fill="#0084ff"
			d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8H424c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80l0 0h0v0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"
		/>
	</svg>
);

/*
This function will create a table with the name, phone number & gender of everyone.
input: list of lists with the info : [[name, phone number, gender], [name, phone number, gender]....]
*/
function ListNumbers() {
	const [informations, setInformations] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await getAllObjects();
			setInformations(data);
		};

		getData();
	}, []);

	return (
		informations.length > 0 && (
			<div className="w-full">
				{informations
					.sort((a, b) => b.lastUpdated - a.lastUpdated)
					.map(info => (
						<div className="flex items-center gap-1 justify-center text-lg">
							<span>{info.phone}</span>-
							<span>
								{info.gender === 'male'
									? maleSymbol
									: info.gender === 'female'
									? femaleSymbol
									: ''}
							</span>
							<span>{info.name}</span>
						</div>
					))}
			</div>
		)
	);
}

export default ListNumbers;
