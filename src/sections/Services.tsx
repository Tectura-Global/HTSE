import { useState } from 'react';
import dataPoints from '@/data/dataPoint';
import Hypermenu from '@/components/Hypermenu';

function Services() {
    return (
        <Hypermenu dataPoints={dataPoints}/>
    );
}

export default Services;