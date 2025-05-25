import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { FiLink, FiFileText, FiVideo, FiHeadphones, FiBook, FiFilm, FiBookOpen } from 'react-icons/fi'
import { useConversionStore } from '../store/conversionStore'

const ConversionForm = () => {
  const [url, setUrl] = useState('')
  const [sourceType, setSourceType] = useState('webpage')
  const [outputFormat, setOutputFormat] = useState('text')
  const addConversion = useConversionStore(state => state.addConversion)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!url) {
      toast.error('Please enter a URL')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      // In a real app, this would be an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const newConversion = {
        id: Date.now().toString(),
        sourceUrl: url,
        sourceType,
        outputFormat,
        status: 'processing' as const,
        createdAt: new Date().toISOString(),
      }
      
      addConversion(newConversion)
      toast.success('Conversion started successfully!')
      setUrl('')
      
      // Simulate conversion completion after some time
      setTimeout(() => {
        const result = {
          title: 'Sample Conversion Result',
          url: 'https://example.com/result',
          previewText: 'This is a preview of the converted content. The full content is available for download.',
          thumbnailUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }
        
        addConversion({
          ...newConversion,
          status: 'completed',
          result,
        })
      }, 5000)
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Convert Media</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="url" className="label">Media URL</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiLink className="text-gray-400" />
            </div>
            <input
              id="url"
              type="url"
              className="input pl-10"
              placeholder="https://example.com/media"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="label">Source Type</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`flex items-center p-3 rounded-lg border ${
                sourceType === 'webpage' 
                  ? 'border-primary-500 bg-primary-50 text-primary-700' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setSourceType('webpage')}
            >
              <FiFileText className="mr-2" />
              <span>Web Page</span>
            </button>
            
            <button
              type="button"
              className={`flex items-center p-3 rounded-lg border ${
                sourceType === 'youtube' 
                  ? 'border-primary-500 bg-primary-50 text-primary-700' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setSourceType('youtube')}
            >
              <FiVideo className="mr-2" />
              <span>YouTube</span>
            </button>
            
            <button
              type="button"
              className={`flex items-center p-3 rounded-lg border ${
                sourceType === 'podcast' 
                  ? 'border-primary-500 bg-primary-50 text-primary-700' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setSourceType('podcast')}
            >
              <FiHeadphones className="mr-2" />
              <span>Podcast</span>
            </button>
            
            <button
              type="button"
              className={`flex items-center p-3 rounded-lg border ${
                sourceType === 'document' 
                  ? 'border-primary-500 bg-primary-50 text-primary-700' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setSourceType('document')}
            >
              <FiBook className="mr-2" />
              <span>Document</span>
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="label">Output Format</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`flex items-center p-3 rounded-lg border ${
                outputFormat === 'text' 
                  ? 'border-primary-500 bg-primary-50 text-primary-700' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setOutputFormat('text')}
            >
              <FiFileText className="mr-2" />
              <span>Text</span>
            </button>
            
            <button
              type="button"
              className={`flex items-center p-3 rounded-lg border ${
                outputFormat === 'pdf' 
                  ? 'border-primary-500 bg-primary-50 text-primary-700' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setOutputFormat('pdf')}
            >
              <FiBook className="mr-2" />
              <span>PDF</span>
            </button>
            
            <button
              type="button"
              className={`flex items-center p-3 rounded-lg border ${
                outputFormat === 'audio' 
                  ? 'border-primary-500 bg-primary-50 text-primary-700' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setOutputFormat('audio')}
            >
              <FiHeadphones className="mr-2" />
              <span>Audio</span>
            </button>
            
            <button
              type="button"
              className={`flex items-center p-3 rounded-lg border ${
                outputFormat === 'video' 
                  ? 'border-primary-500 bg-primary-50 text-primary-700' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setOutputFormat('video')}
            >
              <FiFilm className="mr-2" />
              <span>Video</span>
            </button>
            
            <button
              type="button"
              className={`flex items-center p-3 rounded-lg border col-span-2 ${
                outputFormat === 'course' 
                  ? 'border-primary-500 bg-primary-50 text-primary-700' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setOutputFormat('course')}
            >
              <FiBookOpen className="mr-2" />
              <span>Training Course</span>
            </button>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Convert Now'}
        </button>
      </form>
    </div>
  )
}

export default ConversionForm
