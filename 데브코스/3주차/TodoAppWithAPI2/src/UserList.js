export default function UserList({
  $target,
  initialState,
  onSelect
}) {
  const $userList = document.createElement('div');
  $target.appendChild($userList);

  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $userList.innerHTML = `
      <h1>Users</h1>
      <ul>
        ${this.state.map(username => `<li data-username=${username}>${username}</li>`).join('')}
        <li>
          <form>
            <input class="new-user" type="text" placeholder="add username">
          </form>
        </li> 
      </ul>
    `
  }
  
  $userList.addEventListener('click', (e) => {
    const li = e.target.closest('li[data-username]');
    if (li) {
      const { username } = li.dataset;
      onSelect(username);
    }
  });

  $userList.addEventListener('submit', () => {
    const input = $userList.querySelector('.new-user');
    if (input.value.length > 0) {
      onSelect(input.value);
      input.value = '';
    }
  });
  this.render();
}