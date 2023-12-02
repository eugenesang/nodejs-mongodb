## Our example case 
- We want to keep records of our clients accounts.

### Information to keep
1. Name
2. Email
3. Phone
4. Password
5. Account ballance

### Information automatically added by MongoDB and Mongoose

1. Date Created
2. Date updated

Our mongoose schema code will be like this:

```js
import {Schema, model} from 'mongoose'


const accountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ballance: {
        type: Number,
        default: 0
    }
}, { timestamps: true});

const Account = model('Account', accountSchema);

export default Account;
```


# CRUD

## Create:
```js
import Account from './models/account.js';
import {hashSync} from 'bcrypt';

async function createAccount(name, email, phone, password){
    try{

        const passwordHash = hashSync(password, 10);

        const account = new Account({
            name, email, phone, password: passwordHash
        });

        await account.save();

        return account;
    }catch(error){
        throw error;
    }
}
```

## Read 

```js
import Account from './models/account.js'

/**
 * @
 * **/
async function findAccountById(accountId){

}
```