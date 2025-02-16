import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = (categoryId) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!categoryId) return;

        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.webbuilder.technolitics.com/api/v1/website-builder/website/category/get-all-categories/${categoryId}`
                );

                console.log("API Response for ID:", categoryId, response.data);

                if (response?.data?.data && Array.isArray(response.data.data)) {
                    setProducts(response.data.data);
                } else {
                    console.error("Unexpected API response format:", response.data);
                    setProducts([]); 
                }
            } catch (error) {
                console.error("Error fetching data:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return { products, loading, error };
};

export default useProducts;
