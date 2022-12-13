import { EmployeeFilter } from '../components/employees/EmployeeFilter';
import { EmployeeList } from '../components/employees/EmployeeList';

export const Employees = () => {
    return (
        <>
            <EmployeeFilter/>
            <EmployeeList/>
        </>
    )
}