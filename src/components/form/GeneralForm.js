import React, { useState } from 'react';
import { addObjectToDatabase, getAllObjects } from '../../firebaseHelper';
import { useNavigate } from 'react-router-dom';

export default function GeneralForm() {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [gender, setGender] = useState('male');
	const [isSubmitted, setSubmit] = useState(false);
  const navigate = useNavigate();

	async function submitHelp() {
    console.log("helping");
		await addObjectToDatabase(name, phone, gender);
    const data = await getAllObjects();
    console.log(data);
	}

	function openModal() {
  		setIsModalOpen(true);
	}

	function closeModal() {
		setSubmit(false)
		setIsModalOpen(false);
  }

	function submitGetHelp() {
		setSubmit(true)
    navigate('/phones');
	}

	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<form className="p-4 rounded-md shadow-md bg-white min-w-[260px] flex flex-col gap-4">
			{!isModalOpen &&(
				<div>
					<button
						type="button"
						onClick={openModal}
						className="bg-[#F9FAFB] border-[#c0c4c9] border border-b-2 rounded-[0.25rem] border-solid outline-none px-3 py-2 hover:bg-[#e7e7e8] active:bg-[#d5d7d7]">
						רוצה לתמוך
					</button>
					<button
						type="button"
						onClick={submitGetHelp}
						className="bg-[#F9FAFB] border-[#c0c4c9] border border-b-2 rounded-[0.25rem] border-solid outline-none px-3 py-2 hover:bg-[#e7e7e8] active:bg-[#d5d7d7]">
						צריך תמיכה
					</button>
					 </div>)
					}

					{isModalOpen && (
					  <div className="modal">    
    					<div className="modal-content">
						<form className="p-4 rounded-md shadow-md bg-white min-w-[260px] flex flex-col gap-4">
							<div className="flex flex-col items-end w-full">
								<label
									htmlFor="name"
									className="text-sm text-[#374151] font-medium mb-[0.45rem]">
									שם
								</label>
								<input
									required
									type="text"
									id="name"
									placeholder="הכנס שם"
									dir="rtl"
									value={name}
									onChange={e => setName(e.target.value)}
									className="w-full bg-[#F9FAFB] border-[#c0c4c9] border border-b-2 rounded-[0.25rem] border-solid outline-none p-3 text-sm"
								/>
							</div>
							<div className="flex flex-col items-end w-full">
								<label
									htmlFor="phone"
									className="text-sm text-[#374151] font-medium mb-[0.45rem]">
									מספר טלפון
								</label>
								<input
									required
									type="tel"
									id="phone"
									placeholder="הכנס מספר טלפון"
									dir="rtl"
									value={phone}
									onChange={e => setPhone(e.target.value)}
									className="w-full bg-[#F9FAFB] border-[#c0c4c9] border border-b-2 rounded-[0.25rem] border-solid outline-none p-3 text-sm"
								/>
							</div>
							<div className="flex flex-col items-end w-full">
								<label className="text-sm text-[#374151] font-medium mb-[0.45rem]">
									מגדר
								</label>
								<div className="flex gap-4 flex-row-reverse">
									<div>
										<label htmlFor="male" className="mr-1 relative -top-0.5">
											זכר
										</label>
										<input
											type="radio"
											id="male"
											name="gender"
											value="male"
											checked={gender === 'male'}
											onChange={e => setGender(e.target.value)}
										/>
									</div>
									<div>
										<label htmlFor="female" className="mr-1 relative -top-0.5">
											נקבה
										</label>
										<input
											type="radio"
											id="female"
											name="gender"
											value="female"
											checked={gender === 'female'}
											onChange={e => setGender(e.target.value)}
										/>
									</div>
									<div>
										<label htmlFor="other" className="mr-1 relative -top-0.5">
											אחר
										</label>
										<input
											type="radio"
											id="other"
											name="gender"
											value="other"
											checked={gender === 'other'}
											onChange={e => setGender(e.target.value)}
										/>
									</div>

								</div>

								<div>
								<button
										type="button"
										onClick={submitHelp}
										className="bg-[#F9FAFB] border-[#c0c4c9] border border-b-2 rounded-[0.25rem] border-solid outline-none px-3 py-2 hover:bg-[#e7e7e8] active:bg-[#d5d7d7]">
										שלח
									</button>

									<button
										type="button"
										onClick={closeModal}
										className="bg-[#F9FAFB] border-[#c0c4c9] border border-b-2 rounded-[0.25rem] border-solid outline-none px-3 py-2 hover:bg-[#e7e7e8] active:bg-[#d5d7d7]">
										חזור
									</button>
								</div>

							</div>

							{isSubmitted && (
									<div>
										<label htmlFor="other" className="mr-1 relative -top-0.5">
											בקשתך נשלחה
										</label>
										</div>
								)}

							</form>								
						</div>

			     
    					</div>
				)}
				
			</form>
		</div>
	);
}
