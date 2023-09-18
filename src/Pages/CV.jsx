// Main Components
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
<Viewer fileUrl="/path/to/document.pdf" />;

// Layout
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function CV() {

    const newPlugin = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [], // Remove the attachments tab

    })

    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div
                    style={{
                        height: '100vh',
                        width: '100wh'
                    }}
                >
                    <Viewer
                        theme="dark"
                        defaultScale={1}
                        fileUrl="/Emanuel's_Resume_English.pdf"
                        plugins={[newPlugin]}
                    />
                </div>
            </Worker>
        </>
    )
}