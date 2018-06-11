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

    this.listDOM = null;
    this.source = null;

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    this.listDOM = ReactDOM.findDOMNode(this);
    this.listDOM.addEventListener('dragstart', this.onDragStart);
    this.listDOM.addEventListener('dragover', this.onDragOver);
    this.listDOM.addEventListener('dragend', this.onDragEnd);
  }

  getDragTarget(e) {
    if (e.target.parentNode.parentNode !== this.listDOM) return null;
    // for these lists, the actual draggable element is the icon, but
    // we want to ignore the icons always and pretend like the list items
    // are the draggable elements
    if (e.target.className.indexOf('icon-drag') >= 0) return e.target.parentNode;
    if (e.target.className.indexOf('sortable-list-draggable') >= 0) return e.target.parentNode;
    return e.target;
  }

  onDragOver(e) {
    if (!this.source) return;
    e.preventDefault();
    const target = this.getDragTarget(e);
    if (!target) return;
    addOrRemoveClass(target, 'dragover', true);
  }

  onDragLeave(e) {
    if (!this.source) return;
    const target = this.getDragTarget(e);
    if (!target) return;
    addOrRemoveClass(target, 'dragover', false);
  }

  onDrop(e) {
    if (!this.source) return;
    e.preventDefault();
    const target = this.getDragTarget(e);
    if (!target) return;
    let listChildren = Array.prototype.slice.call(this.listDOM.children);
    const sourceStartIndex = listChildren.indexOf(this.source);
    if (isBefore(this.source, target)) {
      target.parentNode.insertBefore(this.source, target);
    } else {
      target.parentNode.insertBefore(this.source, target.nextSibling);
    }
    addOrRemoveClass(target, 'dragover', false);
    addOrRemoveClass(this.source, 'dragging', false);
    listChildren = Array.prototype.slice.call(this.listDOM.children);
    const sourceEndIndex = listChildren.indexOf(this.source);
    this.props.onDrop(sourceStartIndex, sourceEndIndex);
    this.source = null;
  }

  onDragStart(e) {
    // the event target will be the icon, but we want to keep
    // track of the list item itself (the parent node)
    if (e.target.className.indexOf('icon-drag') >= 0) {
      this.source = e.target.parentNode;
      this.source.draggable = true;
      addOrRemoveClass(this.source, 'dragging', true);
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.source);
      e.dataTransfer.setDragImage(this.source, 275, 0);
    }
  }

  onDragEnd(e) {
    if (!this.source) return;
    addOrRemoveClass(this.source, 'dragging', false);
    this.source = null;
  }

  render() {
    return (
      <ul className="sortable-list">
        {
          this.props.children.map((child, idx) => (
            <li
              key={Math.random()}
              className="sortable-list-item"
              onDragLeave={this.onDragLeave}
              onDrop={this.onDrop}
            >
              {child}
              <span
                className="icon icon-drag sortable-list-drag-icon"
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
  onDrop: PropTypes.func
};

SortableList.defaultProps = {
  onDrop: () => {}
};

module.exports = SortableList;
