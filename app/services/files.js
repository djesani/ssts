const { compareByDate, toDate } = require('../utils/helpers');
const readdir = util.promisify(fs.readdir);

const getLatestFolder = async (filePath) =>{

  const files = await readdir(filePath);
  files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  const sortedFiles = files.sort(compareByDate);
  console.log(sortedFiles);
  const latestFolder = sortedFiles.pop();
  console.log(latestFolder);
  return latestFolder;

  // fs.readdir(filePath, function(err, files) {
  //     // filter files with '.'
  //     files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  //     const sortedFiles = files.sort(compareByDate);
  //     // console.log('files AFTER sort:');
  //     console.log(sortedFiles);
  //     const latestFolder = sortedFiles.pop();
  //     console.log(latestFolder);
  //
  //     if(err) console.log(err);
  //
  // });
}

const getddImage = async (filePath) =>{
  const latestFolder = await getLatestFolder(filePath);
  const images = await readdir(filePath/latestFolder);
  const dDImg = images.pop();
  return `${latestFolder}/${dDImg}`;

}

// const getddImage = (req, res, next) =>{
  // fs.readdir(filePath, function(err, files) {
      // files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
      // const sortedFiles = files.sort(compareByDate);
      // const latestDDFolder = sortedFiles.pop();
      // console.log(files);
      // console.log(latestDDFolder);

      // if(err) console.log(err);

      // fs.readdir(`${filePath}/${latestDDFolder}`, function(err, files) {
      //     const dDImg = files.pop();
      //     const ddPath = `/media/daily-darshan/${latestDDFolder}/${dDImg}`;
      //     console.log(files);
      //     console.log(ddPath);
      //
      //     if(err) console.log(err);
      //     res.redirect(302, ddPath);
      // });
  // });
// }

module.exports = getLatestFolder, getddImage;
