import { StartOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfMonth } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";


const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthStart);

    
    
}