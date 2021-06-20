/* eslint-disable react/no-danger */
import React from 'react';
import feather from 'feather-icons';

const Icon = ({
 size,
 icon,
 className,
 style
}) => (
  <i
    data-testid="icon"
    className={className}
    style={{
      display: 'flex',
      width: size,
      height: size,
      ...style
    }}
    dangerouslySetInnerHTML={{
        __html: feather.icons[icon].toSvg({
          'stroke-width': 1.5, width: size, height: size
      })
    }}
  />
);

export {
  Icon
};
