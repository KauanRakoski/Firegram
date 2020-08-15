import React, { useState } from 'react';
import ProgressBar from './progressbar';

const UpForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const ChangeHandler = (e) => {
        let target = e.target.files[0];

        const types = ['image/png', 'image/jpeg']
        if(target && types.includes(target.type)) { 
            setFile(target);
            setError(' ')
        }else{
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }
    return (
      <form>
        <label>
          <input type="file" onChange={ChangeHandler}/>
          <span>+</span>
        </label>
          <div className="output">
            { error && <div className="error">{error}</div> }
            { file && <div className="file">{file.name}</div>}
            { file && <ProgressBar file={file} setFile={setFile}/>}
          </div>
      </form>
    )
  }

export default UpForm;