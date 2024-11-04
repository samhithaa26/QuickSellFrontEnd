import React from 'react';

import UrgentIcon from '../assets/SVG-UrgentPriority-colour.svg';
import HighIcon from '../assets/Img-HighPriority.svg';
import MediumIcon from '../assets/Img-MediumPriority.svg';
import LowIcon from '../assets/Img-LowPriority.svg';
import NoPriorityIcon from '../assets/NoPriority.svg';

import ToDoIcon from '../assets/To-do.svg';
import InProgressIcon from '../assets/in-progress.svg';
import DoneIcon from '../assets/Done.svg';
import CancelledIcon from '../assets/Cancelled.svg';

function PriorityStatusIcon({ priorityLevel, status }) {
  const priorityIcons = {
    4: UrgentIcon,
    3: HighIcon,
    2: MediumIcon,
    1: LowIcon,
    0: NoPriorityIcon,
  };

  const statusIcons = {
    todo: ToDoIcon,
    inProgress: InProgressIcon,
    done: DoneIcon,
    cancelled: CancelledIcon,
  };

  const iconSrc = priorityLevel !== undefined 
    ? priorityIcons[priorityLevel]
    : statusIcons[status];

  return <img src={iconSrc} alt={priorityLevel !== undefined ? `Priority ${priorityLevel}` : `Status ${status}`} />;
}

export default PriorityStatusIcon;
