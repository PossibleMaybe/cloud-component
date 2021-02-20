import React from 'react';
import { ConfigProvider } from 'antd';

const ComponentFactory: any = (Component: any) => {
  return class Factory extends React.Component {
    render() {
      return (
        <ConfigProvider prefixCls="cloud-components-ant">
          <Component {...this.props} />
        </ConfigProvider>
      );
    }
  };
};

export default ComponentFactory;
