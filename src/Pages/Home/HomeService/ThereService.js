import React, { useEffect, useState } from 'react';
import ThereServiceCard from './ThereServiceCard';

const ThereService = () => {
    const [thereService, setThereService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homeService')
        .then(res => res.json())
        .then(data => setThereService(data))
    },[])
    return (
        <div>
            <h3>lkj {thereService.length}</h3>
            <div>
                {
                    thereService.map(services => <ThereServiceCard
                        key={services._id} services={services}
                    ></ThereServiceCard>)
                }
            </div>
        </div>
    );
};

export default ThereService;