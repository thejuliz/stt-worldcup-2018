export const fetchUsers = () => {
    return fetch('https://stt-worldcup-server.herokuapp.com/users').then((response) => { 
        return response.json();
    });
}