import { writable } from 'svelte/store';
import { replace } from "svelte-spa-router";

import { data } from "./GroupsData";

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

export function createStudent(groupId) {
    store.update((s) => {
        data.students.push({
            _id: Math.random() + '',
            name: "Student 1-1",
            avatar: "https://i.pravatar.cc/400?img=12",
            type: 'budget',
            averageScore: 5,
            academicalDebt: false,
            group: groupId
        });

        s.selectedGroup = { ...s.selectedGroup, students: data.students.filter(s => s.group === groupId) };
        return s;
    })
}

export function loadStudent(student) {
    store.update((s) => {
        s.student = data.students.find(s => s._id == student);
        return s;
    })
}

export function updateGroup(group, field, value) {
    store.update((s) => {
        group[field] = value;
        return s;
    })
}

export function deleteGroup(group) {
    store.update((s) => {
        s.groups = s.groups.filter(g => g !== group);
        return s;
    })
}

export function updateStudent(student, field, value) {
    store.update((s) => {
        student[field] = value;
        return s;
    })
    if (field === "group")
        replace("/explore/" + value + "/" + student._id)
}

export function deleteStudent(student) {
    store.update((s) => {
        data.students = data.students.filter(g => g !== student);
        return s;
    })
}

store.subscribe(v => {
    if (v.student && (!v.selectedGroup || v.student.group !== v.selectedGroup.group._id)) {
        store.set({ ...v, student: null })
    }
})
