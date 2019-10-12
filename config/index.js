const env = process.env;

const prodConfig = {
    db: {
        host: 'ssts.a2hosted.com',
        user: 'sstsahos_webapp',
        password: '55t5WebApp',
        name: 'sstsahos_ssts'
    },
    galleryRoot: '/media'
};

const devConfig = {
    db: {
        host: 'ssts.a2hosted.com',
        user: 'sstsahos_webapp',
        password: '55t5WebApp',
        name: 'sstsahos_ssts-test'
    },
    galleryRoot: 'public/media'
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
