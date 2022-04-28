import Breadcrumb from './BreadCrumb.js';
import Nodes from './Nodes.js';
import ImageViewer from './ImageViewer.js';
import Loading from './Lodaing.js';
import { request } from '../utils/api.js';
import { checkTypeOfApp as checkType, checkTypeofFetchedData } from '../utils/validation.js';
import { STATIC_IMG_URL } from '../utils/urls.js';

const DIRECTORY = 'DIRECTORY';
const FILE = 'FILE';

export default class App {
  state = {
    isRoot: true,
    nodes: [],
    paths: [],
    isLoading: false,
    selectedImageUrl: null,
  };

  constructor($target) {
    this.$target = $target;
    this.init();
  }

  init() {
    this.createComponents();
    this.fetchNodes();
  }

  createComponents() {
    checkType(this.state);

    this.loading = new Loading({
      $target: this.$target,
      initialState: {
        isLoading: this.state.isLoading,
      },
    });

    this.breadcrumb = new Breadcrumb({
      $target: this.$target,
      initialState: {
        paths: this.state.paths,
      },
      onClick: (id) => this.onClickBreadcrumb(id),
    });

    this.nodes = new Nodes({
      $target: this.$target,
      initialState: {
        isRoot: this.state.isRoot,
        nodes: this.state.nodes,
      },
      onClick: (node) => this.onClickNode(node),
      onPrevClick: () => this.onPrevClick(),
    });

    this.imageViewer = new ImageViewer({
      $target: this.$target,
      initialState: {
        selectedImageUrl: this.state.selectedImageUrl,
      },
      onClose: () => {
        this.setState({
          ...this.state,
          selectedImageUrl: null,
        });
      },
    });
  }

  setState(nextState) {
    checkType(nextState);
    this.state = nextState;

    this.loading.setState({
      isLoading: this.state.isLoading,
    });

    // loading이 끝난 뒤에 breadcrumb의 상태를 변경한다.
    if (!this.state.isLoading) {
      this.breadcrumb.setState({
        paths: this.state.paths,
      });
    }

    this.nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });

    this.imageViewer.setState({
      selectedImageUrl: this.state.selectedImageUrl,
    });
  }

  async fetchNodes(id) {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const nodes = await request(id ? `/${id}` : '/');
    checkTypeofFetchedData(nodes);

    this.setState({
      ...this.state,
      nodes,
      isRoot: id ? false : true,
      isLoading: false,
    });
  }

  async onClickBreadcrumb(id) {
    await this.fetchNodes(id);
    // 클릭한 노드의 하위 노드를 paths 배열에서 제거한다.
    if (id) {
      const nodeIndex = this.state.paths.findIndex((node) => node.id === id);
      const paths = this.state.paths.slice(0, nodeIndex + 1);
      this.setState({
        ...this.state,
        paths,
      });
    } else {
      this.setState({
        ...this.state,
        paths: [],
      });
    }
  }

  async onClickNode(node) {
    if (node.type === DIRECTORY) {
      await this.fetchNodes(node.id);
      this.setState({
        ...this.state,
        paths: [...this.state.paths, node],
      });
    }
    if (node.type === FILE) {
      this.setState({
        ...this.state,
        selectedImageUrl: `${STATIC_IMG_URL}${node.filePath}`,
      });
    }
  }

  async onPrevClick() {
    // 로딩 중이거나 ImageViewer가 활성화된 경우, 뒤로가기를 무효로 한다.
    if (this.state.isLoading || this.state.selectedImageUrl) {
      return;
    }
    const { paths } = this.state;
    if (paths.length === 1) {
      await this.fetchNodes();
    } else {
      await this.fetchNodes(paths[paths.length - 2].id);
    }
    const nextState = {
      ...this.state,
      paths: this.state.paths.slice(0, this.state.paths.length - 1),
    };
    this.setState(nextState);
  }
}
