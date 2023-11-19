import { API_CONFIG } from '@constants';
import axios from 'axios';
import { post } from './HTTPService';

const { HOST } = API_CONFIG;

export async function APILogin(username: string, password: string) {
    const response = await axios.post('/api/login', {
        username,
        password,
    });
    return response.data;
}

export async function APILogout() {
    await post({ url: `${HOST}/auth/logout` });
}

export async function APIGoogleAuthorizer() {
    const response = await axios.get(`${HOST}/api/google-authorize`);
    return response.data;
}
