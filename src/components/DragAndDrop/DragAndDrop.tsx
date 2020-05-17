import React, { ReactElement } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DroppableZone from 'components/DroppableZone/DroppableZone';
import DraggableElement from 'components/DraggableElement/DraggableElement';

type SwapElementsFunction = (source: number, destination: number) => void;

interface DragResult {
  source: {
    index: number,
  },
  destination?: {
    index: number,
  },
}

interface DrapAndDropProviderProps {
  dragEndFn: SwapElementsFunction,
  disabled: boolean,
  droppableId: string,
  draggableId: string,
  draggableCssClass: string,
  isDraggingCssClass: string,
  droppableDraggingOverCssClass: string,
  droppableElementArray: unknown[],
  children: (index: number) => ReactElement;
}

const onDragEnd = (result: DragResult, dragEndFn: SwapElementsFunction) => {
  if (result.source && result.destination) {
    dragEndFn(result.source.index, result.destination.index);
  }
};

const DrapAndDropProvider = ({
  dragEndFn,
  disabled,
  droppableId,
  draggableId,
  draggableCssClass,
  isDraggingCssClass,
  droppableDraggingOverCssClass,
  droppableElementArray,
  children,
}: DrapAndDropProviderProps) => (
  <DragDropContext onDragEnd={(result: DragResult) => onDragEnd(result, dragEndFn)}>
    <DroppableZone
      droppableId={droppableId}
      disabled={disabled}
      draggingOverCssClass={droppableDraggingOverCssClass}
      elementArray={droppableElementArray}
    >
      {(index: number) => (
        <DraggableElement
          key={index}
          index={index}
          className={draggableCssClass}
          isDraggingCssClass={isDraggingCssClass}
          disabled={disabled}
          name={`${draggableId}.${index}`}
        >
          {(index: number) => children(index)}
        </DraggableElement>
      )}
    </DroppableZone>
  </DragDropContext>
);

export default DrapAndDropProvider;
