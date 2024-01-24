import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

export const Alert = ({ type, position, message }) => {
	return (
		<>
			<div className={`alert_container ${type} ${position}`}>
				<div className="alert_icon">
					{type === 'success' ? (
						<i>Success</i>
					) : type === 'danger' ? (
						<i>Danger</i>
					) : (
						''
					)}
				</div>

				<div className="alert_message">
					<p>{message}</p>
				</div>
			</div>
		</>
	);
};

Alert.propTypes = {
	type: PropTypes.oneOf(['succes', 'danger']).isRequired,
	position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'center']),
	message: PropTypes.string.isRequired,
};

Alert.defaultProps = {
	position: 'center',
};
