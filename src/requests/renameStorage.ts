export const renameStorage = async(storageName:string,id:string) => {
    const response = await fetch('http://localhost:8000/api/v1/web/jsonrpc/rename_warehouse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-session-key': `${JSON.parse(localStorage.getItem('session_key') || '')}`
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 0,
            method: "rename_warehouse",
            params: {
                id: id,
                new_name: `Склад: ${storageName}`,
            }
        })
    });

    return await response.json()
}