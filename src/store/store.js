import { writable } from 'svelte/store';

const store_ = {
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

const root = {
    _id: "",
    name: "",
    children: [
        {
            _id: "1",
            name: "1",
            children: [
                {
                    _id: "2",
                    name: "2",
                    children: [{
                        _id: "3",
                        name: "3"
                    }]
                }
            ]
        },
        {
            _id: "4",
            name: "4",
            children: [
                {
                    _id: "5",
                    name: "4-5",
                    children: [
                        {
                            _id: "6",
                            name: "4-5-6"
                        }
                    ]
                },
                {
                    _id: "7",
                    name: "4-7",
                    children: [
                        {
                            _id: "8",
                            name: "4-7-8"
                        }
                    ]
                }
            ]
        }
    ]
};

export let store = writable(store_);

export function move(from, to) {
    store.update((s) => {
        var fromPath = from.split("/")
        var parentPath = fromPath.slice(0, -1);
        var toPath = to.split("/");

        var element = findByPath(fromPath, s);
        var parent = findByPath(parentPath, s)
        var toElement = findByPath(toPath, s);

        parent.children = parent.children.filter(e => e != element);
        toElement.children = [...toElement.children || [], element];

        return s;
    })
}

function findByPath(path, start) {
    let current = start;
    path = path.slice(1);

    path.forEach(element => {
        current = current.children.find(e => e._id == element)
    });

    return current;
}