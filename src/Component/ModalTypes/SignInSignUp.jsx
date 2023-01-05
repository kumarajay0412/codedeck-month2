import React, { useContext, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { ModalContext } from '../../Context/ModalContext'
import { PlaygroundContext } from '../../Context/PlaygroundContext'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
function SignInSignUp() {
    const [user] = useAuthState(auth);
    const { closeModal } = useContext(ModalContext);
    const [loginButton, setLoginButton] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            console.log(result);
            closeModal();
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div div className='p-4'>
            <div className='flex flex-row justify-end p-4'>
                <RxCross1 onClick={() => closeModal()} className='cursor-pointer' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-semibold'>{loginButton ? "SignIn":"SignUp" }</h1>
                {loginButton ? <LoginForm />:<SignUpForm /> }
                
                <button className='bg-white border-2 p-2 rounded-lg shadow-lg m-4' onClick={signInWithGoogle}>Sign In With Google</button>
                {loginButton ? <p className='text-sm'>Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={() => setLoginButton(false)}>Sign Up</span></p> : <p className='text-sm'>Already have an account? <span className='text-blue-500 cursor-pointer' onClick={() => setLoginButton(true)}>Sign In</span></p>}
            </div>
        </div>

    )
}

export default SignInSignUp