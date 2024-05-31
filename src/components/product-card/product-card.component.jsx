import './product-card.styles.scss'
import { Button } from '../button/button.component'

const ProductCard = ({ product }) => {
  const orderedItems = []
  const addToOrder = () => {
    orderedItems.push()
    console.log(orderedItems)
  }
  const { name, price, imageUrl } = product
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addToOrder} buttonType="inverted">
        Add To Card
      </Button>
    </div>
  )
}

export default ProductCard
