import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '../Alert/Alert';

export const Form = (props) => {
	const [isSubmited, setIsSubmited] = useState(false);

	const handleOnSubmit = (event) => {
		event.preventDefault();
		// SE DEBEN HAVCER LAS VALIDACIONES
		setIsSubmited(true);

		setTimeout(() => {
			setIsSubmited(false);
		}, 3000);
	};

	return (
		<>
			<form onSubmit={(event) => handleOnSubmit(event)}>
				<div>
					<h1>Add more Cars</h1>
				</div>

				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
					/>
				</div>
				<div>
					<label htmlFor="age">Age</label>
					<input
						type="text"
						id="age"
					/>
				</div>
				<div>
					<label htmlFor="country">Country</label>
					<input
						type="text"
						id="country"
					/>
				</div>
				<div>
					<label htmlFor="favorite">Facorite Song</label>
					<input
						type="text"
						id="favorite"
					/>
				</div>

				<button type="submit">Enviar</button>
			</form>

			{isSubmited ? (
				<Alert
					type="success"
					message="Form send Successfuly 😏"
					position="top"
				/>
			) : (
				''
			)}
		</>
	);
};

Form.propTypes = {};
