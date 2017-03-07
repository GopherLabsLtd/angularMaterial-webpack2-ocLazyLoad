export default angularRef => {
    const UserNgModule = angularRef.module('myAppUser', []);
    require('./user.scss');
    require('./userController')(UserNgModule);
};