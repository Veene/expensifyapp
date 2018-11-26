import expenses from '../fixtures/expenses';
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListFilters from '../../components/ExpenseListFilters';
import ExpenseList from '../../components/ExpenseList';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';


test('should render ExpenseDashboardPage', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot();
})