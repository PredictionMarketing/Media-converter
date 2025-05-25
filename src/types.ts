export interface ConversionResult {
  id: string;
  sourceUrl: string;
  sourceType: 'webpage' | 'youtube' | 'podcast' | 'document';
  outputFormat: 'text' | 'pdf' | 'audio' | 'video' | 'course';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: string;
  result?: {
    title: string;
    url: string;
    previewText: string;
    thumbnailUrl: string;
  };
}
