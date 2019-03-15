const React = require('react');
const PropTypes = require('prop-types');
const ReactDOM = require('react-dom');

function isBefore(a, b) {
  if (a.parentNode == b.parentNode) {
    for (let cur = a; cur; cur = cur.previousSibling) {
      if (cur === b) {
        return true;
      }
    }
  }
  return false;
}

function addOrRemoveClass(element, className, add) {
  if (add) {
    if (element.className.indexOf(className) < 0) element.className += ` ${className}`;
  } else {
    element.className = element.className.replace(` ${className}`, '');
  }
}

class SortableList extends React.Component {
  constructor(props) {
    super(props);

    this.listDOM = React.createRef();
    this.source = null;

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    if (this.listDOM.current) {
      this.listDOM.current.addEventListener('dragstart', this.onDragStart);
      this.listDOM.current.addEventListener('dragover', this.onDragOver);
      this.listDOM.current.addEventListener('dragend', this.onDragEnd);
    }
  }

  // check whether a given DOM element is inside this sortable list at any depth
  isInList(element) {
    let node = element;
    while (node) {
      if (node === this.listDOM.current) return true;
      node = node.parentNode;
    }
    return false;
  }

  // return the list element <li> that the given element is a child of
  // for these lists, the actual draggable element is the icon, but
  // we want to ignore the icons always and pretend like the list items
  // are the draggable elements
  getListElement(child) {
    if (!this.isInList(child)) return null;
    let node = child;
    while (node && node.tagName !== 'LI') {
      node = node.parentNode;
    }
    return node;
  }

  getDragTarget(e) {
    if (!this.isInList(e.target)) return null;
    const listItem = this.getListElement(e.target);
    if (listItem === this.source) return null;
    return listItem;
  }

  onDragOver(e) {
    if (!this.source) return;
    e.preventDefault();
    const target = this.getDragTarget(e);
    if (!target) return;
    if (isBefore(this.source, target)) {
      addOrRemoveClass(target, 'blx-dragover-top', true);
    } else {
      addOrRemoveClass(target, 'blx-dragover-bottom', true);
    }
  }

  onDragLeave(e) {
    if (!this.source) return;
    const target = this.getDragTarget(e);
    if (!target) return;
    addOrRemoveClass(target, 'blx-dragover-top', false);
    addOrRemoveClass(target, 'blx-dragover-bottom', false);
  }

  onDrop(e) {
    if (!this.source) return;
    e.preventDefault();
    const target = this.getDragTarget(e);
    if (!target) return;
    let listChildren = Array.prototype.slice.call(this.listDOM.current.children);
    const sourceStartIndex = listChildren.indexOf(this.source);
    if (isBefore(this.source, target)) {
      target.parentNode.insertBefore(this.source, target);
    } else {
      target.parentNode.insertBefore(this.source, target.nextSibling);
    }
    addOrRemoveClass(target, 'blx-dragover-top', false);
    addOrRemoveClass(target, 'blx-dragover-bottom', false);
    addOrRemoveClass(this.source, 'blx-dragging', false);
    listChildren = Array.prototype.slice.call(this.listDOM.current.children);
    const sourceEndIndex = listChildren.indexOf(this.source);
    this.props.onDrop(sourceStartIndex, sourceEndIndex);
    this.source = null;
  }

  onDragStart(e) {
    // the event target will be the icon, but we want to keep
    // track of the list item itself (the parent node)
    if (e.target.className.indexOf('blx-icon-drag') >= 0) {
      this.source = e.target.parentNode;
      this.source.draggable = true;
      addOrRemoveClass(this.source, 'blx-dragging', true);
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.source);
      e.dataTransfer.setDragImage(this.source, 275, 0);
    }
  }

  onDragEnd(e) {
    if (!this.source) return;
    addOrRemoveClass(this.source, 'blx-dragging', false);
    this.source = null;
  }

  render() {
    return (
      <ul
        style={this.props.style}
        className={`blx-sortable-list ${this.props.className}`}
        ref={this.listDOM}
      >
        {
          this.props.children.map((child, idx) => (
            <li
              key={Math.random()}
              className="blx-sortable-list-item"
              onDragLeave={this.onDragLeave}
              onDrop={this.onDrop}
            >
              {child}
              <span
                className="blx-icon blx-icon-drag"
                draggable="true"
              />
            </li>
          ))
        }
      </ul>
    );
  }
}

SortableList.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onDrop: PropTypes.func
};

SortableList.defaultProps = {
  className: '',
  style: null,
  onDrop: () => {}
};

module.exports = SortableList;
