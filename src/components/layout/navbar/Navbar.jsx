import CartWidget from "../../common/cartwidget/CartWidget"

const Navbar = () => {
  return (
    <div>
      <h1>MICROSITE ARGENTINA</h1>
      <ul>
        <li>Quienes Somos</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default Navbar
