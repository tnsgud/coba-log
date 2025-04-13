import SignInForm from './components/sign-in-form'
import SignInWithGithubButton from './components/sign-in-with-github-button'

export default function SignInPage() {
	console.log(process.env.NODE_ENV)

	return (
		<div>
			{process.env.NODE_ENV === 'development' && <SignInForm />}
			<SignInWithGithubButton />
		</div>
	)
}
