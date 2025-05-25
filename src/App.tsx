import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ConversionForm from './components/ConversionForm'
import ResultsPanel from './components/ResultsPanel'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <ConversionForm />
          </div>
          <div className="lg:col-span-7">
            <ResultsPanel />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
