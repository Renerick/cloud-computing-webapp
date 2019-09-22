import { writable } from 'svelte/store';

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
                    children: [{ _id: "3", name: "3" }]
                }
            ]
        },
        // {
        //     _id: "4",
        //     name: "4",
        //     children: [
        //         {
        //             _id: "5",
        //             name: "5",
        //             children: [
        //                 {
        //                     _id: "6",
        //                     name: "6"
        //                 }
        //             ]
        //         },
        //         {
        //             _id: "7",
        //             name: "7",
        //             children: [
        //                 {
        //                     _id: "8",
        //                     name: "8"
        //                 }
        //             ]
        //         }
        //     ]
        // }
    ]
};

export let store = writable(root);

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