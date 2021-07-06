import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from './pdf/my-resume.pdf';

const ViewPDF = () => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return(
        <div className="pdf-container">
            {pdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={pdfFile}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker></>}
        </div>
    );
}

export default ViewPDF;