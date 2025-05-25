import React from 'react'
import { FiDownload, FiExternalLink, FiClock } from 'react-icons/fi'
import { useConversionStore } from '../store/conversionStore'
import { ClipLoader } from 'react-spinners'

const ResultsPanel = () => {
  const conversions = useConversionStore(state => state.conversions)
  
  if (conversions.length === 0) {
    return (
      <div className="card p-6 h-full flex flex-col items-center justify-center text-center">
        <div className="bg-gray-100 p-4 rounded-full mb-4">
          <FiClock className="text-gray-500 text-2xl" />
        </div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">No conversions yet</h3>
        <p className="text-gray-500 max-w-md">
          Enter a URL and select your desired output format to start converting media.
        </p>
      </div>
    )
  }
  
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Your Conversions</h2>
      
      <div className="space-y-6">
        {conversions.map(conversion => (
          <div key={conversion.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <div>
                <h3 className="font-medium">{conversion.sourceType.charAt(0).toUpperCase() + conversion.sourceType.slice(1)} to {conversion.outputFormat.charAt(0).toUpperCase() + conversion.outputFormat.slice(1)}</h3>
                <p className="text-sm text-gray-500 truncate max-w-xs">{conversion.sourceUrl}</p>
              </div>
              <div className="flex items-center">
                {conversion.status === 'pending' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Pending
                  </span>
                )}
                {conversion.status === 'processing' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <ClipLoader size={12} color="#1e40af" className="mr-1.5" />
                    Processing
                  </span>
                )}
                {conversion.status === 'completed' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>
                )}
                {conversion.status === 'failed' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Failed
                  </span>
                )}
              </div>
            </div>
            
            {conversion.status === 'completed' && conversion.result && (
              <div className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src={conversion.result.thumbnailUrl} 
                        alt={conversion.result.title}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-medium mb-2">{conversion.result.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {conversion.result.previewText}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a 
                        href={conversion.result.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary flex items-center text-sm"
                      >
                        <FiDownload className="mr-1.5" />
                        Download
                      </a>
                      <a 
                        href={conversion.result.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline flex items-center text-sm"
                      >
                        <FiExternalLink className="mr-1.5" />
                        Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {conversion.status === 'processing' && (
              <div className="p-8 flex flex-col items-center justify-center">
                <ClipLoader size={36} color="#0284c7" />
                <p className="mt-4 text-sm text-gray-600">
                  Your conversion is being processed. This may take a few minutes.
                </p>
              </div>
            )}
            
            {conversion.status === 'failed' && (
              <div className="p-6 text-center">
                <p className="text-red-600 mb-2">Conversion failed</p>
                <p className="text-sm text-gray-600">
                  There was an error processing your request. Please try again.
                </p>
                <button className="mt-4 btn btn-outline text-sm">
                  Try Again
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultsPanel
