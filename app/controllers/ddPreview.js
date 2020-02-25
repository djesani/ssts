const {getLatestFolder, getddImage} = require('../services/files');
const ddFilePath = `${mediaRootDir}/daily-darshan`;
const ddImagePath = `/media/daily-darshan/`

const getddFolder = async (req, res, next) => {
  try{
    const latestDDFolder = await getLatestFolder(ddFilePath);
    res.redirect(302, `/media/daily-darshan/${latestDDFolder}`);
  }catch(e){
    console.log(e);
  }
}

const getDDImage = async (req, res, next){
  try{
    const latestImgPath = await getddImage(ddFilePath);
    const ddPath = `${ddImagePath}/${latestImgPath}`;
  }catch(e){
    res.redirect(302, ddPath);
  }
}

module.exports = { getddFolder, getddImage };
