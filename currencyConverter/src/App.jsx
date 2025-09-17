import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('zar')
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
     return setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }

 const swap = () => {
    // Capture current values
    const currentFrom = from;
    const currentTo = to;
    const currentAmount = amount;
    const currentConvertedAmount = convertedAmount;

    // Swap them
    setFrom(currentTo);
    setTo(currentFrom);
    setAmount(currentConvertedAmount);
    setConvertedAmount(currentAmount);
  };


  return (
      <div className='w-full h-screen flex flex-wrap justify-center
       items-center bg-cover bg-no-repeat'
       style={{backgroundImage: 'url(https://images.pexels.com/photos/6801639/pexels-photo-6801639.jpeg)'}}>
         <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg
         p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()}}
            >
              <div className='w-full mb-1'>
                <InputBox
                label='from'
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button className='
                absolute left-1/2 -translate-x-1/2
                -translate-y-1/2 border-2 border-white
                rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
              </div>
               <div className='w-full mb-1'>
                <InputBox
                label='to'
                amount={convertedAmount}
                amountDisabled = 'true'
                currencyOptions={options}
                onAmountChange={(amount) => setConvertedAmount(amount)}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3
              rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
         </div>
      </div>
  )
}

export default App
