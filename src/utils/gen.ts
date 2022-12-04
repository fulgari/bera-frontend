import { TodoRecordType } from "../components/BasicDashboard/BasicDashboardSlice";

const genEmptyTodoRecord = (currentDateString: string): TodoRecordType => {
    const ts = new Date().getTime();
    const tdId = ts.toString(32) + Math.floor(Math.random() * 1000);
    return ({
        id: tdId,
        date: currentDateString,
        listId: null,
        note: null,
        text: "",
        done: false,
        updatedAt: ts.toString(),
        createdAt: ts.toString(),
        isMD: null,
        tags: null
    })
}

export { genEmptyTodoRecord };