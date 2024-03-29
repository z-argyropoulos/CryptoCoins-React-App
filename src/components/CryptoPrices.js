import Coin from './Coin'

const CryptoPrices = (prop) => {

  const coins = [
    {
      name: "BitCoin",
      base: "btc",
    },
    {
      name: "Ethereum",
      base: "eth"
    },
    {
      name: "Litecoin",
      base: "ltc"
    },
  ]

  return (
    <>
    <h2 style={{textAlign:"center", color:"white", textDecoration: "underline"}}>Crypto Coin Prices</h2>
    <div className="prices-container">
      <Coin {...coins[0]}/>
      <Coin {...coins[1]}/>
      <Coin {...coins[2]}/>
    </div>
    </>
  )
}

export default CryptoPrices
