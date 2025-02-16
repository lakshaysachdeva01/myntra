import { useState, useEffect } from "react";

const BASE_API_URL = "https://api.webbuilder.technolitics.com/api/v1/website-builder/website/product-management/get-all-products/";


const useFetchProducts = (projectId) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!projectId) return; // ✅ Skip API call if no projectId is provided

        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${BASE_API_URL}${projectId}`); // ✅ Append projectId to API URL
                if (!response.ok) {
                    throw new Error(`Failed to fetch products for project: ${projectId}`);
                }
                const data = await response.json();

                console.log(`API Response for Project ID ${projectId}:`, data); // ✅ Debugging log

                if (data && Array.isArray(data.data)) {
                    setProducts(data.data);
                } else {
                    console.error("Unexpected API response format:", data);
                    setProducts([]);
                }
            } catch (err) {
                console.error("Error fetching products:", err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [projectId]); // ✅ Re-fetch when projectId changes

    return { products, loading, error };
};

export default useFetchProducts ;


