import React, {
    useEffect
} from 'react';
import api from '../../services/api';
import sideBar from '../../sidebar';
export default function Dashboard() {
    useEffect(() => {
        async function loadClientes() {
         const response =await api.get('/dasboard')
        }
        loadClientes();
    }, []);

return (<div><sideBar/></div>);
}