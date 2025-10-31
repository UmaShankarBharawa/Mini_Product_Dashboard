import { useEffect, useState } from 'react'
import './Dashboard.css'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductCard from '../../components/ProductCard/ProductCard'
import Loader from '../../components/Loader/Loader'
import Error from '../../components/ErrorState/ErrorState'

function Dashboard() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
                const data = await res.json()
                setProducts(data)
                setFilteredProducts(data)
                const uniqueCategories = [...new Set(data.map(product => product.category))]
                setCategory(uniqueCategories)
            } catch (error) {
                console.error('Error fetching products:', error)
                setError('Failed to fetch products')
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    const handleSearch = (searchTerm) => {
        const loweredTerm = searchTerm.toLowerCase()
        if (loweredTerm === '') {
            setFilteredProducts(products)
        } else {
            setFilteredProducts(
                filteredProducts.filter(product =>
                    product.title.toLowerCase().includes(loweredTerm)
                )
            )
        }
    }

    const handleFilter = (selectedCategory) => {
        if (selectedCategory === "All") {
            setFilteredProducts(products)
        } else {
            setFilteredProducts(
                products.filter(product => product.category === selectedCategory)
            )
        }
    }

    const handleSort = (order) => {
        if (order === 'price-asc') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
        } else if (order === 'price-desc') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
        } else if (order === 'default') {
            setFilteredProducts(products)
        }
    }

    console.log('Products:', products)

    return (
        <div className='dashboard-container'>
            <Header />
            <SearchBar
                handleSearch={handleSearch}
                handleFilter={handleFilter}
                handleSort={handleSort}
                category={category}
            />
            {loading && <Loader />}
            {error && <Error error={error} />}
            <div className='card-container'>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard