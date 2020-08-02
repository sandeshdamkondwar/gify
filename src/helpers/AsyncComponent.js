import React, { Component } from "react";
export default function (getComponent) {
  class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    UNSAFE_componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((ComponentToRender) => {
          AsyncComponent.Component = ComponentToRender;
          this.setState({ Component: ComponentToRender });
        });
      }
    }
    render() {
      const ComponentToRender = this.state.Component;
      if (ComponentToRender) {
        return <ComponentToRender {...this.props} />;
      }
      return null;
    }
  }
  return AsyncComponent;
}
