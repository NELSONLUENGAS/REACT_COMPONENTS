import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '../Alert/Alert';

export const Table = ({ data }) => {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nombre</th>
						<th>Telefono</th>
						<th>Correo</th>
						<th>Edad</th>
						<th>Cargo</th>
					</tr>
				</thead>
				<tbody style={{ position: 'relative' }}>
					{data.length ? (
						data.map((user, index) => (
							<tr key={index}>
								<td>{user.id}</td>
								<td>{user.nombre}</td>
								<td>{user.telefono}</td>
								<td>{user.correo}</td>
								<td>{user.edad}</td>
								<td>{user.cargo}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={6}>
								<Alert
									type="danger"
									message="No data found 😥"
									position="top"
								/>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

Table.propTypes = {
	data: PropTypes.array.isRequired,
};
