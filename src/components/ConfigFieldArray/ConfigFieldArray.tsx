import React from 'react';
import classnames from 'classnames/bind';
import { FieldArray } from 'formik';
import NoProfilesInConfig from 'components/NoProfilesInConfig/NoProfilesInConfig';
import AddProfileButton from 'components/AddProfileButton/AddProfileButton';
import ConfigProfileFormFieldGroup from 'components/ConfigProfileFormFieldGroup/ConfigProfileFormFieldGroup';
import DragAndDrop from 'components/DragAndDrop/DragAndDrop';
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
}: ConfigFieldArrayProps) => {
  const profilesFound = profiles.length > 0;
  const fieldGroupErrors = (index: number) =>
    Array.isArray(errors.profiles) && errors.profiles[index];
  const noProfilesInConfig = profiles.length === 0;
  const showAddProfileButton = profiles.length < maxProfiles
    && !(typeof errors.profiles === 'string' && errors.profiles);

  return (
    <FieldArray
      name='profiles'
      render={arrayHelpers => (
        <div className={cx('ConfigFieldArray')}>
          {profilesFound && (
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
                  disableDragDrop={disableDragDrop}
                  errors={fieldGroupErrors(index)}
                  deleteProfileFn={() => arrayHelpers.remove(index)}
                />
              )}
            </DragAndDrop>
          )}
          {noProfilesInConfig && <NoProfilesInConfig />}
          {showAddProfileButton && (
            <AddProfileButton
              onClick={() => arrayHelpers.push('')}
              profilesLeft={maxProfiles - profiles.length}
            />
          )}
        </div>
      )}
    />
  );
};

export default ConfigFieldArray;
