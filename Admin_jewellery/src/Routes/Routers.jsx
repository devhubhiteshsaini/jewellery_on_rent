
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, LayoutPage, ToggleButton, Dashboard, Vendor, Vendor_Details, Clients, Client_Details } from '../components/export';
import { useStateContext } from '../contextApi/StateContext';

const Routers = () => {
    const { isLoading } = useStateContext();

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LayoutPage />}>
                <Route path="" element={<Dashboard />} />
                <Route path="vendors" element={<Vendor />} />
                <Route path="vendor_details/:id" element={<Vendor_Details />} />
                <Route path="clients" element={<Clients />} />
                <Route path="client_details/:id" element={<Client_Details />} />
            </Route>
        </Routes>
    );
};

export default Routers;