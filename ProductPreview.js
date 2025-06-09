import { useRef, useEffect } from 'react'

export default function ProductPreview({ pdfUrl }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    const iframe = iframeRef.current
    function resizeIframe() {
      if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px'
      }
    }
    iframe.addEventListener('load', resizeIframe)
    return () => iframe.removeEventListener('load', resizeIframe)
  }, [pdfUrl])

  return (
    <div className="mt-6 border rounded-lg overflow-hidden">
      <iframe
        ref={iframeRef}
        src={pdfUrl}
        title="Sample Preview"
        className="w-full"
        style={{ minHeight: '500px' }}
      />
      <p className="p-4 text-sm text-gray-600">
        Scroll above to preview a sample of the coloring book.
      </p>
    </div>
  )
}
