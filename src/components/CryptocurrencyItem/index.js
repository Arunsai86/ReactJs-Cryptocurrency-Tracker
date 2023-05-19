import './index.css'

const CryptocurrencyItem = prop => {
  const {eachItem} = prop
  const {currencyName, usdValue, currencyLogo, euroValue} = eachItem
  return (
    <li className="item-container">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="heading">{currencyName}</p>
      </div>

      <div className="header-sub-container">
        <p className="heading">{usdValue}</p>
        <p className="heading">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
