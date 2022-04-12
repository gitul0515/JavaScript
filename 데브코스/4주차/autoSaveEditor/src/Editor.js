export default function Editor({ 
  $target, 
  initialState,
  onEditing
}){
  const $editor = document.createElement('div');

  let isInit = false;

  this.state = initialState;

  $target.appendChild($editor);

  this.setState = nextState => {
    this.state = nextState;
    $editor.querySelector('[name=title]').value = this.state.title;
    $editor.querySelector('[name=content]').value = this.state.content;
    this.render();
  }

  this.render = () => {
    if (!isInit) {
      $editor.innerHTML = `
        <input type="text" name="title" style="width:600px; display:block" value="${this.state.title}"/>
        <textarea name="content" style="width:600px;height:400px;">${this.state.content}</textarea>
      `
      isInit = true;
    }
  }
  this.render();

  $editor.addEventListener('keyup', e => {
    const { target } = e;
    const name = target.getAttribute('name');
    if (this.state[name] !== undefined) {
      this.setState({
        ...this.state,
        [name]: target.value
      });
      onEditing(this.state);
    }
  })
}