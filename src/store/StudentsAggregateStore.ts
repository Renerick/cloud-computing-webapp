import { data } from "./GroupsData";
import { writable } from "svelte/store";

const store_ = {
    students: []
}

export const store = writable(store_);

export function loadStudents() {
    store.update(s => {
        s.students = data.students.map((s) => {
            return {
                ...s, groupObj: data.groups.find(g => g._id === s.group)
            }
        })
        return s;
    })
}