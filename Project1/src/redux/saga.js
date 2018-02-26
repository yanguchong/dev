/**
 * Created by macbook-yang on 10/21/2017.
 */
import saga1 from '../modules/screens/remote/Saga';
import { all } from 'redux-saga/effects'

const watches = [...saga1];

export default function* rootSaga(){
    yield all(watches.map(w => {
        return w()
    }));
}
