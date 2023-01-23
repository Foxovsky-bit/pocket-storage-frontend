export const getStorageUnits = async(productId:string) => {
    const response = await fetch('http://localhost:8000/api/v1/web/jsonrpc/get_storage_units', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-session-key': `${JSON.parse(localStorage.getItem('session_key') || '')}`
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 0,
            method: "get_storage_units",
            params: {
                product_id: productId
            }
        })
    });

    return await response.json()
}