import React, { ReactElement } from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface DraggableElementProviderProps {
  index: number,
  name: string,
  disabled: boolean,
  className?: string,
  isDraggingCssClass: string,
  children: (index: number) => ReactElement,
}

const DraggableElementProvider = ({
  index,
  name,
  className,
  isDraggingCssClass,
  disabled,
  children,
}: DraggableElementProviderProps) => (
  <Draggable
    key={index}
    draggableId={`${name}.${index}`}
    index={index}
    isDragDisabled={disabled}
  >
    {(provided, snapshot) => (
      <div
        className={`${className}${snapshot.isDragging ? ` ${isDraggingCssClass}` : ''}`}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={provided.draggableProps.style}
      >
        {children(index)}
      </div>
    )}
  </Draggable>
);

export default DraggableElementProvider;
