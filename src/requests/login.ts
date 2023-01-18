export const login = async(login:string,password:string) => {
    const response = await fetch('http://localhost:8000/api/v1/web/jsonrpc/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 0,
            method: "login",
            params: {
              username: login,
              password: password
            }
        })
    });

    return await response.json()
}