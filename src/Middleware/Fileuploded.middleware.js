import multer  from 'multer'


import path from 'path';
import fs from 'fs';

const uploadPath = path.join(process.cwd(), 'public');

// create folder if not exists
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadPath);
    },
    filename:(req,file,cb)=>{
        const safeDate = new Date().toISOString().replace(/:/g, '-');
              cb(null, safeDate + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

export default upload;