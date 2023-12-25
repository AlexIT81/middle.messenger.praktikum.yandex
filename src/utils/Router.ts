import Block from './Block';

class NewBlock extends Block {
  constructor(props: any) {
    super(props);
  }
}

class Route {
  private _pathname: string;

  private _blockClass: typeof NewBlock;

  private _block: Block | null;

  private _props: any;

  constructor(pathname: string, view: typeof NewBlock, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  public navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  public leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  public match(pathname: string) {
    // return isEqual(pathname, this._pathname);
    return pathname === this._pathname;
  }

  public render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props.pageProps);
    }

    const root = document.querySelector(this._props.rootQuery);
    root.appendChild(this._block.getContent());
    // this._block.show();
  }
}

class Router {
  // eslint-disable-next-line
  private static __instance: Router;

  private routes: Route[] = [];

  private history = window.history;

  private _currentRoute: Route | null = null;

  private _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      // eslint-disable-next-line
      return Router.__instance;
    }

    // this.routes = [];
    // this.history = window.history;
    // this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  public use(pathname: string, block: typeof NewBlock) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  public start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

const router = new Router('#app');

export default router;
