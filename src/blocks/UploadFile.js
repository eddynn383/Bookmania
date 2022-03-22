import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from "../components/Image";
import Input from '../components/Input';
import Text from '../components/Text';
import './style/uploadFile.scss';
import uploadIcon from '../assets/upload.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export default function UploadFile(opts) {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const [isRemoved, setIsRemoved] = useState(false);

    // const [loading, setLoading] = useState(false);
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => {
        wrapperRef.current.classList.remove('dragover');
        wrapperRef.current.classList.add('preloadFile');
    };

    const onFileDrop = (e) => {
        const newFile = e.target.files[0]
        console.log(e)
        setIsRemoved(false);
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            opts.onFileChange(updatedList);
            wrapperRef.current.classList.add('preloadFile');
        };
    }

    const deleteHandle = () => {
        opts.onDelete();
        setIsRemoved(true);
        wrapperRef.current.classList.remove('loadedFile');
        wrapperRef.current.classList.remove('preloadFile');
    }


    return (
        <div 
            className={"input input--dragndrop" + (opts.uploadedImgUrl !== "" ? " loadedFile" : "")} 
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
        >
            {
                // !opts.uploadedImgUrl &&
                <div className="upload-container">
                    <Image className="upload-icon" src={uploadIcon} alt="Upload Icon"/>
                    <Text className="upload-text">Drag &amp; drop your file here</Text>
                    <Input className="upload" type="file" onChange={onFileDrop} />
                </div>
            }
            {
                (opts.uploadedImgUrl && !isRemoved) && 
                <div className="upload-preview">
                    <button className="btn btn--close" onClick={deleteHandle}><FontAwesomeIcon icon={faTimes}/></button>
                    <Image className="upload-image" src={opts.uploadedImgUrl} alt={opts.uploadedImgName} />
                </div>
            }
            <div className="upload-progress-container">
                <div className="upload-progress-container_value">{opts.progress}</div>
                <div className="upload-progress-container_bar" style={{width: opts.progress + "%"}}></div>
            </div>
        </div>
    )
}

UploadFile.propTypes = {
    onFileChange: PropTypes.func,
    onDelete: PropTypes.func
}
