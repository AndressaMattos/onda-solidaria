import { signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from  '../src/config/firebaseConfig';
import * as firebaseAuth from 'firebase/auth';

export default class AuthService {
    
    getLoggedUser() {
        return new Promise(resolve => {
            firebaseAuth.onAuthStateChanged(auth, (user: any) => {
                console.log(user);
                resolve(user);
            })
        })
    }
    
    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Login bem-sucedido:', user);
        return user;
      } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro de login:', errorCode, errorMessage);
        throw new Error('Credenciais de login inválidas. Verifique seu email e senha.');
      }
    }
  
    async recoverPassword(email: string) {
      try {
        await sendPasswordResetEmail(auth, email);
        console.log('Email de recuperação de senha enviado com sucesso');
      } catch (error) {
        console.error('Erro ao solicitar recuperação de senha:', error);
        throw error;
      }
    }

    async registerUser (email: string, password:string) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        return true;
      } catch (error) {
        console.error('Erro durante o registro:', error);
        return false;
      }
    };
  }