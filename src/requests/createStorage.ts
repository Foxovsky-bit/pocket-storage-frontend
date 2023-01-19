export const createStorage = async(storageName:string) => {
    const response = await fetch('http://localhost:8000/api/v1/web/jsonrpc/add_warehouse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-session-key': `${JSON.parse(localStorage.getItem('session_key') || '')}`
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 0,
            method: "add_warehouse",
            params: {
                name: storageName
            }
        })
    });

    return await response.json()
}