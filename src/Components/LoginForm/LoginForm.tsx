import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Field, FieldProps, Form, Formik, FormikHelpers} from "formik";
import {TextField, Button, InputAdornment, IconButton} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import { routePath } from "../../Router/config";
import classNames from "./LoginForm.module.scss";
import { UserService } from "../../api/services/UserService/UserService";
import { useUser } from "../../Hooks/useUser";

interface FormValues {
	username: string;
	password: string;
}

const LoginForm: React.FC = () => {
	const initialValues: FormValues = {
		username: "",
		password: "",
	};
	const [showPassword, setShowPassword] = useState(false);
	const[error, setError] = useState("");
	const { changeUser } = useUser();
	const navigate = useNavigate();

	const handleTogglePassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};
	const validate = (values: FormValues): Record<string, string> => {
		setError("");
		const errors: Record<string, string> = {};
		if (!values.username) {
			errors.username = "Обязательное поле";
		}
		if (!values.password) {
			errors.password = "Обязательное поле";
		}
		return errors;
	};

	const handleSubmit = async (values: FormValues, {setSubmitting}: FormikHelpers<FormValues>) => {
		setSubmitting(true);
		try {
			const res = await UserService.signIn(values.username, values.password);
			const { token } = res.data;
			changeUser({ token });
			navigate(routePath.index);
		} catch (err) {
			setError(err?.response?.data?.error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={handleSubmit}
		>
			{({isSubmitting, isValid, touched}) => (
				<Form
					className={classNames.LoginForm}
				>
					<div className={classNames.LoginFormHeader}>
						<h1 className={classNames.LoginFormTitle}>
							Тестовый проект
						</h1>
						<h2 className={classNames.LoginFormSubtitle}>
							Войдите в учетную запись
						</h2>
					</div>
					<div
						className={classNames.LoginFormControls}
					>
						<div className={classNames.LoginFormField}>
							<Field name="username">
								{({field, meta}: FieldProps) => (
									<TextField
										label="Логин"
										type="text"
										fullWidth
										margin="none"
										variant="outlined"
										{...field}
										error={meta.touched && Boolean(meta.error)}
										helperText={meta.touched && meta.error}
									/>
								)}
							</Field>
						</div>

						<div className={classNames.LoginFormField}>
							<Field name="password">
								{({field, meta}: FieldProps) => (
									<>
										<TextField
											label="Пароль"
											type={showPassword ? "text" : "password"}
											fullWidth
											margin="none"
											variant="outlined"
											{...field}
											error={meta.touched && Boolean(meta.error)}
											helperText={meta.touched && meta.error}
											InputProps={{
												endAdornment: (
													<InputAdornment position="end">
														<IconButton
															onClick={handleTogglePassword}
															edge="end"
														>
															{showPassword ? <Visibility/> : <VisibilityOff/>}
														</IconButton>
													</InputAdornment>
												)
											}}
										/>
										<p className={classNames.LoginFormService}>Забыли пароль?</p>
									</>
								)}
							</Field>
						</div>

						<div className={classNames.LoginFormFooter}>
							{error && <p className={classNames.LoginFormError}>{error}</p>}
							<Button
								variant="contained"
								color="primary"
								type="submit"
								disabled={isSubmitting || !isValid || !Object.keys(touched).length}
								className={classNames.LoginFormButton}
								sx={{textTransform: "none"}}
							>
								Войти
							</Button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
