import { useState } from "react";
import axios from "axios";
import Header from "../components/header";
import "../pageStyles/uploadSongs.css";
import AddIcon from '@mui/icons-material/Add';
import FolderIcon from '@mui/icons-material/Folder';


function HandleUpload() {
    const [file, setFile] = useState(null);
    const [formData, setFormdata] = useState({
        title: "",
        artist: "",
    });
    const [uploaded, setUploaded] = useState(null);

    function handleInputChange(e) {
        setFormdata({...formData, [e.target.name]: e.target.value});
    }

    function handleFileChange(e) {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();  
        data.append('song', file);
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await axios.post("http://localhost:3000/upload", data, {
                headers : {
                    'Content-Type' : 'multipart/form-data',
                },
            });
            setUploaded(true);
            console.log("Song Uploaded", response.data);
            
        } catch (err) {
            console.log(err);
            setUploaded(false);
        }
    }

    return <>
        <Header/>
        <section className="admin-section">
            <div className="form-container">
                <form onSubmit={handleSubmit} className="add-song-form">
                    <input type="text" name="title" id="title" className="title" onChange={handleInputChange} value={formData.title} placeholder="Title" /><br />
                    <input type="text" name="artist" id="artist" className="artist" onChange={handleInputChange} value={formData.artist} placeholder="Artist" /><br />
                    <input type="file" name="song" id="song" className="song" onChange={handleFileChange} accept="audio/*" /><br />
                    
                    <label htmlFor="song" className="custom-file-upload" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <FolderIcon style={{
                            marginRight: "0.3vw"
                        }} />
                        Choose a Song
                    </label>
                    <br />
                    <button type="submit" className="sub-button" style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <AddIcon style={{
                            marginRight: "0.3vw"
                        }}/>
                        Add Song
                    </button>
                </form>
                <div className="status-container" style={{
                    transition: "0.2s all linear"
                }}>
                        {
                            uploaded ? (
                                <p className="status-good">
                                    Song Uploaded
                                </p>
                            ) : (
                                <p className="status-bad">
                                    Song Upload Failed
                                </p>
                            )
                        }
                </div>
            </div>
        </section>
    </>

}

export default HandleUpload;