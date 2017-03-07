export default angularRef => {
    const IndexNgModule = angularRef.module('myAppIndex', []);
    require('./index.scss');
    require('./indexController')(IndexNgModule);

    function requireAll(r) { r.keys().forEach(r); }
    requireAll(require.context('./img/', true, /\.(jpg|png|ico)$/));
};