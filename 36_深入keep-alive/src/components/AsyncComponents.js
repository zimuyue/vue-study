import { defineAsyncComponent } from 'vue';

export const Intro = defineAsyncComponent(() => import(/* webpackChunkName: "Intro" */ './Intro'));
export const List = defineAsyncComponent(() => import(/* webpackChunkName: "List" */ './List'));
export const Article = defineAsyncComponent(() => import(/* webpackChunkName: "Article" */ './Article'));