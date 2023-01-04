import { useDispatch, useSelector } from 'react-redux';

import { LabelFilter, InputFilter } from './Filter.styled';
import { getValue, filterContacts } from 'redux/store';

export function Filter() {
  const filterName = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getInputValue = event => {
    dispatch(getValue(event.currentTarget.value));
    dispatch(filterContacts(event.currentTarget.value));
  };
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        value={filterName}
        onChange={getInputValue}
      />
    </LabelFilter>
  );
}
