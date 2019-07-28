import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '', email: '', about: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.email || !user.phone || !user.about) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<h4>Full Name: </h4>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} required /><br />
			<h4>Email: </h4>
			<input type="text" name="email" value={user.email} onChange={handleInputChange} /><br />
			<h4>Phone No.: </h4>
			<input type="text" name="phone" value={user.phone} onChange={handleInputChange} /><br />
		<h4>About: </h4		 >
			<textarea type="text" name="about" value={user.about} onChange={handleInputChange} /><br />
			<button>Submit</button>
		</form>
	)
}

export default AddUserForm
