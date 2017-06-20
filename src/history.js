import {createBrowserHistory} from 'history';
import qhistory from 'qhistory';
import {stringify, parse} from 'qs';

const history = createBrowserHistory();

export default qhistory(
    history,
    stringify,
    parse
);