export { default as Component } from './class/Component';
export { default as render } from './core/render';
export { default as renderToString } from './core/renderToString';
export { default as unmountComponentAtNode } from './core/unmountComponentAtNode';
export { default as FragmentValueTypes } from './enum/fragmentValueTypes';
export { default as TemplateTypes } from './enum/templateTypes';
export { default as createFragment } from './core/createFragment';
export { default as createTemplate } from './core/createTemplate';
export { default as clearDomElement } from './core/clearDomElement';
export { default as createRef } from './core/createRef';
export { default as registerAttributes } from './template/registerAttributeHandlers';
export { registerSetupHooks } from './template/events/hooks/createListenerArguments';
export { registerEventHooks } from './template/events/hooks/listenerSetup';