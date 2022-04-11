export default function Editor({ 
  $target, 
  initialState = {
    title: '',
    content: '',
  },
  onEditing
}){
  const $editor = document.createElement('div');

  let isInit = false;

  this.state = initialState;

  $target.appendChild($editor);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    if (!isInit) {
      $editor.innerHTML = `
        <input type="text" name="title" style="width:600px" value="${this.state.title}"/>
        <textarea name="content" style="width:600px;height:400px;">${this.state.content}</textarea>
      `
      isInit = true;
    }
  }
  this.render();

  $editor.addEventListener('keyup', e => {
    const { target } = e;
    const name = target.getAttribute('name');

    if (this.state[name]) {
      this.setState({
        ...this.state,
        [name]: target.value
      });
      onEditing(this.state);
    }
  })
}