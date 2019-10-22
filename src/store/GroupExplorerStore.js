import { writable } from 'svelte/store';

const data = {
    groups: [
        {
            _id: "1",
            name: "Group 1"
        },
        {
            _id: "2",
            name: "Group 2"
        },
        {
            _id: "3",
            name: "Group 3"
        },
        {
            _id: "4",
            name: "Group 4"
        },
    ],
    students: [
        {
            _id: "St-1-1",
            name: "Student 1-1",
            group: "1"
        },
        {
            _id: "St-1-2",
            name: "Student 1-2",
            group: "1"
        },
        {
            _id: "St-1-3",
            name: "Student 1-3",
            group: "1"
        },
        {
            _id: "St-2-1",
            name: "Student 2-1",
            group: "2"
        },
        {
            _id: "St-2-2",
            name: "Student 2-2",
            group: "2"
        },
        {
            _id: "St-2-3",
            name: "Student 2-3",
            group: "2"
        },
        {
            _id: "St-3-1",
            name: "Student 3-1",
            group: "3"
        },
        {
            _id: "St-3-2",
            name: "Student 3-2",
            group: "3"
        },
        {
            _id: "St-3-3",
            name: "Student 3-3",
            group: "3"
        },
    ]
}

const store_ = {
    groups: [],
    group: null,
    student: null
}

export let store = writable(store_);

export function loadGroups() {
    store.update((s) => {
        s.groups = data.groups;
        return s;
    })
}

export function loadStudents(group) {
    store.update((s) => {
        s.group = {
            group: group,
            students: data.students.filter(s => s.group === group._id)
        };
        return s;
    })
}

export function loadStudent(student) {
    store.update((s) => {
        s.student = student;
        return s;
    })
}

store.subscribe(v => {
    if (v.student && (!v.group || v.student.group !== v.group.group._id)) {
        store.set({ ...v, student: null })
    }
})