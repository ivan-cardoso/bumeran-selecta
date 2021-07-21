// import React, { Component, useState } from 'react'
// import firebase from '../../utils/firebase'

// function ImageUpload({ setValues, values }) {
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [isDisabled, setIsDisabled] = useState(true)

//   // On file select (from the pop up)
//   const onFileChange = (event) => {
//     // Update the state
//     setSelectedFile(event.target.files[0])
//   }

//   // On file upload (click the upload button)
//   const onFileUpload = () => {
//     // Create a storage reference from our storage service
//     setIsDisabled(true)
//     var storageRef = firebase.storage().ref()
//     var mountainsRef = storageRef.child(selectedFile.name)

//     mountainsRef
//       .put(selectedFile)
//       .then(function (snapshot) {
//         snapshot.ref.getDownloadURL().then((downloadURL) => {
//           setValues({
//             ...values,
//             img: downloadURL,
//           })
//         })
//         setIsDisabled(false)
//       })
//       .catch((err) => console.log(err))
//   }

//   const fileData = () => {
//     if (selectedFile) {
//       return (
//         <div>
//           <h2>File Details:</h2>

//           <p>File Name: {selectedFile.name}</p>

//           <p>File Type: {selectedFile.type}</p>

//           <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           <br />
//           <h4>Choose before Pressing the Upload button</h4>
//         </div>
//       )
//     }
//   }

//   return (
//     <div>
//       <h1>GeeksforGeeks</h1>
//       <h3>File Upload using React!</h3>
//       <div>
//         <input type='file' onChange={onFileChange} />
//         <button onClick={onFileUpload}>Upload!</button>
//       </div>
//       {fileData()}
//     </div>
//   )
// }

// export default ImageUpload

import React, { Component, useState } from 'react'
import firebase from '../../utils/firebase'
import FileUploader from 'react-firebase-file-uploader'

function ImageUpload({ setValues, values }) {
  const [data, setData] = useState({
    avatar: '',
    isUploading: false,
    progress: 0,
    avatarURL: '',
  })

  const handleUploadStart = () =>
    setData((current) => ({ ...current, isUploading: true, progress: 0 }))

  const handleProgress = (progress) =>
    setData((current) => ({ ...current, progress }))

  const handleUploadError = (error) => {
    setData((current) => ({ ...current, isUploading: false }))
    console.error(error)
  }
  const handleUploadSuccess = (filename) => {
    setData((current) => ({
      ...current,
      avatar: filename,
      progress: 100,
      isUploading: false,
    }))
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then((downloadUrl) => {
        setValues({
          ...values,
          img: downloadUrl,
        })
        setData((current) => ({
          ...current,
          avatarURL: downloadUrl,
        }))
      })
  }

  return (
    <div>
      <form>
        <p>Selecciona una imagen</p>
        {data.isUploading && <p>Progress: {data.progress}</p>}
        {data.avatarURL && (
          <img style={{ width: 200 }} src={data.avatarURL} alt={data.avatar} />
        )}
        <FileUploader
          accept='image/*'
          // name='avatar'
          // randomizeFilename
          storageRef={firebase.storage().ref('images')}
          onUploadStart={handleUploadStart}
          onUploadError={handleUploadError}
          onUploadSuccess={handleUploadSuccess}
          onProgress={handleProgress}
        />
      </form>
    </div>
  )
}

export default ImageUpload
