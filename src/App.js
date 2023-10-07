import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneralForm from './components/form/GeneralForm';
import ListNumbers from './components/form/phoneNumberslist';
import React from 'react';
import './App.css';
import MissingTable from './components/form/missingTable'; // Use PascalCase for component names
import AddMissingForm from "./components/form/missingForm";
  
function App() {
  /*
  const a = [
    ["אלעד שביט","זכר", "055-567-3424"],
    ["לברון", "זכר", "055-373-7564"],
    ["מישהו כלשהו", "זכר", "054-546-7654"],
    ["סתם מישהי", "נקבה", "055-555-4444"]
  ];
  */
  
	return (
		<div className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<GeneralForm />} />
					<Route path="/phones" element={<ListNumbers />} />
					<Route path="/addMissing" element={<AddMissingForm />} />
					<Route path="/missingList" element={<MissingTable />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

