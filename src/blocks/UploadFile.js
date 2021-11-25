import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from "../components/Image";
import Input from '../components/Input';
import Text from '../components/Text';
import './uploadFile.scss';
import uploadIcon from '../assets/upload.svg';


export default function UploadFile(opts) {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    // const [loading, setLoading] = useState(false);
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => {
        wrapperRef.current.classList.remove('dragover');
        wrapperRef.current.classList.add('preloadFile');
    };

    const onFileDrop = (e) => {
        const newFile = e.target.files[0]
        if (newFile) {
            const updatedList = [...fileList, newFile]
            setFileList(updatedList)
            opts.onFileChange(updatedList)
        };
    }

    console.log(opts);

    return (
        <div 
            className={"input input--upload" + (opts.uploadedImg !== "" ? " loadedFile" : "")} 
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            
        >
            <Image className="upload-icon" src={uploadIcon} alt="Upload Icon"/>
            <Text className="upload-text">Drag &amp; drop your file here</Text>
            <Input className="upload-input" type="file" onChange={onFileDrop} />
            <Image className="upload-image" src={opts.uploadedImg} alt="Placeholder" />
            <div className="upload-progress-container">
                <div className="upload-progress-container_value">{opts.progress}</div>
                <div className="upload-progress-container_bar" style={{width: opts.progress + "%"}}></div>
            </div>
        </div>
    )
}

UploadFile.propTypes = {
    onFileChange: PropTypes.func
}
