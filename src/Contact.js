import React, { useEffect } from 'react';
import DataService from './data.service';

function Contact() {

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		const data = await DataService.getData();
		console.log(data);
	}

	return (
		<div className="Contact">
			This is Contact page.<br /><br />
			Go to <code>src/Contact.js</code> to see usage of Axios.
		</div>
	);
}

export default Contact;
