export const updateProduct = async(name:string,SKU:string,barcode:string,categoryId:string,id:string) => {
    const response = await fetch('http://localhost:8000/api/v1/web/jsonrpc/update_product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-session-key': `${JSON.parse(localStorage.getItem('session_key') || '')}`
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 0,
            method: "update_product",
            params: {
                id:id,
                product_data: {
                    name: name,
                    SKU: SKU,
                    barcode: barcode,
                    category_id: categoryId
                }
            }
        })
    });

    return await response.json()
}