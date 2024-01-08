import { useState } from "react";
import { storage } from "../authentication/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"

const Createpage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  console.log(v4())
  const uploadImage = ()=>{
    if (imageUpload == null) return;
    const imageRef = ref(storage, `image/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then(()=>{
      console.log("successfully")
    })
  }
  return (
    <div className="flex flex-col justify-center items-center mt-24 gap-11">
        <input type='file' onChange={(e)=>{setImageUpload(e.target.files[0])}}/>
        <button onClick={uploadImage}>Upload Image</button>
    </div>
    
  );
};

export default Createpage;
