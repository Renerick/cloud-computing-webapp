import { data } from "./GroupsData";
import { writable } from "svelte/store";

const store_ = {
    groups: []
}

export const store = writable(store_);

export function loadGroups() {
    store.update(s => {
        s.groups = data.groups.map((g) => {
            let students = data.students.filter(s => s.group === g._id);
            return {
                _id: g._id,
                name: g.name,
                students: students.length,
                averageScore: students.length ? students.map(s => s.averageScore).reduce((v, s) => v + s, 0) / students.length : 0,
                debters: students.filter(s => s.academicalDebt).length
            }
        })
        return s;
    })
}