import { useState } from 'react'
import { useForm } from 'react-hook-form'

import MyButton from '../../UI/Button/MyButton.jsx'
import Loader from '../../UI/Loader/Loader.jsx'
import Field from '../../UI/MyInput/Field.jsx'

import Layout from '../../Layout/Layout.jsx'

import s from './Auth.module.scss'

const isLoading = false
const isLoadingAuth = false

const Auth = () => {
	const [type, setType] = useState('auth')
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})
	const onSubmit = data => {
		console.log(data)
	}

	return (
		<>
			<Layout heading="Sign In" bgImage="/images/auth-bg.png" />{' '}
			<div className="wrapper-inner-page">
				{isLoading || (isLoadingAuth && <Loader />)}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name="email"
						register={register}
						options={{
							required: 'Email is required'
						}}
						type="text"
						placeholder="Enter email"
					/>

					<Field
						error={errors?.password?.message}
						name="password"
						register={register}
						options={{
							required: 'Password is required'
						}}
						type="password"
						placeholder="Enter password"
					/>
					<div className={s.wrapperButtons}>
						<MyButton
							clickHandler={() => {
								setType('auth')
							}}
						>
							Sign In
						</MyButton>

						<MyButton
							clickHandler={() => {
								setType('register')
							}}
						>
							Sign up
						</MyButton>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
