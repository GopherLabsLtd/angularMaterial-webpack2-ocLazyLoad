export default angularRef => {
    const IndexNgModule = angularRef.module('myAppIndex', []);
    require('./index.scss');
    require('./indexController')(IndexNgModule);
}