let express =require('express')
//import { signup } from '../controllers/users';
// import { login } from '../controllers/users';
// import { update } from '../controllers/users';
// import { delete_user } from '../controllers/users';
// import { all_users } from '../controllers/users';
// import { user_by_id } from '../controllers/users';


const router = express.Router();

const taxi = require('../controller/users');
router.get('/signup',taxi.show);
// router.post('/login',login);
// router.patch('/update/:userId',update);
// router.delete('/delete/:userId',delete_user);
// router.get('/',all_users);
// router.get('/:userId',user_by_id);


module.exports = router;