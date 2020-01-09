import * as React from 'react';

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = props => (
  <nav
    style={props.style}
    className={`blx-breadcrumbs ${props.className}`}
  >
    <ul>
      {
        props.breadcrumbs.map(breadcrumb => (
          <li key={breadcrumb.text}>
            <a
              href={breadcrumb.href}
              title={breadcrumb.text}
            >
              {breadcrumb.text}
            </a>
          </li>
        ))
      }
    </ul>
  </nav>
);

type BreadcrumbsProps = {
  className?: string,
  style?: any, //object,
  breadcrumbs?: {
    text: string,
    href: string
  }[]
};

Breadcrumbs.defaultProps = {
  className: '',
  style: null,
  breadcrumbs: []
};

module.exports = Breadcrumbs;
