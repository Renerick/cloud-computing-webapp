import { writable } from "svelte/store";
import { loadGroups } from "./ApiClient";


const store_ = {
    groups: []
}

export const store = writable(store_);

export async function loadGroups() {
    let groups = await loadGroups();
    store.set({
        groups: groups.map((g) => {
            let groupStudents = students.filter(s => s.group == g._id)
            return {
                _id: g._id,
                name: g.name,
                students: groupStudents.length,
                averageScore: groupStudents.length ? groupStudents.map(s => s.averageScore).reduce((v, s) => v + s, 0) / groupStudents.length : 0,
                debters: groupStudents.filter(s => s.group === g._id && s.academicalDebt).length
            }
        })
    })
}