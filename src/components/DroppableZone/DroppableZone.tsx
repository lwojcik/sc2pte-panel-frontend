import React, { ReactElement } from 'react';
import { Droppable } from "react-beautiful-dnd";

interface DroppableZoneProviderProps {
  disabled: boolean,
  droppableId: string,
  draggingOverCssClass: string,
  elementArray: unknown[],
  children: (index: number) => ReactElement;
}

const DroppableZoneProvider = ({
  disabled,
  droppableId,
  draggingOverCssClass,
  elementArray,
  children,
}: DroppableZoneProviderProps) => (
  <Droppable droppableId={droppableId} isDropDisabled={disabled}>
    {(provided, snapshot) => (
      <>
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={snapshot.isDraggingOver ? draggingOverCssClass : ''}
        >
          {elementArray.map((element: unknown, index: number) => (
            children(index)
          ))}
        </div>
        {provided.placeholder}
      </>
    )}
  </Droppable>
);

export default DroppableZoneProvider;