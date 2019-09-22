export function draggable(node, data) {

    function handleDragStart(e) {
        e.dataTransfer.setData("drag-data", JSON.stringify(data));
    }

    node.addEventListener('dragstart', handleDragStart);
    node.setAttribute('draggable', true);

    return {
        destroy() { node.removeEventListener('dragstart', handleDragStart) }
    }
}

export function droppable(node) {

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        let dataObject = JSON.parse(e.dataTransfer.getData("drag-data"));
        node.dispatchEvent(new CustomEvent("dropped", { detail: { data: dataObject } }));
    }

    node.addEventListener('dragover', handleDragOver);
    node.addEventListener('drop', handleDrop);

    return {
        destroy() {
            node.removeEventListener('dragover', handleDragOver);
            node.removeEventListener('drop', handleDrop);
        }
    }
}