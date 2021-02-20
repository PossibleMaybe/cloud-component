import React, { PureComponent } from 'react';
import { Typography } from 'antd';
const { Paragraph } = Typography;
import ComponentFactory from '../ComponentFactory';

import styles from './index.less';

interface IProps {
  value: string | undefined;
}
@ComponentFactory
export default class Copy extends PureComponent<IProps, {}> {
  render() {
    const { value } = this.props;
    if (value && value !== '-') {
      return <Paragraph className={styles.copy} copyable={{ text: value }} />;
    }

    return null;
  }
}
