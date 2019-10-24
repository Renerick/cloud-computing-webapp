import { writable } from 'svelte/store';

const data = {
    groups: [
        {
            _id: "1",
            name: "Group 1",
            studyingForm: "fullTime",
            year: 1
        },
        {
            _id: "2",
            name: "Group 2",
            studyingForm: "fullTime",
            year: 2
        },
        {
            _id: "3",
            name: "Group 3",
            studyingForm: "extramural",
            year: 3
        },
        {
            _id: "4",
            name: "Group 4",
            studyingForm: "extramural",
            year: 4
        },
        {
            _id: "5",
            name: "Group 1",
            studyingForm: "fullTime",
            year: 1
        },
        {
            _id: "6",
            name: "Group 2",
            studyingForm: "fullTime",
            year: 2
        },
        {
            _id: "7",
            name: "Group 3",
            studyingForm: "extramural",
            year: 3
        },
        {
            _id: "8",
            name: "Group 4",
            studyingForm: "extramural",
            year: 4
        },
        {
            _id: "9",
            name: "Group 1",
            studyingForm: "fullTime",
            year: 1
        },
        {
            _id: "10",
            name: "Group 2",
            studyingForm: "fullTime",
            year: 2
        },
        {
            _id: "11",
            name: "Group 3",
            studyingForm: "extramural",
            year: 3
        },
        {
            _id: "12",
            name: "Group 4",
            studyingForm: "extramural",
            year: 4
        },
        {
            _id: "13",
            name: "Group 1",
            studyingForm: "fullTime",
            year: 1
        },
        {
            _id: "14",
            name: "Group 2",
            studyingForm: "fullTime",
            year: 2
        },
        {
            _id: "15",
            name: "Group 3",
            studyingForm: "extramural",
            year: 3
        },
        {
            _id: "16",
            name: "Group 4",
            studyingForm: "extramural",
            year: 4
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
    selectedGroup: null,
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
        if (!group) {
            s.selectedGroup = null
        } else {
            s.selectedGroup = {
                group: data.groups.find(g => g._id == group),
                students: data.students.filter(s => s.group === group)
            };
        }
        return s;
    })
}

export function loadStudent(student) {
    store.update((s) => {
        s.student = data.students.find(s => s._id == student);
        return s;
    })
}

export function updateGroup(field, value) {
    store.update((s) => {
        s.selectedGroup.group[field] = value;
        return s;
    })
}

store.subscribe(v => {
    if (v.student && (!v.selectedGroup || v.student.group !== v.selectedGroup.group._id)) {
        store.set({ ...v, student: null })
    }
})
