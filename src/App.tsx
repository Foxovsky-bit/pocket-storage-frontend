import React from 'react';
import './App.css';
import styled from 'styled-components'
import { Routes, Route, Link} from 'react-router-dom';
import { Layout } from './components/Layout'
import { Goods } from './pages/goods';
import { Storages } from './pages/storages';
import { CreateEmployee } from './pages/createEmployee';
import { SingIn } from './pages/signIn';
import { CreateStorage } from './pages/createStorage';
import { RenameStorage } from './pages/renameStorage';
import { AddProduct } from './pages/addProduct';
import { GoodInfo } from './pages/goodInfo';
import { UpdateProduct } from './pages/upateProduct';

const WrapperContent = styled.div`
    margin-left:60px;
    margin-right:60px;
    min-height:100vh;
`;

function App() {
  return (
    <WrapperContent>
      <Routes>
        <Route path={"/"} element={<SingIn/>}/>
        <Route path={"authorized"} element={<Layout/>}>
          <Route path={"goods"} element={<Goods/>}/>
          <Route path={"goods/:id"} element={<GoodInfo/>}/>
          <Route path={"createEmployee"} element={<CreateEmployee/>}/>
          <Route path={"storages"} element={<Storages/>}/>
          <Route path={"createStorage"} element={<CreateStorage/>}/>
          <Route path={"renameStorage/:id"} element={<RenameStorage/>}/>
          <Route path={"addProduct"} element={<AddProduct/>}/>
          <Route path={"updateProduct/:id"} element={<UpdateProduct/>}/>
        </Route> 
      </Routes>
    </WrapperContent>
  )
}

export default App;
