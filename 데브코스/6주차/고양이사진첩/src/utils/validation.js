import { STATIC_IMG_URL } from './urls.js';

function isNull(state) {
  if (state == null) {
    throw new TypeError('state가 전달되지 않았습니다.');
  }
}

function isObject(state) {
  if (typeof state !== 'object') {
    throw new TypeError('state의 타입이 객체가 아닙니다.');
  }
}

function isArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('해당 타입이 배열이 아닙니다.');
  }
}

function hasProperty(state, ...keys) {
  keys.forEach((key) => {
    if (!(key in state)) {
      throw new TypeError(`state의 속성에서 ${key}를(을) 찾을 수 없습니다.`);
    }
  });
}

function isMatchedType(state, key, type) {
  if (typeof state[key] !== type) {
    throw new TypeError(`속성 ${key}의 타입이 ${type}이(가) 아닙니다.`);
  }
}

function isMatchedUrl(url, _regExp) {
  const regExp = new RegExp(_regExp);
  if (!regExp.test(url)) {
    throw new Error(`url의 경로가 올바르지 않습니다.`);
  }
}

export function checkTypeOfApp(state) {
  isNull(state);
  isObject(state);
  hasProperty(state, 'isRoot', 'nodes', 'paths', 'isLoading', 'selectedImageUrl');
}

export function checkTypeOfLodaing(state) {
  isNull(state);
  isObject(state);
  hasProperty(state, 'isLoading');
  isMatchedType(state, 'isLoading', 'boolean');
}

export function checkTypeOfBreadCrumb(state) {
  isNull(state);
  isObject(state);
  hasProperty(state, 'paths');
  isArray(state.paths);
}

export function checkTypeOfNodes(state) {
  isNull(state);
  isObject(state);
  hasProperty(state, 'isRoot', 'nodes');
  isMatchedType(state, 'isRoot', 'boolean');
  isArray(state.nodes);
}

export function checkTypeOfImageViewer(state) {
  isNull(state);
  isObject(state);
  hasProperty(state, 'selectedImageUrl');
  const { selectedImageUrl } = state;
  if (selectedImageUrl !== null) {
    isMatchedType(state, 'selectedImageUrl', 'string');
    isMatchedUrl(selectedImageUrl, `^${STATIC_IMG_URL}`);
  }
}

/* 
  서버에서 가져 온 데이터의 타입을 검사한다. 
    1) nodes가 배열인가
    2) node가 객체인가
    3) node의 속성으로 id, name, type, parent, filePath가 존재하는가 
    4) node의 각 속성은 올바른 타입을 갖고 있는가 
*/
export function checkTypeofFetchedData(nodes) {
  isArray(nodes);
  nodes.forEach((node) => {
    isObject(node);
    const nodeType = {
      id: 'string',
      name: 'string',
      type: 'string',
      parent: 'object', // 또는 null
      filePath: 'string', // 또는 null
    };
    hasProperty(node, ...Object.keys(nodeType));
    Object.keys(nodeType).forEach((key) => {
      if ((key === 'parent' || key === 'filePath') && !node[key]) {
        return;
      }
      isMatchedType(node, key, nodeType[key]);
    });
  });
}
