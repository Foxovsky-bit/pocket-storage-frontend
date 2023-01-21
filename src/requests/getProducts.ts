import { IProductFilters } from "../interfaces/IProductFilters";

export const getProducts = async(search?:string,categoryId?:string) => {

    let filters:IProductFilters = {search:search,category_id:categoryId}
    if (categoryId === "") {
        filters = {search:search}
    }

    const response = await fetch('http://localhost:8000/api/v1/web/jsonrpc/get_products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-session-key': `${JSON.parse(localStorage.getItem('session_key') || '')}`
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 0,
            method: "get_products",
            params: {
                filters:filters
            }
        })
    });

    return await response.json()
}