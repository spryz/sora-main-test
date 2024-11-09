import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_uxhjyqjFB',
    ClientId: '4me0pl5pvbksvqfdogemi5p699',
};


const UserPool = new CognitoUserPool(poolData);

export default UserPool;
