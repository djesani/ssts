const env = process.env;
const publicRoot = '/home/sstsahos/public_html';

const prodConfig = {
    db: {
        host: 'ssts.a2hosted.com',
        user: 'sstsahos_webapp',
        password: '55t5WebApp',
        name: 'sstsahos_ssts'
    },
    mediaRootDir: '../public_html/media-content',
    eventFilePath: '/home/sstsahos/ssts-events',
    calendarIconsFilePath: '/home/sstsahos/ssts-calendaricons',
    imageRootDir: `${publicRoot}/images`,
    imageBasePath: 'http://www.sydneytemple.org'
    // imageBasePath: 'https://storage.googleapis.com/cloudiq-aviary-dev-cdn/test-site'
};

const devConfig = {
    db: {
        host: 'ssts.a2hosted.com',
        user: 'sstsahos_webapp',
        password: '55t5WebApp',
        name: 'sstsahos_ssts-test'
    },
    mediaRootDir: 'public/media',
    eventFilePath: 'public/events',
    calendarIconsFilePath: 'public/calendaricons',
    imageRootDir: 'public/images',
    imageBasePath: ''
};

const getRuntimeConfig = (runtime = 'dev') => {
    if(runtime === 'production'){
        return prodConfig;
    }else{
        return devConfig;
    }
};

const baseConfig = getRuntimeConfig(env.NODE_ENV);

module.exports = baseConfig;
