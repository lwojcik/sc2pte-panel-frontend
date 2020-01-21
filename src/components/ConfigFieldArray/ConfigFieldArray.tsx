import React from 'react';
import classnames from 'classnames/bind';
import { FieldArray } from 'formik';
import AddProfileButton from 'src/components/AddProfileButton/AddProfileButton';
import ConfigProfileFormFieldGroup from 'src/components/ConfigProfileFormFieldGroup/ConfigProfileFormFieldGroup';
import DragAndDrop from 'src/components/DragAndDrop/DragAndDrop';
import RefreshPageButton from 'src/components/RefreshPageButton/RefreshPageButton';
import styles from './ConfigFieldArray.module.scss';

interface ConfigFieldArrayProps {
  profiles: string[];
  maxProfiles: number;
  errors: {
    profiles?: string[] | string,
  };
  disableDragDrop: boolean;
}

const cx = classnames.bind(styles);

const ConfigFieldArray = ({
  profiles,
  maxProfiles,
  disableDragDrop,
  errors,
}: ConfigFieldArrayProps) => (
  <FieldArray
    name='profiles'
    render={arrayHelpers => (
      <>
        {(!Boolean(profiles) && (
          <p>Something went wrong! <RefreshPageButton /></p>
        ))}
        {profiles.length > 0 && (
          <DragAndDrop
            dragEndFn={arrayHelpers.swap}
            disabled={disableDragDrop}
            droppableId='droppable'
            draggableId='profile'
            draggableCssClass={cx('ConfigFieldArrayItem')}
            isDraggingCssClass={cx('isDragging')}
            droppableDraggingOverCssClass={cx('droppableDraggingOver')}
            droppableElementArray={profiles}
          >
            {(index: number) => (
              <ConfigProfileFormFieldGroup
                key={index}
                index={index}
                profiles={profiles}
                errors={Array.isArray(errors.profiles) && errors.profiles[index]}
                deleteProfileFn={() => arrayHelpers.remove(index)}
              />
            )}
          </DragAndDrop>
        )}
        {profiles.length === 0 && (
          <p>No profiles yet! Add one with a button below</p>
        )}
        {profiles.length < maxProfiles && !(typeof errors.profiles === 'string' && errors.profiles) && (
          <AddProfileButton onClick={() => arrayHelpers.push('')} />
        )}
      </>
    )}
  />
);

export default ConfigFieldArray;
