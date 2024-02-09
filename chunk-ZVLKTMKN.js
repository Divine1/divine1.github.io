import{a as p,b as h,c as u,d as o,e as r,g as d,h as t,i as e,j as l,k as n,o as f,u as S}from"./chunk-VY2TR5F5.js";var v=(()=>{let i=class i{constructor(){this.singletonCodeExample=`
  @Component
  public class MySingletonBean {
      // Bean definition
  }
  `,this.prototypeCodeExample=`
  @Component
  @Scope("prototype")
  public class MyPrototypeBean {
      // Bean definition
  }
  
  `,this.requestScopeCodeExample=`
  @Component
  @Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)
  public class MyRequestScopedBean {
      // Bean definition
  }
  `,this.sessionScopeCodeExample=`
  @Component
  @Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
  public class MySessionScopedBean {
      // Bean definition
  }
  `}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=h({type:i,selectors:[["app-springbeanscopes"]],decls:61,vars:4,consts:[[1,"ab-blogTitle"],[1,"ab-contentcontainer"],[1,"ab-title"],[1,"ab-content","ab-pad-l-1","ab-hyphen-in-children"],[1,"ab-pad-l-1",3,"innerHTML"]],template:function(a,c){a&1&&(t(0,"div")(1,"div",0),n(2," Spring bean scopes "),e(),t(3,"div"),n(4," Bean scopes define the lifecycle and visibility of a bean within a Spring container "),e(),t(5,"div",1)(6,"div",2),n(7,"Singleton"),e(),t(8,"div",3)(9,"div"),n(10,"A single instance of the bean is created for the entire Spring container"),e(),t(11,"div"),n(12,"It is the default scope if not specified"),e(),t(13,"div"),n(14,"The Spring container manages the creation and destruction of the singleton bean"),e(),t(15,"div"),n(16,"Singleton-scoped beans are shared across all HTTP requests, and their lifecycle is managed by the Spring container"),e(),t(17,"div"),n(18,"It's crucial to ensure thread safety in singleton beans and be mindful of the shared state when designing components that are used across multiple requests"),e()(),l(19,"pre",4),e(),t(20,"div",1)(21,"div",2),n(22,"Prototype Scope"),e(),t(23,"div",3)(24,"div"),n(25," A new instance of the bean is created every time it is requested, and the Spring container does not manage the destruction of prototype-scoped beans "),e(),t(26,"div"),n(27," It is the responsibility of the client code to release resources and manage the lifecycle "),e(),t(28,"div"),n(29," It is often used for stateless or stateful beans that require a short lifecycle and should not be shared between different parts of the application "),e()(),l(30,"pre",4),e(),t(31,"div",1)(32,"div",2),n(33,"Request Scope"),e(),t(34,"div",3)(35,"div"),n(36," A new instance of the bean is created for each HTTP request, and the instance is destroyed when the request is completed "),e(),t(37,"div"),n(38," Suitable when you need to maintain stateful information during the processing of a single HTTP request. Each user request gets its own instance of the bean. Doesnot share state. "),e(),t(39,"div"),n(40," The Spring container manages the creation and destruction of request-scoped beans, making it suitable for scenarios where resource cleanup is necessary at the end of each request "),e(),t(41,"div"),n(42," Typically, request-scoped beans are not shared between threads, ensuring a level of thread safety within the context of a single HTTP request "),e()(),l(43,"pre",4),e(),t(44,"div",1)(45,"div",2),n(46,"Session Scope"),e(),t(47,"div",3)(48,"div"),n(49," A new instance of the bean is created for each HTTP session "),e(),t(50,"div"),n(51," The instance persists and remains active throughout the duration of the user's session "),e(),t(52,"div"),n(53," Suitable for maintaining stateful information across multiple requests within the same user session "),e(),t(54,"div"),n(55," The Spring container manages the creation and destruction of session-scoped beans "),e(),t(56,"div"),n(57," Resources associated with the bean are released when the user session ends or times out "),e(),t(58,"div"),n(59," Session-scoped beans are not inherently thread-safe. If multiple threads simultaneously access the same user session, they might access the same instance, leading to potential thread safety issues "),e()(),l(60,"pre",4),e()()),a&2&&(r(19),d("innerHTML",c.singletonCodeExample,o),r(11),d("innerHTML",c.prototypeCodeExample,o),r(13),d("innerHTML",c.requestScopeCodeExample,o),r(17),d("innerHTML",c.sessionScopeCodeExample,o))}});let s=i;return s})();var y=[{path:"beanscopes",component:v}],C=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=u({type:i}),i.\u0275inj=p({imports:[f,S.forChild(y)]});let s=i;return s})();export{C as SpringbootModule};
