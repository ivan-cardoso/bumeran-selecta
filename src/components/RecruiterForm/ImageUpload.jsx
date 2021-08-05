import React, { useState } from 'react'
import firebase from '../../utils/firebase'
import FileUploader from 'react-firebase-file-uploader'

function ImageUpload({ setValues, values }) {

  const [data, setData] = useState({
    avatar: '',
    isUploading: false,
    progress: 0,
    avatarURL: values.img || '',
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
