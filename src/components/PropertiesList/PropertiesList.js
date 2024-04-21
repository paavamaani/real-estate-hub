import React, { useCallback, useState } from 'react';

import { properties } from '../../utils/mock/properties';

import FilterBar from '../FilterBar/FilterBar';
import PropertyCard from '../PropertyCard/PropertyCard';

const PropertiesList = () => {
  const [filters, setFilters] = useState({});

  const onChangeFilter = useCallback((filters) => {
    setFilters(filters);
  }, []);

  return (
    <>
      <FilterBar onChangeFilter={onChangeFilter} />
      <div className='m-8 grid grid-cols-3 gap-8'>
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </>
  );
};

export default PropertiesList;
