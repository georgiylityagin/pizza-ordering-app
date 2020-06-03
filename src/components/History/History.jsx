import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchHistory } from '../../redux/actions/firebase';

import './History.scss';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const History = ({userAuth, ordersHistory, fetchHistory}) => {
  const classes = useStyles();

  useEffect(() => {
    if (userAuth) {
      fetchHistory(userAuth);
    }
  }, [fetchHistory, userAuth])

  return (
    <>
      <h2 className="history__title">History of your orders:</h2>

      {ordersHistory && ordersHistory.length > 0 ?
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Date</TableCell>
                <TableCell>Order details</TableCell>
                <TableCell align="right">Payment Method</TableCell>
                <TableCell align="right">Total Price, $</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordersHistory.map((order) => (
                <TableRow key={order.id}>
                  <TableCell align="left">{order.date}</TableCell>
                  <TableCell>
                    {order.items.map(item => (
                      <div>
                        {`${item.quantity} ${item.title} (${item.size})`}
                      </div>
                      ))}
                  </TableCell>
                  <TableCell align="right">{order.contacts.paymentMethod}</TableCell>
                  <TableCell align="right">{order.totalPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> : null}
    </>
  )
}

const mapStateToProps = ({firebase}) => ({
  userAuth: firebase.currentUser,
  ordersHistory: firebase.history
});

const HistoryConnected = connect(mapStateToProps, {
  fetchHistory
})(History)

export default HistoryConnected;
