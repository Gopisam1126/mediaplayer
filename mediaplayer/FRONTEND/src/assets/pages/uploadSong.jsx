/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";


function HandleUpload() {
    const [file, setFile] = useState(null);
    const [formData, setFormdata] = useState({
        title: "",
        artist: "",
    })

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
            console.log("Song Uploaded", response.data);
            
        } catch (err) {
            console.log(err);
            
        }
    }

    return <>
        <section className="admin-section">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" id="title" className="title" onChange={handleInputChange} value={formData.title} placeholder="Title" /><br />
                    <input type="text" name="artist" id="artist" className="artist" onChange={handleInputChange} value={formData.artist} placeholder="Artist" /><br />
                    <input type="file" name="song" id="song" className="song" onChange={handleFileChange} accept="audio/*" /><br />

                    <button type="submit" className="sub-button">Add Song</button>
                </form>
            </div>
        </section>
    </>

}

export default HandleUpload;