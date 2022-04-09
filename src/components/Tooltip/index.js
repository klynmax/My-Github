import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip(props) {

  const {icon} = props
  return (
    <Tooltip title="Principais linguagens usadas atualmente">
      <IconButton>
        {icon}
      </IconButton>
    </Tooltip>
  );
}