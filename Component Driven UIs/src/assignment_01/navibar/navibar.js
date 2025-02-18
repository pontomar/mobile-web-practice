class CustomNavigationBar extends HTMLElement {
  constructor() {
      super()
      const shadowRoot = this.attachShadow({mode: 'open'})
      shadowRoot.innerHTML = `
        <style>   
          div.navibar {
            background-color: #ccc;
            margin: 0;
            width: 100%;
            height: 100%;
          }
          ::slotted(a) {
            display: flex;
            justify-content: space-evenly;
            color: white;
         }
        </style>
        <div class="navibar">
          <slot></slot>
        </div>`
  }

}

customElements.define('navigation-bar', CustomNavigationBar)