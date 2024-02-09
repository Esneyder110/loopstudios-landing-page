import './App.css'
import { Creations } from './components/creations'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { Leader } from './components/leader'
import { Leads } from './components/leads'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  return (
    <div className='flex flex-col gap-16'>
      <Hero />
      <div className='xl:mb-40'>
        <Leader />
      </div>
      <Creations />
      <Leads />
      <Footer />
    </div>
  )
}

export default App
