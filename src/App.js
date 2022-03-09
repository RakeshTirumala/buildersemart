// import Nav from './Nav.js'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import React from 'react';
import LoadItems from './screens/HomePage.js'
import Agg from './screens/AggregatesPage.js'
// import RFQ_Form from './screens/RfqPage.js';
import ItemScreen from './screens/ItemScreen.js';
import YourRfq from './screens/YouRfq.js';
import Ordered from './screens/orderedpage.js';
import IsAdmin from './screens/isAdmin.js';
// import AdminPage from './screens/adminpage.js';
import AdminCalci from './screens/admincalcipage.js';
import CementPage from './screens/cementPage.js';
import CmtItemScreen from './screens/CementItemPage.js';
import SteelPage from './screens/steelPage.js';
import SteelItemScreen from './screens/steelItemScreen.js';
import BricksBlocksPage from './screens/BricksBlocksPage.js';
import BBItemScreen from './screens/BricksBlocksItem.js';
// import Title from './screens/Title.js';
import FeedbackPage from './screens/FeedbackPage.js';
import ConfirmationPage from './screens/ConfirmationPage.js';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoadItems/>}></Route>
        <Route path ="/item/:id" element={<ItemScreen/>}></Route>
        <Route path="/aggregates" element={<Agg/>}></Route>
        <Route path="/cement" element={<CementPage/>}></Route>
        <Route path="/cmtitem/:id" element={<CmtItemScreen/>}></Route>
        <Route path="/stlitem/:id" element={<SteelItemScreen/>}></Route>
        <Route path="/steel" element={<SteelPage/>}></Route>
        <Route path="/BricksBlocksPage" element={<BricksBlocksPage/>}></Route>
        <Route path="/bnbitem/:id" element={<BBItemScreen/>}></Route>
        <Route path="/yourrfq" element={<YourRfq/>}></Route>
        {/* <Route path="/ordered!" element={<Ordered/>}></Route> */}
        <Route path="/isAdmin" element={<IsAdmin/>}></Route>
        <Route path="/admin/calci/:id" element={<AdminCalci/>}></Route>
        <Route path="/feedback" element={<FeedbackPage/>}></Route>
        <Route path="/confirmationpage" element={<ConfirmationPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;

      // <BrowserRouter>
      // <Title/>
      // <Router>
      //   <Routes>
      //     <Route path="/" element={<LoadItems/>}></Route>
      //     <Route path ="/item/:id" element={<ItemScreen/>}></Route>
      //     <Route path="/aggregates" element={<Agg/>}></Route>
      //     <Route path="/cement" element={<CementPage/>}></Route>
      //     <Route path="/cmtitem/:id" element={<CmtItemScreen/>}></Route>
      //     <Route path="/stlitem/:id" element={<SteelItemScreen/>}></Route>
      //     <Route path="/steel" element={<SteelPage/>}></Route>
      //     <Route path="/BricksBlocksPage" element={<BricksBlocksPage/>}></Route>
      //     <Route path="/bnbitem/:id" element={<BBItemScreen/>}></Route>
      //     {/* <Route path="/rfq" component={RFQ_Form} exact></Route> */}
      //     <Route path="/yourrfq/:id?" element={<YourRfq/>}></Route>
      //     <Route path="/ordered!" element={<Ordered/>}></Route>
      //     <Route path="/isAdmin" element={<IsAdmin/>}></Route>
      //     {/* <Route path={`/adminpage/:id?`} component={AdminPage}></Route> */}
      //     <Route path="/admin/calci/:id" element={<AdminCalci/>}></Route>
      //     <Route path="/feedback" element={<FeedbackPage/>}></Route>
      //   </Routes>
      // </Router>
      // </BrowserRouter>