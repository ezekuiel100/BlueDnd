function DropableArea({ children, onDragEnter, onDragLeave, onDragOver }) {
  function handleDrop(e) {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");

    if (id < 1) return;

    let el = document.querySelector(`#${id}`);

    const isNonDropable = e.target.closest(".non-dropable");

    if (isNonDropable) {
      return;
    }

    if (el) {
      e.target.append(el);
    }
  }

  function handleDragOver(e) {
    e.preventDefault();

    onDragOver && onDragOver();
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
    >
      {children}
    </div>
  );
}

export default DropableArea;
