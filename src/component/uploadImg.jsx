import './Style/UploadImg.css'

export function UploadImg(props){
    return(
            <div className='divUploadImg' >
                 <input className='inputUploadImg' type="file"  multiple='multipart' onChange={(e)=>{
                     props.setImages(e.target.files)
                 }} />
            </div>
    )
}