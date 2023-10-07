import { useState } from 'react';

export default function AddMissingForm() {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [gender, setGender] = useState('male');

	function submitData() {}

	return (
		<div className="flex items-center justify-center w-screen h-screen bg-[#F3F0E7]">
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
						מספר טלפון אליו יש לפנות
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
				</div>
				<div className="flex gap-2 justify-center">
					<button
						onClick={submitData}
						className="bg-[#F9FAFB] border-[#c0c4c9] border border-b-2 rounded-[0.25rem] border-solid outline-none px-3 py-2 hover:bg-[#e7e7e8] active:bg-[#d5d7d7]">
                            שליחה
					</button>
				</div>
			</form>
		</div>
	);
}
