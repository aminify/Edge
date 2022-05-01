import { darken } from 'color2k';
import icons from 'icons';
import React from 'react';
import theme from 'theme';

type OrderingArrowsProps = {
  active?: 'up' | 'down' | null;
};

function OrderingArrows({ active }: OrderingArrowsProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span
        style={{
          fontSize: '0.5em',
          ...(active === 'up' ? activeStyles : inactiveStyles),
        }}
      >
        {icons.UP}
      </span>
      <span
        style={{
          fontSize: '0.5em',
          ...(active === 'down' ? activeStyles : inactiveStyles),
        }}
      >
        {icons.DOWN}
      </span>
    </div>
  );
}

export default OrderingArrows;

const activeStyles = {
  color: theme.primary,
  transform: 'scale(1.5)',
  transformOrigin: 'center 70%',
};

const inactiveStyles = {
  color: darken(theme.gray, 0.1),
};
