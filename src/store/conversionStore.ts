import { create } from 'zustand'
import { ConversionResult } from '../types'

interface ConversionState {
  conversions: ConversionResult[]
  addConversion: (conversion: ConversionResult) => void
  updateConversion: (id: string, data: Partial<ConversionResult>) => void
  removeConversion: (id: string) => void
}

export const useConversionStore = create<ConversionState>((set) => ({
  conversions: [],
  
  addConversion: (conversion) => set((state) => {
    // Check if conversion with this ID already exists
    const exists = state.conversions.some(c => c.id === conversion.id)
    
    if (exists) {
      // Update existing conversion
      return {
        conversions: state.conversions.map(c => 
          c.id === conversion.id ? { ...c, ...conversion } : c
        )
      }
    } else {
      // Add new conversion
      return {
        conversions: [conversion, ...state.conversions]
      }
    }
  }),
  
  updateConversion: (id, data) => set((state) => ({
    conversions: state.conversions.map(conversion => 
      conversion.id === id ? { ...conversion, ...data } : conversion
    )
  })),
  
  removeConversion: (id) => set((state) => ({
    conversions: state.conversions.filter(conversion => conversion.id !== id)
  }))
}))
