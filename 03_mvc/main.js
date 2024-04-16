/*
  MVC 的概念是从后端开发引入的，全名是 Model View Controller
  M: Model      数据模型（模型层） -> 操作数据库 (对数据进行增删改查的操作)
  V: View       视图层 -> 显示视图或视图模板
  C: Controller 控制器层 -> 逻辑层  数据和视图关联挂载和基本的逻辑操作

  服务端前端渲染 
  view 发起请求 -> Controller 接收到请求 -> 让 Model 去操作数据库 -> 交给 Controller -> 返回到前端

  前端中的 MVC
  Model -> 管理视图所需要的数据 -> 数据与视图的关联
  View -> HTML模板 + 视图渲染
  Controller -> 管理事件逻辑

  MVC 的缺点
  View 层本应该只关注数据的展示，但是里面包含了触发 render 的方法
  我们希望是有一套驱动，能把数据、视图、事件处理都放在一起集中处理，这就是 ViewModel

  MVC 是 MVVM 模型的雏形，MVVM 解决了驱动不内聚的缺点
  Modal 管理数据 data -> 通过 ViewModel(收集依赖、模板编译、数据劫持)连接操作 -> View 层只关注视图
  这样设计方案的好处，开发者只需要关注于 M 与 V 层的逻辑，减轻心智负担

  但是严格意义上说 Vue 其实不算是完整的 MVVM，因为视图层可以去使用 ref 操作 DOM 节点   
*/

(function () {
  
  function init () {
    model.init(); // 组织数据 + 数据监听操作 / 数据代理
    view.render(); // 组织HTML模板 + 渲染HTML模板
    controller.init(); // 事件处理函数定义与绑定
  }
  
  var model = {
    data: {
      a: 0,
      b: 0,
      s: '+',
      r: 0
    },
    init: function () {
      var _this = this;

      for (var k in _this.data) {
        (function (k) {
          Object.defineProperty(_this, k, {
            get: function () {
              // model.a -> get
              return _this.data[k];
            },
            set: function (newValue) {
              // model.a = 123; -> set
              _this.data[k] = newValue;
              view.render({ [k]: newValue });
            }
          })
        })(k)
      }
    }
  }
  
  // calculator
  var view = {
    el: '#app',
    template: `
      <p>
        <span class="cal-a">{{ a }}</span>
        <span class="cal-s">{{ s }}</span>
        <span class="cal-b">{{ b }}</span>
        <span>=</span>
        <span class="cal-r">{{ r }}</span>
      </p>
      <p>
        <input type="text" placeholder="Number a" class="cal-input a" />
        <input type="text" placeholder="Number b" class="cal-input b" />
      </p>
      <p>
        <button class="cal-btn">+</button>
        <button class="cal-btn">-</button>
        <button class="cal-btn">*</button>
        <button class="cal-btn">/</button>
      </p>
    `,
    render: function (mutedData) {
      if (!mutedData) {
        this.template = this.template.replace(
          /\{\{(.*?)\}\}/g,
          function (node, key) {
            return model[key.trim()];
          }
        )

        var container = document.createElement('div');
        container.innerHTML = this.template;
        document.querySelector(this.el).appendChild(container);
      } else {
        for (var k in mutedData) {
          document.querySelector('.cal-' + k).textContent = mutedData[k];
        }
      }
    }
  }

  var controller = {
    init: function () {
      var oCalInputs = document.querySelectorAll('.cal-input'),
          oCalBtns = document.querySelectorAll('.cal-btn'),
          inputItem,
          btnItem;
      
      for (var i = 0; i < oCalInputs.length; i ++) {
        inputItem = oCalInputs[i];

        inputItem.addEventListener('input', this.handleInput, false);
      }

      for (var i = 0; i < oCalBtns.length; i ++) {
        btnItem = oCalBtns[i];

        btnItem.addEventListener('click', this.handleBtnClick, false);
      }
    },
    handleInput: function (e) {
      var tar = e.target,
          value = Number(tar.value),
          field = tar.className.split(' ')[1];

      model[field] = value;
      
      with (model) {
        r = eval('a' + s + 'b');
      }
    },
    handleBtnClick: function (e) {
      var type = e.target.textContent;

      model.s = type;

      with (model) {
        r = eval('a' + s + 'b');
      }
    }
  }

  init();

})();