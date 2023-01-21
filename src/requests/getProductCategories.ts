export const getProductCategories = async() => {
    const response = await fetch('http://localhost:8000/api/v1/web/jsonrpc/get_product_categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-session-key': `${JSON.parse(localStorage.getItem('session_key') || '')}`
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 0,
            method: "get_product_categories",
            params: {}
        })
    });

    return await response.json()
}