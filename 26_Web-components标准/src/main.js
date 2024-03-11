/**
 * Web components
 * 
 * 深入对组件化的理解
 * 插槽 模板
 * 
 * Vue模板系统 -> 参考Web components的规范来进行上层的设计
 * 
 * 自定义标签
 * 定义属性
 * 自定义组件 -> 自定义标签 -> 渲染
 * 
 * HTML/DOM -> 规范了Web components
 * 
 * 希望有这种方案提供给开发者能自定义可重用的、可被浏览器正常解析的标签
 * 让逻辑样式标签被封装在一个组件中，最终用自定义标签渲染视图
 * 
 * 标签：template slot
 * 容器：shadowDOM
 * customElements.define
 */

window.customElements.define('my-info',
  class extends HTMLElement {
    constructor () {
      super();

      this.title = this.textContent;
      this.avatar = this.getAttribute('avatar');
      this.myName = this.getAttribute('name');
      this.age = this.getAttribute('age');
      this.occupation = this.getAttribute('occupation');

      this.init();
    }

    init () {
      // shadowRoot -> shadowDOM
      var shodowDOM = this.attachShadow({ mode: 'open' });
      shodowDOM.appendChild(this.createDOM());
    }

    createDOM () {
      var oContainer = this.createContainer();
      oContainer.appendChild(this.createTitle());
      oContainer.appendChild(this.createAvatar());
      oContainer.appendChild(this.createName());
      oContainer.appendChild(this.createAge());
      oContainer.appendChild(this.createOccupation());

      return oContainer;
    }

    createContainer () {
      var oContainer = document.createElement('div');
      oContainer.className = 'my-info-container';
      return oContainer;
    }

    createTitle () {
      var oTitle = document.createElement('h1');
      oTitle.className = 'my-info-title';
      oTitle.textContent = this.title;
      return oTitle;
    }

    createAvatar () {
      var oAvatar = document.createElement('div');
      oAvatar.className = 'my-info-avatar';
      oAvatar.innerHTML = `<img style="width: 100px;" src="${this.avatar}" />`
      return oAvatar;
    }

    createName () {
      var oName = document.createElement('p');
      oName.className = 'my-info-name';
      oName.textContent = `Name: ${this.myName}`;
      return oName;
    }

    createAge () {
      var oAge = document.createElement('p');
      oAge.className = 'my-info-age';
      oAge.textContent = `Age: ${this.age}`;
      return oAge;
    }

    createOccupation () {
      var oOccupation = document.createElement('p');
      oOccupation.className = 'my-info-occupation';
      oOccupation.textContent = `Occupation: ${this.occupation}`;
      return oOccupation;
    }
  }
)

class MyArticle extends HTMLElement {
  constructor () {
    super();

    var _tpl = document.getElementById('my-article-template').content;
    var shadowDOM = this.attachShadow({ mode: 'open' });
    shadowDOM.appendChild(_tpl.cloneNode(true));
  }
}

window.customElements.define('my-article', MyArticle);


