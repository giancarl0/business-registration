import { get, post } from 'api/utils'
import useAuth from 'hooks/useAuth'
import React from 'react'

import './image-uploader.scss'

const ImageUploader = ({ onChange, displayOnly, value }: {onChange?: any, displayOnly?: boolean, value?: any}) => {
  const { email } = useAuth()
  const [file, setFile] = React.useState<any>(value)

  React.useEffect(() => {
    if (value) {
      const storedFile = get(value)
      setFile(`data:image/png;base64,${storedFile}`)
    }
  }, [value])

  const handleChange = (e: any) => {
    console.log(e)
    const uploadedFile = e.target.files[0]
    const key = `${email}-${uploadedFile.name}`
    onChange(e, key)
    const reader = new FileReader()
    reader.onloadend = () => {
      if (reader && reader.result && typeof reader.result === 'string') {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '')
        post(key, base64String)
        setFile(`data:image/png;base64,${base64String}`)
      }
    }
    reader.readAsDataURL(uploadedFile)
  }

  return (
    <div className="image-uploader-container">
      <img src={file} />
      {!displayOnly && <input type="file" onChange={handleChange} />}
    </div>
  )
}

export default ImageUploader
