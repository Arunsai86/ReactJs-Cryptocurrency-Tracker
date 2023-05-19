import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    resultList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      currencyLogo: each.currency_logo,
      euroValue: each.euro_value,
    }))
    // console.log(updatedData)
    this.setState({resultList: updatedData, isLoading: false})
  }

  render() {
    const {resultList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="cryptocurrenciesList-container">
        <h1 className="title">Cryptocurrency Tracker</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image-size"
        />
        <div className="coins-type-container">
          <div className="header-container">
            <h1 className="heading">Coin Type</h1>
            <div className="header-sub-container">
              <h1 className="heading">USD</h1>
              <h1 className="heading">EURO</h1>
            </div>
          </div>

          <ul>
            {resultList.map(eachItem => (
              <CryptocurrencyItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
