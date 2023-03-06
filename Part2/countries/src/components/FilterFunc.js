import React from 'react'

const FilterFunc = ({val, Change}) =>
    <div>
        find countries <input value={val} onChange={Change} />
    </div>

export default FilterFunc