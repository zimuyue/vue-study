/**
 * M: Model      数据模型（模型层） -> 操作数据库 (对数据进行增删改查的操作)
 * V: View       视图层 -> 显示视图或视图模板
 * C: Controller 控制器层 -> 逻辑层  数据和视图关联挂载和基本的逻辑操作
 *        服务端渲染
 *        View需要数据 -> Controller对应的方法 -> 调用Model的方法 ->
 *        获取数据 -> 返回给Controller对应的方法 -> render到View中
 *        
 *        前端渲染               
 *                          API层  前端请求的API对应的是控制器中的方法
 *        前端 -> 异步请求URL -> 控制器中的一个方法 
 *        -> Model层的方法 -> 操作数据库 -> 获取数据 ->
 *        返回给控制器方法 -> 响应回前端
 * 
 * 前端MVC
 * 
 * Model -> 管理视图所需要的数据 -> 数据与视图的关联
 * View -> HTML模板 + 视图渲染
 * Controller -> 管理事件逻辑
 * 
 * 加减乘除计算器
 * 
 * Model -> data -> a b s r
 *          watch -> data change -> update view
 * 
 * view -> template -> render 
 * 
 * controller -> event trigger -> model/data
 * 
 * 
 * controller -> model -> view
 * view -> controller -> model
 * 
 * MVVM模型雏形   ViewModel     M data/逻辑  V view   
 * vue -> 关注于视图渲染  MV -> ViewModel whatever
 * 严格意义上说vue其实不算是完整的MVVM 因为视图层可以去使用 ref -> DOM节点   
 * ViewModel -> 收集依赖、模板编译、数据劫持
 * 
 * angular -> MVW  whatever
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