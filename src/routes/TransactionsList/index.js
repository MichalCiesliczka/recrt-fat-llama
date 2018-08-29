import Loadable from 'react-loadable';
import { connect } from 'react-redux';

import { transactionsListRoutine } from '../../features/transactionsList/transactionsList.sagas';
import { increaseTransactionsListPage } from '../../features/transactionsList/transactionsList.actions';
import {
  getCurrentTransactionsListPage,
  getLastPageErrorStatus,
} from '../../features/transactionsList/transactionsList.selectors';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "transactionList" */ './TransactionsList'),
  loading: () => null,
});

const mapStateToProps = state => ({
  currentTransactionsListPage: getCurrentTransactionsListPage(state),
  lastPageError: getLastPageErrorStatus(state),
});

const mapDispatchToProps = {
  transactionsListRoutine,
  increaseTransactionsListPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadableComponent);
