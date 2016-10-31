import './PageError.less';

class PageError extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { router } = this.props;
    setTimeout(() => { router.push('/home'); }, 5000);

    /*
    // or with a location descriptor object
    router.push({
      pathname: '/users',
      query: { modal: true },
      state: { fromDashboard: true }
    })
    */
  }
  render() {
    return (
      <div className="page-error">
        这里是错误页，即将跳转到首页
      </div>
    );
  }
}

export default ReactRouter.withRouter(PageError);
