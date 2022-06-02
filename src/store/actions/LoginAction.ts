
type Payload = {
  accountNumber: string;
  name: string;
  email: string;
  phone: string;
}

export function setLogin(payload: Payload) {
    return {
        type: 'LOGIN',
        payload 
    }
}

export function setLogout() {
    return {
        type: 'LOGUT',
        payload: {},
    }
}