import React from 'react';
import classnames from 'classnames/bind';
import ConfigBackground from 'src/components/ConfigBackground/ConfigBackground';
import FormikWrapper from 'src/components/FormikWrapper/FormikWrapper';
import ConfigForm from 'src/components/ConfigForm/ConfigForm';
import Footer from'src/components/Footer/Footer';
import 'typeface-lato';
import styles from 'src/pages/Config/Config.module.scss';

const cx = classnames.bind(styles);

const data = {
  profiles: [
    'https://starcraft2.com/en-us/profile/2/1/5415782337',
    'https://starcraft2.com/en-us/profile/2/1/541578337',
  ],
};

const configSubmitFunction = () => {
  alert('Data submitted! Haha, except not Kappa');
};

const maxProfiles = 3;

const validationSchema = () => Promise.resolve(true);

const Sample = () => (
  <div className={cx('Config')}>
    <ConfigBackground />
    <div className={cx('cols')}>
      <div className={cx('formCol')}>
        <FormikWrapper
          initialValues={data}
          validationSchema={validationSchema}
          onSubmit={configSubmitFunction as any}
        >
          {(props) => (
            <ConfigForm
              {...props}
              status={props.status}
              profiles={props.values.profiles}
              maxProfiles={maxProfiles}
            />
          )}
        </FormikWrapper>
      </div>
      <div className={cx('infoCol')}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Info
      </div>
    </div>
    <Footer />
  </div>
);

export default Sample;
