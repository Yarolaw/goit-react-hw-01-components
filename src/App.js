import React from 'react';
import styles from './App.module.css';
import Profile from './components/Profile/Profile';
import user from './data/social-profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './data/friend-list/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transaction-history/transactions.json';


const App = () => {
    return (
        <div className={styles.container}>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
        </div>
    );
}   
export default App;