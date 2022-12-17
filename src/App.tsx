import React from 'react';
import './App.css';
import styled from 'styled-components'
import { Routes, Route, Link} from 'react-router-dom';
import { Employee } from './pages/employee';
import { Layout } from './components/Layout'
import { Employees } from './pages/employees';
import { Goods } from './pages/goods';
import { CreateEmployee } from './pages/createEmployee';

const WrapperContent = styled.div`
    margin-left:60px;
    margin-right:60px;
    min-height:100vh;
`;

function App() {
  return (
    <WrapperContent>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path={"employee"} element={<Employee/>}/>
          <Route path={"employees"} element={<Employees/>}/>
          <Route path={"goods"} element={<Goods/>}/>
          <Route path={"createEmployee"} element={<CreateEmployee/>}/>
        </Route>
      </Routes>
    </WrapperContent>
  )
}

export default App;
