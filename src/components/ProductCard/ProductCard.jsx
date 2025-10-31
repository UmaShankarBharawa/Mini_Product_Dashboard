import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './ProductCard.css'

function ProductCard({ product }) {
    console.log('Product in ProductCard:', product)

    const starColors = {
        orange: "ffa500",
        gray: "808080"
    }

    const stars = Array(5).fill(0)

    return (
        <div>
            <div className="product-card">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className='product-details'>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">${product.price}</p>
                    <div className="product-rating">
                        <div>
                            {stars.map((_, index) => {
                                const ratingValue = index + 1
                                return (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={faStar}
                                        style={{ color: ratingValue <= Math.round(product.rating.rate) ? `#${starColors.orange}` : `#${starColors.gray}` }}
                                    />
                                )
                            })}
                        </div>
                        <p>({product.rating.count})</p>
                    </div>
                    <button className="cart-button">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard